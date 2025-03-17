import type { Meta, StoryObj } from "@storybook/react";

import { StakeProjectCard } from "./StakeProjectCard";

const meta: Meta<typeof StakeProjectCard> = {
  title: "Features/Project/StakeProjectCard",
  component: StakeProjectCard,
};

export default meta;
type Story = StoryObj<typeof StakeProjectCard>;

// Basic stories with static props
export const Stake: Story = {
  args: {
    variant: "stake",
    id: "1",
    name: "Project Name",
    description: "Project Description",
    image: "https://picsum.photos/200",
    totalStaked: 1000,
    maxStakeAmount: 1000,
    onStakeChange: (applicationId, amount) => {
      console.log(applicationId, amount);
    },
    tokenUsdValue: 1,
    numberOfContributors: 100,
    totalDonations: 1000,
  },
};

export const StakeWithLongDescription: Story = {
  args: {
    variant: "stake",
    id: "1",
    name: "Web3 Social Network",
    description:
      "A decentralized social network built on blockchain technology that allows users to own their data and monetize their content. The platform features end-to-end encryption, token-based rewards, and community governance mechanisms.",
    image: "https://picsum.photos/200",
    totalStaked: 1000,
    maxStakeAmount: 1000,
    onStakeChange: (applicationId, amount) => {
      console.log(applicationId, amount);
    },
    tokenUsdValue: 1000,
    numberOfContributors: 100,
    totalDonations: 1000,
  },
};

export const StakedLockedUnclaimed: Story = {
  args: {
    variant: "staked",
    id: "2",
    name: "Staked Project",
    description: "This project has been staked but not yet claimed",
    image: "https://picsum.photos/200",
    stakedAmount: 25,
    rewardAmount: 10,
    stakedAt: new Date("2023-12-10"),
    unlockAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days in the future
    totalStaked: 1000,
  },
};

export const StakedUnlockedUnclaimed: Story = {
  args: {
    variant: "staked",
    id: "3",
    name: "Unlocked Project",
    description: "This project is unlocked and ready to claim",
    stakedAmount: 50,
    rewardAmount: 10,
    stakedAt: new Date("2023-10-15"),
    unlockAt: new Date(new Date().getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days in the past
    image: "https://picsum.photos/200",
    totalStaked: 1000,
  },
};

export const Claimed: Story = {
  args: {
    variant: "claimed",
    id: "4",
    name: "Claimed Project",
    description: "This project has been claimed",
    stakedAmount: 75,
    rewardAmount: 10,
    stakedAt: new Date("2023-09-05"),
    unlockAt: new Date("2023-12-05"),
    claimedAt: new Date("2023-12-10"),
    txHash: "0x1234567890abcdef1234567890abcdef1234567890abcdef",
    image: "https://picsum.photos/200",
    totalStaked: 1000,
  },
};

export const Leaderboard: Story = {
  args: {
    variant: "leaderboard",
    id: "5",
    name: "Leaderboard Project",
    description: "This project is in the leaderboard",
    rank: 4,
    image: "https://picsum.photos/200",
    totalStaked: 1000,
    maxStakeAmount: 1000,
    onStakeChange: (applicationId, amount) => {
      console.log(applicationId, amount);
    },
    tokenUsdValue: 1,
    numberOfContributors: 100,
    totalDonations: 1000,
  },
};
