import type { Meta, StoryObj } from "@storybook/react";

import { Leaderboard } from "./Leaderboard";
import { mockData } from "./mocks";

const meta: Meta<typeof Leaderboard> = {
  title: "Features/Retrofunding/Leaderboard",
  component: Leaderboard,
};

export default meta;
type Story = StoryObj<typeof Leaderboard>;

export const SingleMetric: Story = {
  args: {
    projects: Object.fromEntries(
      Object.entries(mockData.projects).map(([key, value]) => [
        key,
        {
          project: value.project,
          metrics: { votes: value.metrics.votes },
        },
      ]),
    ),
    metrics: {
      votes: mockData.metrics.votes,
    },
  },
};

export const FourMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 4)),
  },
};
export const FiveMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 5)),
  },
};

export const AllMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: mockData.metrics,
  },
};

export const Empty: Story = {
  args: {
    projects: {},
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 4)),
  },
};
