import type { Meta, StoryObj } from "@storybook/react";

import { checkerApplicationEvaluations } from "@/mocks/mockData/checkerApplicationEvaluations";

import { ReviewDropdownList } from "./ReviewDropdownList";

const meta: Meta<typeof ReviewDropdownList> = {
  component: ReviewDropdownList,
  title: "Features/Checker/Components/ReviewDropdownList",
} satisfies Meta<typeof ReviewDropdownList>;

export default meta;

type Story = StoryObj<typeof ReviewDropdownList>;

export const Default: Story = {
  args: { evaluations: checkerApplicationEvaluations },
};
