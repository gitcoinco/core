import { PoolStatus } from "@gitcoin/types";
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { parseUnits } from "viem";

import { Distribute } from "./Distribute";
import { MOCK_APPLICATIONS, POOL_CONFIG, TOKEN_DECIMALS } from "./mocks";

const onDistribute = action("onDistribute");

const onEditPayouts = action("onEditPayouts");

const onResetEdit = action("onResetEdit");

const onFundRound = action("onFundRound");

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
