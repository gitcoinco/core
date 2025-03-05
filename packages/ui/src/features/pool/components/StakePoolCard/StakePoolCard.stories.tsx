import { PoolStatus, PoolType } from "@/types";
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { StakePoolCard } from "./StakePoolCard";

const onPoolClick = action("Pool Clicked!");
const onClaim = action("Claiming page or modal!");
const simpleRound = {
  roundName: "Grants Round Defi",
  roundDescription: "Grants Round Defi description text here",
  roundId: "90",
  chainId: 10,
  votingStartDate: new Date("2024-12-09T19:22:56.413Z"),
  votingEndDate: new Date("2024-12-10T19:23:30.678Z"),
  logoImg:
    "https://cdn.prod.website-files.com/6433c5d029c6bb75f3f00bd5/66f47dd26d8ec8d0e48a22d0_gitcoin-profile.png",
  onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
  createdAtBlock: 123456,
  matchingPoolAmount: 100000,
  stakedAmount: 100000,
  totalProjects: 100,
  totalStaked: 100000,
  lastStakeDate: new Date("2024-12-08T19:22:56.413Z"),
  onClaim: () => onClaim(),
};

export default {
  title: "Features/Pool/StakePoolCard",
  component: StakePoolCard,
  argTypes: {
    roundName: { control: "text" },
    roundId: { control: "text" },
    chainId: { control: "number" },
    poolType: { control: "select", options: Object.values(PoolType) },
    poolStatus: { control: "select", options: Object.values(PoolStatus) },
    applicationStartDate: { control: "date" },
    applicationEndDate: { control: "date" },
    votingStartDate: { control: "date" },
    votingEndDate: { control: "date" },
    operatorsCount: { control: "number" },
    queryResult: { table: { disable: true } }, // Hide queryResult from controls
    createdAtBlock: { control: "number" },
    onClick: { action: "onClick" },
  },
} as Meta<typeof StakePoolCard>;

type Story = StoryObj<typeof StakePoolCard>;

export const Default: Story = {
  args: {
    data: simpleRound,
  },
  parameters: {
    date: new Date(2025, 1, 1),
  },
};

export const Upcoming: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 0,
    },
  },
  parameters: {
    date: new Date(2023, 1, 1),
  },
};

export const Active: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 0,
    },
  },
  parameters: {
    date: new Date("2024-12-10T19:22:30.678Z"),
  },
};

export const Ended: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 0,
    },
  },
  parameters: {
    date: new Date("2024-12-11T19:22:30.678Z"),
  },
};

export const Claimed: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 100000,
      claimed: true,
    },
  },
  parameters: {
    date: new Date(2026, 1, 1),
  },
};

export const Loading: Story = {
  args: {
    data: {
      ...simpleRound,
      isLoading: true,
    },
  },
  parameters: {
    date: new Date(2023, 1, 1),
  },
};

export const NoLogo: Story = {
  args: {
    data: {
      ...simpleRound,
      logoImg: "https://gateway.pinata.cloud/ipfs/undefined",
    },
  },
  parameters: {
    date: new Date(2023, 1, 1),
  },
};
