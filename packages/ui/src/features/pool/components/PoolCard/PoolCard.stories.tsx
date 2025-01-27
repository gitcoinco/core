import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { createQueryState } from "@/lib";
import { PoolStatus, PoolType } from "@/types";

import { PoolCard, PoolCardProps, PoolCardQueryProps } from "./PoolCard";

const onPoolClick = action("Pool Clicked!");

const simpleRound = {
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
  logoImg:
    "https://cdn.prod.website-files.com/6433c5d029c6bb75f3f00bd5/66f47dd26d8ec8d0e48a22d0_gitcoin-profile.png",
  onClick: (pool?: { chainId: number; roundId: string }) => onPoolClick(pool),
  createdAtBlock: 123456,
};

export default {
  title: "Features/Pool/PoolCard",
  component: PoolCard,
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
} as Meta<typeof PoolCard>;

type Story = StoryObj<PoolCardProps | PoolCardQueryProps>;

export const Default: Story = {
  args: {
    ...simpleRound,
  },
};

export const Loading: Story = {
  args: {
    queryResult: createQueryState("pending"),
  },
};

export const Success: Story = {
  args: {
    queryResult: createQueryState("success", {
      ...simpleRound,
    }),
  },
};
