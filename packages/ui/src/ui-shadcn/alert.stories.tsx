import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert";

const meta = {
  title: "Shadcn/Alert",
  component: Alert,
  args: {
    variant: "default",
    children: "This is an alert",
  },
  render: ({ children, ...args }) => <Alert {...args}>{children}</Alert>,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
