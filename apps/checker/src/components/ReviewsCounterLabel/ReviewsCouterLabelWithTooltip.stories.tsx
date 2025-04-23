import type { Meta, StoryObj } from "@storybook/react";

import { ReviewsCounterLabelWithTooltip } from "./ReviewsCounterLabel";

const meta: Meta<typeof ReviewsCounterLabelWithTooltip> = {
  title: "features/Checker/Components/ReviewsCounterLabelWithTooltip",
  component: ReviewsCounterLabelWithTooltip,
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

type Story = StoryObj<typeof ReviewsCounterLabelWithTooltip>;

export const WithTooltip: Story = {
  args: {
    positiveReviews: 3,
    negativeReviews: 2,
  },
};
