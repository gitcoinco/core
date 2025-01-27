import { Meta, StoryObj } from "@storybook/react";

import { PoolType } from "@/types";

import { PoolTypeBadge } from "./PoolTypeBadge";

const meta: Meta<typeof PoolTypeBadge> = {
  title: "Features/Pool/PoolTypeBadge",
  component: PoolTypeBadge,
};

export default meta;
type Story = StoryObj<typeof PoolTypeBadge>;

// Story for poolType
export const Default: Story = {
  argTypes: {
    value: {
      control: "select",
      options: Object.values(PoolType),
      description: "The specific badge value.",
    },
  },
  args: {
    value: PoolType.QuadraticFunding,
  },
};

export const QuadraticFunding: Story = {
  args: {
    value: PoolType.QuadraticFunding,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Quadratic Funding` type badge.",
    },
  },
};

export const DirectGrants: Story = {
  args: {
    value: PoolType.DirectGrants,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Direct Grants` type badge.",
    },
  },
};

export const Retrofunding: Story = {
  args: {
    value: PoolType.Retrofunding,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Retrofunding` type badge.",
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
