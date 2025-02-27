import { PoolStatus } from "./pool";

export interface ApplicationPayout {
  id: string;
  title: string;
  imageUrl: string;
  payoutAddress: string;
  payoutPercentage: number;
  payoutTransactionHash?: string;
}

export interface PoolConfig {
  tokenTicker: string;
  amountOfTokensInPool: bigint | string;
  amountOfTokensToDistribute: number;
  tokenDecimals: number;
  poolStatus: PoolStatus;
  chainId: number;
}
