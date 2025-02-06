import { action } from "@storybook/addon-actions";
import { StoryObj, Meta } from "@storybook/react";
import { parseUnits } from "viem";

import { PoolStatus } from "@/types";
import { ApplicationPayout, PoolConfig } from "@/types/distribute";

import { Distribute } from "./Distribute";

const onDistribute = action("onDistribute");

const onEditPayouts = action("onEditPayouts");

const onResetEdit = action("onResetEdit");

const onFundRound = action("onFundRound");

const TOKEN_DECIMALS = 18;

const POOL_CONFIG: PoolConfig = {
  tokenTicker: "ETH",
  amountOfTokensInPool: parseUnits("10", TOKEN_DECIMALS).toString(),
  amountOfTokensToDistribute: 100,
  tokenDecimals: TOKEN_DECIMALS,
  poolStatus: PoolStatus.FundingPending,
  chainId: 11155111,
};

const MOCK_APPLICATIONS: ApplicationPayout[] = [
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

const args = {
  applications: MOCK_APPLICATIONS,
  poolConfig: { ...POOL_CONFIG, amountOfTokensInPool: parseUnits("96", TOKEN_DECIMALS).toString() },
  canResetEdit: true,
  onFundRound: async (values: any) => onFundRound(values),
  onDistribute: async (values: any) => onDistribute(values),
  onEditPayouts: async (values: any) => onEditPayouts(values),
  onResetEdit: async () => onResetEdit(),
  className: "w-full",
};

export default {
  title: "Features/Retrofunding/Components/Distribute",
  component: Distribute,
} as Meta;

export const Default: StoryObj<typeof Distribute> = {
  args,
};

export const Finalized: StoryObj<typeof Distribute> = {
  args: {
    ...args,
    applications: MOCK_APPLICATIONS.map((application) => ({
      ...application,
      payoutTransactionHash: "0x010ddbb8a9039a7f9c672538b6dded667dd7ca9cad9f9fd5bf6aed1301bcdb5b",
    })),
    poolConfig: {
      ...POOL_CONFIG,
      amountOfTokensInPool: parseUnits("0.0000001", POOL_CONFIG.tokenDecimals).toString(),
    },
  },
};

export const FundingRequired: StoryObj<typeof Distribute> = {
  args: {
    ...args,
    applications: MOCK_APPLICATIONS.map((application) => ({
      ...application,
      payoutTransactionHash: undefined,
    })),
    poolConfig: {
      ...POOL_CONFIG,
      amountOfTokensInPool: parseUnits(
        "0.000000000000000001",
        POOL_CONFIG.tokenDecimals,
      ).toString(),
    },
  },
};

export const NoFinalizedProjects: StoryObj<typeof Distribute> = {
  args: {
    ...args,
    applications: MOCK_APPLICATIONS.map((application) => ({
      ...application,
      payoutTransactionHash: undefined,
    })),
    poolConfig: {
      ...POOL_CONFIG,
      amountOfTokensInPool: parseUnits("100", POOL_CONFIG.tokenDecimals).toString(),
    },
  },
};

export const NotFundingPhase: StoryObj<typeof Distribute> = {
  args: {
    ...args,
    poolConfig: {
      ...POOL_CONFIG,
      poolStatus: PoolStatus.ApplicationsInProgress,
      amountOfTokensInPool: parseUnits("100", POOL_CONFIG.tokenDecimals).toString(),
    },
    applications: [],
  },
};
