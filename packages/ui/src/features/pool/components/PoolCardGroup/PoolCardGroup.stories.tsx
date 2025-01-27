import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { PoolStatus, PoolType } from "@/types";

import { PoolCardGroup } from "./PoolCardGroup";

const onPoolClick = action("Pool Clicked!");

const pools = [
  {
    roundName: "Grants Round Defi",
    roundId: "90",
    chainId: 8453,
    poolType: PoolType.QuadraticFunding,
    poolStatus: PoolStatus.ApplicationsInProgress,
    applicationStartDate: new Date("2024-12-08T19:22:56.413Z"),
    applicationEndDate: new Date("2024-12-09T19:23:30.678Z"),
    votingStartDate: new Date("2024-12-09T19:22:56.413Z"),
    votingEndDate: new Date("2024-12-10T19:23:30.678Z"),
    operatorsCount: 10,
    createdAtBlock: 1234567890,
    logoImg:
      "https://cdn.prod.website-files.com/6433c5d029c6bb75f3f00bd5/66f47dd26d8ec8d0e48a22d0_gitcoin-profile.png",
    onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
  },
  {
    roundName: "Uniswap",
    roundId: "91",
    chainId: 8453,
    poolType: PoolType.DirectGrants,
    poolStatus: PoolStatus.FundingPending,
    applicationStartDate: new Date("2024-12-08T19:22:56.413Z"),
    applicationEndDate: new Date("2024-12-09T19:23:30.678Z"),
    votingStartDate: new Date("2024-12-09T19:22:56.413Z"),
    votingEndDate: new Date("2024-12-10T19:23:30.678Z"),
    operatorsCount: 5,
    logoImg: "https://thegivingblock.com/wp-content/uploads/2021/07/Uniswap-Logo.png",
    createdAtBlock: 1234567890,
    onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
  },
];

const meta = {
  title: "Features/Pool/PoolCardGroup",
  component: PoolCardGroup,
  args: {
    pools,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof PoolCardGroup>;

export const Default: Story = {};

export const withJustifyNormal: Story = {
  args: {
    pools,
  },
};

export const withJustifyStart: Story = {
  args: {
    pools: pools,
    justify: "start",
  },
};

export const withJustifyEnd: Story = {
  args: {
    pools: pools,
    justify: "end",
  },
};

export const withJustifyCenter: Story = {
  args: {
    pools: pools,
    justify: "center",
  },
};

export const withJustifyBetween: Story = {
  args: {
    pools: pools,
    justify: "between",
  },
};

export const withJustifyAround: Story = {
  args: {
    pools: pools,
    justify: "around",
  },
};

export const withJustifyEvenly: Story = {
  args: {
    pools: pools,
    justify: "evenly",
  },
};
