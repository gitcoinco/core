import Decimal from "decimal.js";

// Configure Decimal.js for maximum precision
Decimal.set({
  precision: 64,
  rounding: Decimal.ROUND_DOWN,
});
/**
 * Converts a bigint to Decimal maintaining full precision
 */
export const bigintToDecimal = (value: bigint): Decimal => {
  return new Decimal(value.toString());
};

/**
 * Converts a Decimal to bigint, handling decimals appropriately
 */
export const decimalToBigint = (value: Decimal): bigint => {
  return BigInt(value.toFixed(0, Decimal.ROUND_DOWN));
};
