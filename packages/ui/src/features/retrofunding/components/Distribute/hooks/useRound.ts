import { useMemo } from "react";

import { StatCardProps } from "@/primitives/StatCard";
import { StatCardGroupProps } from "@/primitives/StatCardGroup";
import { PoolConfig } from "@/types/distribute";

import { formatAmount, safeParseUnits } from "../utils";

export const useRound = ({
  poolConfig,
  totalPaid,
}: {
  poolConfig: PoolConfig;
  totalPaid: bigint;
}) => {
  const [tokensNeeded, currentBalance] = useMemo(() => {
    try {
      const totalNeeded = safeParseUnits(
        poolConfig.amountOfTokensToDistribute,
        poolConfig.tokenDecimals,
      );

      const currentBalance = safeParseUnits(
        poolConfig.amountOfTokensInPool,
        poolConfig.tokenDecimals,
      );
      return [totalNeeded - currentBalance - totalPaid, currentBalance];
    } catch (error) {
      console.error("Error calculating tokens needed:", error);
      return [0n, 0n];
    }
  }, [poolConfig]);

  const formattedNeededTokens = formatAmount(tokensNeeded, poolConfig.tokenDecimals, 4);
  const formattedCurrentBalance = formatAmount(currentBalance, poolConfig.tokenDecimals);
  const formattedTotalPaid = formatAmount(totalPaid, poolConfig.tokenDecimals, 4);

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
    (tokensNeeded === 0n && totalPaid === 0n) ||
    safeParseUnits(poolConfig.amountOfTokensToDistribute, poolConfig.tokenDecimals) <=
      totalPaid + currentBalance;

  return {
    statCardGroupProps,
    fundRoundCompleted,
    formattedNeededTokens,
    formattedCurrentBalance,
    formattedTotalPaid,
    tokensNeeded,
  };
};
