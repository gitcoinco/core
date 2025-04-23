import { PoolStatus } from "@gitcoin/types";
import Decimal from "decimal.js";

export interface ApplicationPayout {
  id: string;
  title: string;
  imageUrl: string;
  payoutAddress: string;
  payoutPercentage: Decimal;
  payoutTransactionHash?: string;
}

export interface PoolConfig {
  tokenTicker: string;
  constantAmountPerGrant: number;
  amountOfTokensInPool: bigint | string;
  amountOfTokensToDistribute: number;
  tokenDecimals: number;
  poolStatus: PoolStatus;
  chainId: number;
}
