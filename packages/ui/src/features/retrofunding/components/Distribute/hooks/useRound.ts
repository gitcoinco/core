import { useMemo } from "react";

import { PoolConfig } from "@gitcoin/types";

import { StatCardProps } from "@/primitives/StatCard";
import { StatCardGroupProps } from "@/primitives/StatCardGroup";

import { formatAmount, safeParseUnits } from "../utils";

export const useRound = ({
  poolConfig,
  totalPaid,
  distributionCompleted,
}: {
  poolConfig: PoolConfig;
  totalPaid: bigint;
  distributionCompleted: boolean;
}) => {
  const [tokensNeeded, currentBalance] = useMemo(() => {
    try {
      const totalNeeded = safeParseUnits(
        poolConfig.amountOfTokensToDistribute,
        poolConfig.tokenDecimals,
      );

      const currentBalance = BigInt(poolConfig.amountOfTokensInPool);
      return [totalNeeded - currentBalance - totalPaid, currentBalance];
    } catch (error) {
      console.error("Error calculating tokens needed:", error);
      return [0n, 0n];
    }
  }, [poolConfig]);

  const formattedNeededTokens = formatAmount(tokensNeeded, poolConfig.tokenDecimals, 5);
  const formattedCurrentBalance = formatAmount(currentBalance, poolConfig.tokenDecimals, 5);
  const formattedTotalPaid = formatAmount(totalPaid, poolConfig.tokenDecimals, 5);

  const statCards: StatCardProps[] = [
    {
      label: "Funding set at round creation",
      value: `${poolConfig.amountOfTokensToDistribute} ${poolConfig.tokenTicker}`,
    },
    {
      label: "Amount in pool",
      value: `${formattedCurrentBalance} ${poolConfig.tokenTicker}`,
    },
    {
      label: "Amount distributed to grantees",
      value: `${formattedTotalPaid} ${poolConfig.tokenTicker}`,
    },
  ].map((statCard) => ({
    ...statCard,
    size: "md",
  }));

  const statCardGroupProps: StatCardGroupProps = {
    stats: statCards,
  };

  const fundRoundCompleted =
    tokensNeeded <= 0n ||
    safeParseUnits(poolConfig.amountOfTokensToDistribute, poolConfig.tokenDecimals) <=
      totalPaid + currentBalance ||
    distributionCompleted;

  return {
    statCardGroupProps,
    fundRoundCompleted,
    formattedNeededTokens,
    formattedCurrentBalance,
    formattedTotalPaid,
    tokensNeeded,
  };
};
