import { Meta, StoryObj } from "@storybook/react";

import { PoolStatus } from "@/types";

import { PoolStatusBadge } from "./PoolStatusBadge";

const meta: Meta<typeof PoolStatusBadge> = {
  title: "Features/Pool/PoolStatusBadge",
  component: PoolStatusBadge,
  parameters: {
    toc: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof PoolStatusBadge>;

export const Default: Story = {
  argTypes: {
    value: {
      control: "select",
      options: Object.values(PoolStatus),
      description: "The specific badge value.",
    },
  },
  args: {
    value: PoolStatus.ApplicationsInProgress,
  },
};

export const PreRound: Story = {
  args: {
    value: PoolStatus.PreRound,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Pre Round` status badge.",
    },
  },
};

export const RoundInProgress: Story = {
  args: {
    value: PoolStatus.RoundInProgress,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Round In Progress` status badge.",
    },
  },
};

export const ApplicationsInProgress: Story = {
  args: {
    value: PoolStatus.ApplicationsInProgress,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Applications In Progress` status badge.",
    },
  },
};

export const FundingPending: Story = {
  args: {
    value: PoolStatus.FundingPending,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Funding Pending` status badge.",
    },
  },
};

export const Undefined: Story = {
  args: {
    value: undefined,
  },
  parameters: {
    docs: {
      storyDescription: "Displays a skeleton badge when the value is undefined.",
    },
  },
};
