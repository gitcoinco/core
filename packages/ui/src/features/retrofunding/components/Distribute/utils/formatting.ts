import Decimal from "decimal.js";

import { bigintToDecimal, decimalToBigint } from "./decimal";

// Configure Decimal.js for maximum precision
Decimal.set({
  precision: 64,
  rounding: Decimal.ROUND_DOWN,
});

/**
 * Safely parses token amounts with improved precision
 *
 * @param amount - Number or string to parse (e.g., 1e18, "1e18", 1.23)
 * @param tokenDecimals - Number of decimal places for the token (e.g., 18 for ETH)
 * @returns The amount in the token's smallest unit as bigint
 */
export const safeParseUnits = (
  amount: number | string | Decimal | bigint,
  tokenDecimals: number,
): bigint => {
  if (tokenDecimals < 0) {
    throw new Error("Decimals cannot be negative");
  }

  // Convert input to Decimal
  const decimalAmount = new Decimal(amount.toString());
  const decimalsMultiplier = new Decimal(10).pow(tokenDecimals);

  // Multiply by 10^decimals and return as bigint
  const result = decimalAmount.mul(decimalsMultiplier);

  return decimalToBigint(result);
};

/**
 * Formats a token amount with improved precision
 *
 * @param amount - The amount in the token's smallest unit as a bigint
 * @param decimals - The number of decimal places for the token (e.g., 18 for ETH)
 * @param maxDecimals - Optional. The maximum number of decimal places to display
 * @returns A formatted string representation of the amount
 */
export const formatAmount = (amount: bigint, decimals: number, maxDecimals?: number): string => {
  if (decimals < 0) {
    throw new Error("Decimals cannot be negative");
  }

  // Convert to Decimal
  const decimalAmount = bigintToDecimal(amount);
  const divisor = new Decimal(10).pow(decimals);
  const formatted = decimalAmount.div(divisor);

  // Handle very small numbers with precise comparison
  if (formatted.gt(0) && formatted.lt("0.0001")) {
    return "< 0.0001";
  }

  if (maxDecimals !== undefined && formatted.gt(0)) {
    return formatted.toFixed(maxDecimals, Decimal.ROUND_DOWN).replace(/\.?0+$/, ""); // Remove trailing zeros and decimal point if needed
  }

  // Return full precision number
  return formatted.toFixed();
};
