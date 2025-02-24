"use client";

import { useCheckerContext } from "@/features/checker/store/hooks/useCheckerContext";

import { generatePoolUUID } from "~checker/utils";

export const usePoolManager = () => {
  const { poolId, chainId, poolsData, poolsFetchState } = useCheckerContext();

  const poolUUID = generatePoolUUID(poolId, chainId);

  if (!poolUUID) return false;

  const poolData = poolsData[poolUUID];

  const poolFetchState = poolsFetchState[poolUUID];

  if (poolFetchState.isLoading || poolFetchState.isError) {
    return false;
  }

  return poolData?.isPoolManager;
};
