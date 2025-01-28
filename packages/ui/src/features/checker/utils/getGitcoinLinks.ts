import { getChains, TChain } from "@gitcoin/gitcoin-chain-data";

import { PoolType } from "@/types";

type ChainIdToType = Record<number, string>;

const chainData = getChains();

const chainIdToType: ChainIdToType = chainData.reduce((acc, chain: TChain) => {
  acc[chain.id] = chain.type;
  return acc;
}, {} as ChainIdToType);

const getUrlByChainType = (chainId: number, mainnetUrl: string, stagingUrl: string): string => {
  const chainType = chainIdToType[chainId];
  return chainType === "mainnet" ? mainnetUrl : stagingUrl;
};

// --- Manager ---

export const getManagerUrl = (chainId: number, strategyName?: PoolType): string => {
  switch (strategyName) {
    case PoolType.Retrofunding:
      return "https://retrofunding-amber.vercel.app";
    default:
      return getUrlByChainType(
        chainId,
        "https://manager.gitcoin.co",
        "https://grants-stack-manager-staging.vercel.app",
      );
  }
};

export const getProgramLinkOnManager = (
  chainId: number,
  programId: string,
  strategyName?: PoolType,
) => {
  switch (strategyName) {
    default:
      return `${getManagerUrl(chainId, strategyName)}/#/chain/${chainId}/program/${programId}`;
  }
};

export const getRoundLinkOnManager = (chainId: number, poolId: string, strategyName?: PoolType) => {
  switch (strategyName) {
    default:
      return `${getManagerUrl(chainId, strategyName)}/#/chain/${chainId}/round/${poolId}`;
  }
};

// Builder

export const getBuilderUrl = (chainId: number, strategyName?: PoolType): string => {
  switch (strategyName) {
    case PoolType.Retrofunding:
    default:
      return getUrlByChainType(
        chainId,
        "https://builder.gitcoin.co",
        "https://grants-stack-builder-staging.vercel.app",
      );
  }
};

export const getApplyLink = (chainId: number, poolId: string, strategyName?: PoolType) => {
  switch (strategyName) {
    default:
      return `${getBuilderUrl(chainId, strategyName)}/#/chains/${chainId}/rounds/${poolId}/apply`;
  }
};

// --- Explorer ---
export const getExplorerUrl = (chainId: number, strategyName?: PoolType): string => {
  switch (strategyName) {
    case PoolType.Retrofunding:
      return "https://retrofunding-vote.vercel.app";
    default:
      return getUrlByChainType(
        chainId,
        "https://explorer.gitcoin.co",
        "https://grants-stack-explorer-staging.vercel.app",
      );
  }
};

export const getPoolLinkOnExplorer = (chainId: number, poolId: string, strategyName?: PoolType) => {
  switch (strategyName) {
    default:
      return `${getExplorerUrl(chainId, strategyName)}/#/round/${chainId}/${poolId}`;
  }
};

export const getApplicationLinkOnExplorer = (
  chainId: number,
  poolId: string,
  applicationId: string,
  strategyName?: PoolType,
) => {
  switch (strategyName) {
    default:
      return `${getExplorerUrl(
        chainId,
        strategyName,
      )}/#/round/${chainId}/${poolId}/${applicationId}`;
  }
};

export const getVotingInterfaceLinkOnExplorer = (
  chainId: number,
  poolId: string,
  strategyName?: PoolType,
) => {
  switch (strategyName) {
    default:
      return `${getExplorerUrl(chainId, strategyName)}/#/round/${chainId}/${poolId}/voting`;
  }
};
