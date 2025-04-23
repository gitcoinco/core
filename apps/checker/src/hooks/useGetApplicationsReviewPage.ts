"use client";

import { categorizeProjectReviews, generatePoolUUID } from "@gitcoin/utils/checker";

import { DefaultStatCardsProps } from "@/constants";
import { useCheckerContext } from "@/store/hooks/useCheckerContext";

export const useGetApplicationsReviewPage = () => {
  const { poolId, chainId, poolsData, poolsFetchState } = useCheckerContext();

  const poolUUID = generatePoolUUID(poolId, chainId);

  if (!poolUUID) return null;

  const poolData = poolsData[poolUUID];

  const poolFetchState = poolsFetchState[poolUUID];

  if (!poolData?.applications) {
    return {
      statCardsProps: DefaultStatCardsProps,
      poolData,
      poolFetchState,
    };
  }

  const { categorizedReviews, statCardsProps } = categorizeProjectReviews(poolData?.applications);

  return {
    categorizedReviews,
    statCardsProps: statCardsProps ?? DefaultStatCardsProps,
    poolData,
    poolFetchState,
  };
};
