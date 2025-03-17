import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { PoolStatus, PoolType } from "@/types";

import { StakePoolCard } from "./StakePoolCard";
import { StakePoolDataCardProps } from "./types";

const availableToClaimCardProps = [
  {
    name: "Project Name",
    variant: "staked",
    id: "1",
    chainId: 1,
    roundId: "1",
    stakedAmount: 100,
    stakedAt: new Date(),
    unlockAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 10),
  },
  {
    name: "Project Name",
    variant: "staked",
    id: "2",
    chainId: 1,
    roundId: "1",
    stakedAmount: 100,
    stakedAt: new Date(),
    unlockAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 10),
  },
];

const onPoolClick = action("Pool Clicked!");
const onClaim = action("Claiming page or modal!");
const simpleRound = {
  roundName: "Grants Round Defi",
  roundDescription: "Grants Round Defi description text here",
  roundId: "90",
  chainId: 10,
  votingStartDate: new Date("2024-12-09T19:22:56.413Z"),
  votingEndDate: new Date("2024-12-10T19:23:30.678Z"),
  onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
  createdAtBlock: 123456,
  matchingPoolAmount: 100000,
  matchingPoolTokenTicker: "GTC",
  stakedAmount: 100000,
  totalProjects: 100,
  totalStaked: 100000,
  lastStakeDate: new Date("2024-12-08T19:22:56.413Z"),
  onClaim: () => onClaim(),
  stakedProjects: availableToClaimCardProps,
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
    data: {
      ...simpleRound,
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date(2023, 1, 1),
  },
};

export const Claimable: Story = {
  args: {
    data: {
      ...simpleRound,
      isClaimable: true,
      stakedProjects: simpleRound.stakedProjects.map((project) => ({
        ...project,
        unlockAt: simpleRound.votingEndDate,
        isClaimable: true,
      })),
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date(2025, 1, 1),
  },
};

export const PendingFinalization: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedProjects: simpleRound.stakedProjects.map((project) => ({
        ...project,
        unlockAt: simpleRound.votingEndDate,
      })),
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date(2025, 1, 1),
  },
};

export const Claimed: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 100000,
      claimed: true,
      isClaimable: true,
      stakedProjects: simpleRound.stakedProjects.map((project) => ({
        ...project,
        variant: "claimed",
        isClaimable: true,
        claimedAt: new Date(2025, 29, 12),
        txHash: "0x1234567890abcdef",
      })),
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date(2026, 1, 1),
  },
};

export const Upcoming: Story = {
  args: {
    data: {
      ...simpleRound,
      stakedAmount: 0,
    } as StakePoolDataCardProps,
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
    } as StakePoolDataCardProps,
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
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date("2024-12-11T19:22:30.678Z"),
  },
};

export const Loading: Story = {
  args: {
    data: {
      ...simpleRound,
      isLoading: true,
    } as StakePoolDataCardProps,
  },
  parameters: {
    date: new Date(2023, 1, 1),
  },
};
