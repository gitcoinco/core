import { formatUnits, parseUnits } from "viem";

/**
 * Calculates a percentage of a token amount and converts it to the token's smallest unit (wei/gwei/etc)
 * @param amountOfTokens - The total amount of tokens in human readable format (e.g., 100 for 100 tokens)
 * @param percentage - The percentage to calculate (e.g., 50 for 50%)
 * @param tokenDecimals - The number of decimal places for the token (e.g., 18 for ETH)
 * @returns The calculated amount in the token's smallest unit as a bigint
 */
export const formatAmountFromPercentage = (
  amountOfTokens: number,
  percentage: number,
  tokenDecimals: number,
) => {
  return safeParseUnits((amountOfTokens * percentage) / 100, tokenDecimals);
};

/**
 * Safely parses token amounts by converting scientific notation (e.g., 1e18) to decimal format.
 * Resolves common parseUnits errors when dealing with scientific notation inputs.
 *
 * @param amount - Number or string to parse (e.g., 1e18, "1e18", 1.23)
 * @param tokenDecimals - Number of decimal places for the token (e.g., 18 for ETH)
 * @returns The amount in the token's smallest unit as bigint
 *
 * @example
 * safeParseUnits("1e18", 18) // Works ✓ (would fail with regular parseUnits)
 * safeParseUnits(1e18, 18)   // Works ✓ (would fail with regular parseUnits)
 * safeParseUnits(1.23, 18)   // Works as usual
 */
export const safeParseUnits = (amount: number | string, tokenDecimals: number) => {
  const numberAmount = typeof amount === "string" ? Number(amount) : amount;
  const safeAmount = numberAmount.toLocaleString("fullwide", {
    useGrouping: false,
    maximumSignificantDigits: 18,
  });
  return parseUnits(safeAmount, tokenDecimals);
};

/**
 * Formats a token amount from its smallest unit (wei/gwei/etc) to a human readable string
 * @param amount - The amount in the token's smallest unit as a bigint
 * @param decimals - The number of decimal places for the token (e.g., 18 for ETH)
 * @param maxDecimals - Optional. The maximum number of decimal places to display
 * @returns A formatted string representation of the amount
 *
 * Examples:
 * - Very small numbers (< 0.000001) return "< 0.000001"
 * - With maxDecimals=4: 1.23456789 returns "1.2345"
 * - Without maxDecimals: Returns full precision number
 */
export const formatAmount = (amount: bigint, decimals: number, maxDecimals?: number) => {
  // Convert from smallest unit to human readable format
  const formatted = formatUnits(amount, decimals);

  // Convert to number for comparison (only used for small number check)
  const num = Number(formatted);

  // Display special string for very small non-zero numbers
  if (num < 0.000001 && num > 0) {
    return "< 0.000001";
  }

  if (maxDecimals !== undefined) {
    // Split into integer and decimal parts to handle truncation without rounding
    const [integerPart, decimalPart = ""] = formatted.split(".");
    // Truncate decimal places to maxDecimals
    const truncatedDecimal = decimalPart.slice(0, maxDecimals);
    // Only include decimals if they're not all zeros
    const hasSignificantDecimals = truncatedDecimal.match(/[1-9]/);
    return hasSignificantDecimals ? `${integerPart}.${truncatedDecimal}` : integerPart;
  }

  // For full precision numbers, format without scientific notation
  return num.toLocaleString("fullwide", {
    useGrouping: false,
    maximumSignificantDigits: 18,
  });
};
