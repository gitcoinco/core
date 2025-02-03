import { parseUnits } from "viem";

export const formatAmountFromPercentage = (
  amountOfTokens: number,
  percentage: number,
  tokenDecimals: number,
) => {
  return parseUnits(((amountOfTokens * percentage) / 100).toString(), tokenDecimals);
};
