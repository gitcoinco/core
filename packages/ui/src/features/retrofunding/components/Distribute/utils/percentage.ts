import Decimal from "decimal.js";

import { PoolConfig } from "@/types/distribute";

import { decimalToBigint } from "./decimal";

// Configure Decimal.js for maximum precision
Decimal.set({
  precision: 64, // Precision for financial calculations
  rounding: Decimal.ROUND_DOWN, // Better for financial calculations (prevents overshooting)
});

/**
 * Calculates a percentage of a token amount with high precision
 */
export const formatAmountFromPercentage = (
  amountOfTokens: number | string | Decimal,
  percentage: number | string | Decimal,
  tokenDecimals: number,
): bigint => {
  // Convert all inputs to Decimal for consistent handling
  const amount = new Decimal(amountOfTokens.toString());
  const percentageDecimal = new Decimal(percentage.toString());
  const decimalsMultiplier = new Decimal(10).pow(tokenDecimals);

  // Calculate: (amount * percentage / 100)
  const result = amount.mul(percentageDecimal).div(100).mul(decimalsMultiplier);

  return decimalToBigint(result);
};

/**
 * Formats a token amount from a percentage and constant with high precision
 */
export const formatAmountFromPercentageWithConstant = (
  amountOfTokens: number | string | Decimal,
  percentage: number | string | Decimal,
  tokenDecimals: number,
  constantAmountPerGrant: number | string | Decimal,
): bigint => {
  const percentageAmount = new Decimal(
    formatAmountFromPercentage(amountOfTokens, percentage, tokenDecimals).toString(),
  );

  const constantAmount = new Decimal(constantAmountPerGrant.toString());
  const decimalsMultiplier = new Decimal(10).pow(tokenDecimals);

  const totalAmount = percentageAmount.add(constantAmount.mul(decimalsMultiplier));

  return decimalToBigint(totalAmount);
};

/**
 * Gets available tokens to distribute with improved precision
 */
export const getAvailableTokensToDistribute = (
  numberOfApplications: number,
  poolConfig: PoolConfig,
): number => {
  const applications = new Decimal(numberOfApplications);
  const constantAmount = new Decimal(poolConfig.constantAmountPerGrant);
  const totalTokens = new Decimal(poolConfig.amountOfTokensToDistribute);

  const totalConstantAmount = applications.mul(constantAmount);
  const availableTokens = totalTokens.sub(totalConstantAmount);

  return Number(availableTokens.toFixed()); // Keep full precision
};
