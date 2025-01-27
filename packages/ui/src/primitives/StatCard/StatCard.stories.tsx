import type { Meta, StoryObj } from "@storybook/react";

import { StatCard } from "./StatCard";

const meta = {
  title: "Primitives/StatCard",
  component: StatCard,
  args: {
    label: "Applications pending",
    value: "100",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {};

export const WithLongLabel: Story = {
  args: {
    label: "This is a very long label to check how it looks like",
  },
};
