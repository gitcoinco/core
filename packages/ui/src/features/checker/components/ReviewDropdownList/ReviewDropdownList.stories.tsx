import { checkerApplicationEvaluations } from "@repo/mocks/mockData";
import type { Meta, StoryObj } from "@storybook/react";

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
