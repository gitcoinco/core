import Decimal from "decimal.js";

import { decimalToBigint } from "./decimal";
import { safeParseUnits } from "./formatting";
import { formatAmountFromPercentageWithConstant } from "./percentage";

// Configure Decimal.js for maximum precision
Decimal.set({
  precision: 64, // Precision for financial calculations
  rounding: Decimal.ROUND_DOWN, // Better for financial calculations (prevents overshooting)
});

/**
 * Logs essential information about pool balance and requested amounts
 */
function logPoolStatus(totalRequested: bigint, poolBalance: bigint) {
  const difference = poolBalance - totalRequested;
  const status = difference >= 0n ? "surplus" : "deficit";
  console.log(
    `Pool ${status}: ${Math.abs(
      Number(difference),
    )} wei (requested: ${totalRequested}, available: ${poolBalance})`,
  );
  return difference;
}

/**
 * Tracks and logs changes made to application amounts
 */
function logApplicationChanges(
  adjustedApplications: { id: string; amount: bigint }[],
  originalAmounts: Map<string, bigint>,
  logAllChanges = false,
) {
  console.log("Per-application changes (wei):");
  adjustedApplications.forEach((app) => {
    const original = originalAmounts.get(app.id) || 0n;
    const delta = app.amount - original;
    if (logAllChanges || delta !== 0n) {
      console.log(
        `- App ${app.id}: ${delta > 0n ? "+" : ""}${delta} (${original} → ${app.amount})`,
      );
    }
  });
}

/**
 * Creates a copy of applications and collects original amounts
 */
function prepareApplicationsForAdjustment(applications: { id: string; amount: bigint }[]) {
  const adjustedApplications = applications.map((app) => ({ ...app }));
  const originalAmounts = new Map<string, bigint>();

  adjustedApplications.forEach((app) => {
    originalAmounts.set(app.id, app.amount);
  });

  return { adjustedApplications, originalAmounts };
}

/**
 * Distributes remaining wei across applications in a round-robin fashion
 */
function distributeRemainingWei(
  applications: { id: string; amount: bigint }[],
  remainingWei: bigint,
  sortByLargestFirst = false,
  originalAmounts?: Map<string, bigint>,
): void {
  if (remainingWei <= 0n || applications.length === 0) {
    return;
  }

  // Create a working copy with references to the original objects
  const appsToDistribute = applications.map((app, index) => ({
    app,
    index,
    originalAmount: originalAmounts?.get(app.id) || app.amount,
  }));

  // Sort based on the specified strategy
  if (sortByLargestFirst && originalAmounts) {
    // Sort by original amount (largest first) for fair distribution
    appsToDistribute.sort((a, b) => {
      return b.originalAmount > a.originalAmount ? 1 : b.originalAmount < a.originalAmount ? -1 : 0;
    });
  } else {
    // Sort by current amount (smallest first) to prioritize smaller allocations
    appsToDistribute.sort((a, b) => {
      return a.app.amount < b.app.amount ? -1 : a.app.amount > b.app.amount ? 1 : 0;
    });
  }

  // Distribute one by one in round-robin fashion
  let remaining = remainingWei;
  let index = 0;

  while (remaining > 0n && appsToDistribute.length > 0) {
    // Directly update the original application object
    appsToDistribute[index].app.amount += 1n;
    remaining -= 1n;

    // Move to next application in round-robin fashion
    index = (index + 1) % appsToDistribute.length;

    // Safety check for infinite loops with very large remaining values
    if (remaining > 1_000_000n && index === 0) {
      console.log(
        `Distribution stopped: ${
          remainingWei - remaining
        } wei distributed, ${remaining} wei remaining`,
      );
      break;
    }
  }
}

/**
 * Adjusts application amounts to match the pool balance, handling both surplus and deficit cases
 * with a unified approach that scales for large differences and distributes one-by-one for small differences
 *
 * @param applications - Array of applications with their allocated amounts
 * @param poolBalance - Available pool balance in smallest units (wei/gwei)
 * @returns Applications with adjusted amounts to match pool balance
 */
