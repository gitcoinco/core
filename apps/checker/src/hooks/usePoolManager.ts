"use client";

import { generatePoolUUID } from "@gitcoin/utils/checker";

import { useCheckerContext } from "@/store";

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
