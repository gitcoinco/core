import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { PoolType } from "@/types";
import { PoolStatus } from "@/types/pool";

import { PoolList } from "./PoolList";

const onPoolClick = action("Pool clicked!");

const meta: Meta<typeof PoolList> = {
  title: "Features/Pool/PoolList",
  component: PoolList,
};

export default meta;
type Story = StoryObj<typeof PoolList>;

const mockPools = [
  {
    roundName: "Grants Round Defi",
    roundId: "90",
    chainId: 10,
    poolType: PoolType.QuadraticFunding,
    poolStatus: PoolStatus.ApplicationsInProgress,
    applicationStartDate: new Date("2024-12-08T19:22:56.413Z"),
    applicationEndDate: new Date("2024-12-09T19:23:30.678Z"),
    votingStartDate: new Date("2024-12-09T19:22:56.413Z"),
    votingEndDate: new Date("2024-12-10T19:23:30.678Z"),
    operatorsCount: 10,
    createdAtBlock: 100000,
    logoImg:
      "https://cdn.prod.website-files.com/6433c5d029c6bb75f3f00bd5/66f47dd26d8ec8d0e48a22d0_gitcoin-profile.png",
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
    createdAtBlock: 1000,
    logoImg: "https://thegivingblock.com/wp-content/uploads/2021/07/Uniswap-Logo.png",
  },
];

export const Default: Story = {
  args: {
    pools: mockPools.map((pool) => ({
      ...pool,
      onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
    })),
    title: "Available Pools",
    noPoolsPlaceholder: "No pools found",
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    pools: [],
  },
};