export function adjustAmountsToMatchPool(
  applications: { id: string; amount: bigint }[],
  poolBalance: bigint,
): { id: string; amount: bigint }[] {
  const { adjustedApplications, originalAmounts } = prepareApplicationsForAdjustment(applications);

  // Calculate total requested amount
  const totalRequested = adjustedApplications.reduce((sum, app) => sum + app.amount, 0n);

  // If perfectly balanced, return as is
  if (totalRequested === poolBalance) {
    return adjustedApplications;
  }

  // Calculate and log the difference
  const difference = logPoolStatus(totalRequested, poolBalance);
  const isDeficit = difference < 0n;
  const absDifference = isDeficit ? -difference : difference;

  // Determine if we should use scaling or one-by-one matching wei distribution
  // For large differences or large application sets, scaling is more efficient
  const useScaling = absDifference > 1_000_000n || applications.length > 100;

  if (useScaling) {
    console.log(`Using scaling approach (difference: ${absDifference} wei)`);

    // Calculate scaling ratio based on whether we have surplus or deficit
    const scalingRatio = isDeficit
      ? new Decimal(poolBalance.toString()).div(totalRequested.toString())
      : new Decimal(poolBalance.toString()).div(totalRequested.toString());

    if (isDeficit) {
      console.log(
        `Scaling ratio: ${scalingRatio.toFixed(6)} (keeping ~${scalingRatio.mul(100).toFixed(2)}%)`,
      );
    } else {
      console.log(
        `Scaling ratio: ${scalingRatio.toFixed(6)} (increasing by ~${scalingRatio
          .sub(1)
          .mul(100)
          .toFixed(2)}%)`,
      );
    }

    // Apply scaling to all applications
    for (const app of adjustedApplications) {
      const scaledDecimal = new Decimal(app.amount.toString()).mul(scalingRatio);
      app.amount = decimalToBigint(scaledDecimal);
    }

    // Calculate any remaining amount after scaling
    const totalAfterScaling = adjustedApplications.reduce((sum, app) => sum + app.amount, 0n);
    const remainingBalance = poolBalance - totalAfterScaling;

    // Distribute any remaining wei one-by-one
    if (remainingBalance !== 0n) {
      // For deficit (negative remainingBalance), we need to take wei away
      // For surplus (positive remainingBalance), we add wei
      distributeRemainingWei(
        adjustedApplications,
        remainingBalance,
        isDeficit, // For deficit, distribute from largest first
        originalAmounts,
      );
    }
  } else {
    console.log(`Using one-by-one distribution approach (difference: ${absDifference} wei)`);

    // For small differences, just use one-by-one distribution
    // If deficit, we need to reduce amounts one by one
    if (isDeficit) {
      // Create a sorted copy from smallest to largest for taking away wei
      const sortedApps = [...adjustedApplications].sort((a, b) =>
        a.amount > b.amount ? -1 : a.amount < b.amount ? 1 : 0,
      );

      // Remove wei one by one
      let remaining = absDifference;
      let index = 0;

      while (remaining > 0n && index < sortedApps.length) {
        const app = sortedApps[index];

        // Don't reduce to less than 0
        if (app.amount > 0n) {
          app.amount -= 1n;
          remaining -= 1n;
        }

        // Move to next application in round-robin fashion
        index = (index + 1) % sortedApps.length;
      }
    } else {
      // For surplus, distribute extra wei one by one
      distributeRemainingWei(adjustedApplications, difference, false);
    }
  }

  // Log changes per application
  logApplicationChanges(adjustedApplications, originalAmounts);

  return adjustedApplications;
}

/**
 * Modified formatAndAdjustAmounts function that uses unified adjustment approach
 */
export function formatAndAdjustAmounts(
  applications: { id: string; payoutPercentage: number | Decimal }[],
  availableTokensToDistribute: number,
  tokenDecimals: number,
  constantAmountPerGrant: number,
  poolBalance: number,
): { applicationId: string; amount: bigint }[] {
  if (applications.length === 0) {
    return [];
  }

  // 1. Map applications to get initial amounts
  const applicationsWithAmounts = applications.map((p) => ({
    id: p.id,
    amount: formatAmountFromPercentageWithConstant(
      availableTokensToDistribute,
      p.payoutPercentage,
      tokenDecimals,
      constantAmountPerGrant,
    ),
  }));

  // 2. Calculate the total requested and available pool amount
  const totalRequested = applicationsWithAmounts.reduce((sum, app) => sum + app.amount, 0n);
  const totalAvailable = safeParseUnits(poolBalance.toString(), tokenDecimals);

  console.log(
    `Requested: ${totalRequested} wei | Available: ${totalAvailable} wei | Difference: ${
      totalAvailable - totalRequested
    } wei`,
  );

  // 3. Use unified adjustment approach for both surplus and deficit cases
  const finalApplications = adjustAmountsToMatchPool(applicationsWithAmounts, totalAvailable);

  // Final allocated total
  console.log(
    `Final total to be distributed: ${finalApplications.reduce(
      (sum, app) => sum + app.amount,
      0n,
    )} wei`,
  );

  return finalApplications.map((app) => ({
    applicationId: app.id,
    amount: app.amount,
  }));
}
