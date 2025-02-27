import { parseUnits } from "viem";

import { PoolStatus } from "@/types";
import { ApplicationPayout, PoolConfig } from "@/types/distribute";

export const TOKEN_DECIMALS = 18;

export const POOL_CONFIG: PoolConfig = {
  tokenTicker: "ETH",
  amountOfTokensInPool: parseUnits("10", TOKEN_DECIMALS).toString(),
  amountOfTokensToDistribute: 100,
  tokenDecimals: TOKEN_DECIMALS,
  poolStatus: PoolStatus.FundingPending,
  chainId: 11155111,
};

export const MOCK_APPLICATIONS: ApplicationPayout[] = [
  {
    id: "1",
    title: "Project Alpha",
    imageUrl: "https://picsum.photos/100",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 23,
  },
  {
    id: "2",
    title: "Long Project Title That Might Need Truncation",
    imageUrl: "https://picsum.photos/101",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 23,
  },
  {
    id: "3",
    title: "Project Beta",
    imageUrl: "https://picsum.photos/102",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 23,
  },
  {
    id: "4",
    title: "Project Gamma",
    imageUrl: "https://picsum.photos/103",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 23,
  },
  {
    id: "5",
    title: "Project Delta",
    imageUrl: "https://picsum.photos/104",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 2 + 1e-7,
    payoutTransactionHash: "0x010ddbb8a9039a7f9c672538b6dded667dd7ca9cad9f9fd5bf6aed1301bcdb5b",
  },
  {
    id: "6",
    title: "Project Epsilon",
    imageUrl: "https://picsum.photos/105",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 1 + (1 - 1e-7),
    payoutTransactionHash: "0x010ddbb8a9039a7f9c672538b6dded667dd7ca9cad9f9fd5bf6aed1301bcdb5b",
  },

  {
    id: "7",
    title: "Project Zeta",
    imageUrl: "https://picsum.photos/106",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 2,
  },
  {
    id: "8",
    title: "Project Epsilon",
    imageUrl: "https://picsum.photos/107",
    payoutAddress: "0x4614291bb169905074Da4aFaA39784D175162f79",
    payoutPercentage: 2,
  },
];
