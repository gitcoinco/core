import { getChains, TChain } from "@gitcoin/gitcoin-chain-data";

type ChainIdToType = Record<number, string>;

const chainData = getChains();

const chainIdToType: ChainIdToType = chainData.reduce((acc, chain: TChain) => {
  acc[chain.id] = chain.type;
  return acc;
}, {} as ChainIdToType);

export const getManagerUrl = (chainId: number): string => {
  const chainType = chainIdToType[chainId];
  return chainType === "mainnet"
    ? "https://manager.gitcoin.co"
    : "https://grants-stack-manager-staging.vercel.app";
};

export const getBuilderUrl = (chainId: number): string => {
  const chainType = chainIdToType[chainId];
  return chainType === "mainnet"
    ? "https://builder.gitcoin.co"
    : "https://grants-stack-builder-staging.vercel.app";
};

export const getExplorerUrl = (chainId: number): string => {
  const chainType = chainIdToType[chainId];
  return chainType === "mainnet"
    ? "https://explorer.gitcoin.co"
    : "https://grants-stack-explorer-staging.vercel.app";
};
