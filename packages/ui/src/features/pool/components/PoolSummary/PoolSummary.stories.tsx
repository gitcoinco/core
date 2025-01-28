import type { Meta, StoryObj } from "@storybook/react";

import { PoolType } from "@/types";

import { PoolSummary, PoolSummaryProps } from "./PoolSummary";

const defaultProps = {
  chainId: 1,
  name: "Beta Round",
  poolId: "1",
  strategyName: PoolType.QuadraticFunding,
  applicationsStartTime: "2024-12-09T19:22:56.413Z",
  applicationsEndTime: "2024-12-10T19:23:30.678Z",
  donationsStartTime: "2024-12-09T19:22:56.413Z",
  donationsEndTime: "2024-12-09T19:22:56.413Z",
};

const meta: Meta<PoolSummaryProps> = {
  title: "Features/Pool/PoolSummary",
  component: PoolSummary,
  args: defaultProps,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof PoolSummary>;

export const Default: Story = {};

export const Retrofunding: Story = {
  args: {
    ...defaultProps,
    strategyName: PoolType.Retrofunding,
  },
};
