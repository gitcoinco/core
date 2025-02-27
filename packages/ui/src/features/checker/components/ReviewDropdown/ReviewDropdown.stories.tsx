import { checkerApplicationEvaluations } from "@repo/mocks/mockData";
import type { Meta, StoryObj } from "@storybook/react";

import { ReviewDropdown } from "./ReviewDropdown";

const [evaluation0, evaluation1, evaluation2] = checkerApplicationEvaluations;

const meta: Meta<typeof ReviewDropdown> = {
  component: ReviewDropdown,
  title: "Features/Checker/Components/ReviewDropdown", // Adjust the path as per your Storybook organization
} satisfies Meta<typeof ReviewDropdown>;

export default meta;

type Story = StoryObj<typeof ReviewDropdown>;

export const Default: Story = {
  args: { evaluation: { ...evaluation0 }, index: 1 },
};

export const Rejected: Story = {
  args: { evaluation: { ...evaluation1 }, index: 2 },
};

export const LlmGpt3: Story = {
  args: { evaluation: { ...evaluation2 }, index: 3 },
};
