import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";

const meta = {
  title: "Primitives/Spinner",
  component: Spinner,
  args: {
    size: "sm",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Big: Story = {
  args: {
    size: "md",
  },
};

export const CustomColor: Story = {
  args: {
    size: "md",
    className: "fill-red-500",
  },
};
