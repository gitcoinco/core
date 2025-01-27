import type { Meta, StoryObj } from "@storybook/react";

import { ReviewIconGroup } from "./ReviewIconGroup";

const meta: Meta<typeof ReviewIconGroup> = {
  title: "Primitives/ReviewIconGroup",
  component: ReviewIconGroup,
  argTypes: {
    positiveReviews: {
      control: {
        type: "number",
        min: 0,
      },
    },
    negativeReviews: {
      control: {
        type: "number",
        min: 0,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReviewIconGroup>;

export const Playground: Story = {
  args: {
    positiveReviews: 1,
    negativeReviews: 1,
  },
};

export const Default: Story = {
  args: {
    positiveReviews: 1,
    negativeReviews: 1,
  },
};

export const MoreThanMaxIcons: Story = {
  args: {
    positiveReviews: 3,
    negativeReviews: 1,
  },
};
