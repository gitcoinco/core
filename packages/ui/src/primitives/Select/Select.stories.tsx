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
    defaultValue: "apple",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    defaultValue: "apple",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    disabled: true,
    variant: "default",
    defaultValue: "apple",
  },
};

export const MediumSize: Story = {
  args: {
    size: "md",
    variant: "default",
    defaultValue: "apple",
  },
};
