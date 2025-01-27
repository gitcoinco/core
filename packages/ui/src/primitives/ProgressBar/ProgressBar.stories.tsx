import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

// Adjust the path as needed

const meta = {
  title: "Primitives/ProgressBar",
  component: ProgressBar,
  args: {
    value: 0,
    variant: "default",
  },
  argTypes: {
    value: {
      control: {
        type: "number",
      },
      description: "The current progress value",
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "green"],
      },
      description: "The color variant of the progress bar",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

export const PartialProgress: Story = {
  args: {
    value: 30,
  },
};

export const PartialProgressGreenVariant: Story = {
  args: {
    value: 30,
    variant: "green",
  },
};

export const FullProgressGreenVariant: Story = {
  args: {
    value: 100,
    variant: "green",
  },
};
