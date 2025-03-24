import { action } from "@storybook/addon-actions";
import { StoryObj, Meta } from "@storybook/react";
import { formatUnits, parseUnits } from "viem";

import { PoolStatus } from "@/types";
import { PoolConfig } from "@/types/distribute";

import { Distribute } from "./Distribute";
import { MOCK_APPLICATIONS, MOCK_APPLICATIONS2 } from "./mocks/applications";

const onDistribute = action("onDistribute");

const onEditPayouts = action("onEditPayouts");

const onResetEdit = action("onResetEdit");

const onFundRound = action("onFundRound");

const TOKEN_DECIMALS = 18;

const POOL_CONFIG: PoolConfig = {
  tokenTicker: "ETH",
  amountOfTokensInPool: parseUnits("100", TOKEN_DECIMALS).toString(),
  amountOfTokensToDistribute: 100,
  tokenDecimals: TOKEN_DECIMALS,
  poolStatus: PoolStatus.FundingPending,
  chainId: 11155111,
  constantAmountPerGrant: 0,
};

const args = {
  applications: MOCK_APPLICATIONS,
  poolConfig: { ...POOL_CONFIG, amountOfTokensInPool: parseUnits("96", TOKEN_DECIMALS).toString() },
  canResetEdit: true,
  onFundRound: async (values: any) => onFundRound(values),
  onDistribute: async (values: any, selectedApplications: any) => {
    const filteredValues = values.filter((app: any) =>
      selectedApplications.includes(app.applicationId),
    );
    const finalAmount = filteredValues.reduce((acc: any, curr: any) => {
      acc += curr.amount;
      return acc;
    }, 0n);
    onDistribute(
      `Amount to distribute for the #${
        selectedApplications.length
      } selected applications: ${formatUnits(finalAmount, POOL_CONFIG.tokenDecimals)}`,
      filteredValues,
    );
  },
  onEditPayouts: async (values: any) => onEditPayouts(values),
  onResetEdit: async () => onResetEdit(),
  className: "w-full",
};

export default {
  title: "Features/Retrofunding/Distribute",
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

export const NoFinalizedProjectsWithConstantAmountPerGrant: StoryObj<typeof Distribute> = {
  args: {
    ...args,
    applications: MOCK_APPLICATIONS2.map((application) => ({
      ...application,
      title: `Project Alpha ${application.id}`,
      payoutTransactionHash: undefined,
    })),
    poolConfig: {
      ...POOL_CONFIG,
      constantAmountPerGrant: 13962,
      amountOfTokensInPool: parseUnits("639657", POOL_CONFIG.tokenDecimals).toString(),
      amountOfTokensToDistribute: 639657,
      tokenTicker: "USDC",
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
