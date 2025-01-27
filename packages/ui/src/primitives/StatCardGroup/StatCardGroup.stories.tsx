import type { Meta, StoryObj } from "@storybook/react";

import { StatCardGroup } from "./StatCardGroup";

const meta = {
  title: "Primitives/StatCardGroup",
  component: StatCardGroup,
  args: {
    stats: [
      { label: "Application approved", value: "10" },
      { label: "Application rejected", value: "10" },
    ],
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof StatCardGroup>;

export const Default: Story = {};

const stats = [
  { label: "Application approved", value: "10" },
  { label: "Application rejected", value: "10" },
  { label: "Applications rejected", value: "30" },
];

export const withJustifyNormal: Story = {
  args: {
    stats,
  },
};

export const withJustifyStart: Story = {
  args: {
    stats: stats,
    justify: "start",
  },
};

export const withJustifyEnd: Story = {
  args: {
    stats: stats,
    justify: "end",
  },
};

export const withJustifyCenter: Story = {
  args: {
    stats: stats,
    justify: "center",
  },
};

export const withJustifyBetween: Story = {
  args: {
    stats: stats,
    justify: "between",
  },
};

export const withJustifyAround: Story = {
  args: {
    stats: stats,
    justify: "around",
  },
};

export const withJustifyEvenly: Story = {
  args: {
    stats: stats,
    justify: "evenly",
  },
};

export const withFourCard: Story = {
  args: {
    stats: [...stats, { label: "Total applications", value: "100" }],
  },
};

export const withFiveCard: Story = {
  args: {
    stats: [
      ...stats,
      { label: "Total applications", value: "100" },
      { label: "Review Pending", value: "40" },
    ],
  },
};
