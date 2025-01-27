"use client";

import { useCheckerContext } from "@/features/checker/store/hooks/useCheckerContext";

import { DefaultStatCardsProps } from "~checker/constants";
import { categorizeProjectReviews, generatePoolUUID } from "~checker/utils";

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
