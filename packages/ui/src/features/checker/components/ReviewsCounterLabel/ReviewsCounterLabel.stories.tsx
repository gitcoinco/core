import type { Meta, StoryObj } from "@storybook/react";

import { ReviewsCounterLabel } from "./ReviewsCounterLabel";

const meta: Meta<typeof ReviewsCounterLabel> = {
  title: "features/Checker/Components/ReviewsCounterLabel",
  component: ReviewsCounterLabel,
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
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the component.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReviewsCounterLabel>;

export const Default: Story = {
  args: {
    positiveReviews: 0,
    negativeReviews: 0,
  },
};

export const Pending: Story = {
  args: {
    positiveReviews: 0,
    negativeReviews: 0,
  },
};

export const WithoutMaxReviews: Story = {
  args: {
    positiveReviews: 1,
    negativeReviews: 2,
  },
};

export const WithMaxReviews: Story = {
  args: {
    positiveReviews: 3,
    negativeReviews: 2,
  },
};

export const TooManyReviews: Story = {
  args: {
    positiveReviews: 300,
    negativeReviews: 200,
  },
};
