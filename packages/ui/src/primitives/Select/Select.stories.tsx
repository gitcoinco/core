import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Primitives/Select",
  component: Select,
  args: {
    options: [
      {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Carrot", value: "carrot" },
          { label: "Lettuce", value: "lettuce" },
        ],
      },
    ],
    placeholder: "Select",
    variant: "default",
    size: "md",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
  },
};
