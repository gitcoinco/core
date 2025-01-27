"use client";

import { useEffect } from "react";

import { Hex } from "viem";

import { setInitialStateAction, useCheckerDispatchContext } from "~checker/store";

import { usePoolData } from "./usePoolData";

export interface InitData {
  address: Hex;
  poolId: string;
  chainId: number;
}

export const useInitialize = ({ address, poolId, chainId }: InitData) => {
  const dispatch = useCheckerDispatchContext();

  useEffect(() => {
    if (!address || !poolId || !chainId) return;
    dispatch(setInitialStateAction({ address, poolId, chainId }));
  }, [address, poolId, chainId]);

  usePoolData();
};
