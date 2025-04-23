export const generatePoolUUID = (poolId?: string, chainId?: number) =>
  poolId && chainId ? `${poolId}-${chainId}` : null;
