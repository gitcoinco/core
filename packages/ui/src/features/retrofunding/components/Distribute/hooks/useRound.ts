import { useMemo } from "react";

import { formatUnits } from "viem";
import { parseUnits } from "viem";

import { PoolConfig } from "@/types/distribute";
import { StatCardProps } from "@/primitives/StatCard";
import { StatCardGroupProps } from "@/primitives/StatCardGroup";

export const useRound = ({
  poolConfig,
  totalPaid,
}: {
  poolConfig: PoolConfig;
  totalPaid: bigint;
}) => {
  const [tokensNeeded, currentBalance] = useMemo(() => {
    try {
      const totalNeeded = parseUnits(
        poolConfig.amountOfTokensToDistribute.toString(),
        poolConfig.tokenDecimals,
      );

      const currentBalance = parseUnits(
        poolConfig.amountOfTokensInPool.toString(),
        poolConfig.tokenDecimals,
      );
      return [totalNeeded - currentBalance, currentBalance];
    } catch (error) {
      console.error("Error calculating tokens needed:", error);
      return [0n, 0n];
    }
  }, [poolConfig]);

  const formattedNeededTokens = formatUnits(tokensNeeded, poolConfig.tokenDecimals);
  const formattedCurrentBalance = formatUnits(currentBalance, poolConfig.tokenDecimals);
  const formattedTotalPaid = formatUnits(totalPaid, poolConfig.tokenDecimals);

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
    parseUnits(poolConfig.amountOfTokensToDistribute.toString(), poolConfig.tokenDecimals) <=
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
