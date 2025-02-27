import * as chains from "viem/chains";

export const getTransactionUrl = (chainId: number, transactionHash: string) => {
  const chainName = Object.keys(chains).find(
    (key) => chains[key as keyof typeof chains].id === chainId,
  );
  if (!chainName) {
    return null;
  }
  const chain = chains[chainName as keyof typeof chains];
  if (!chain.blockExplorers?.default?.url) {
    return null;
  }
  return chain.blockExplorers?.default?.url + "/tx/" + transactionHash;
};
