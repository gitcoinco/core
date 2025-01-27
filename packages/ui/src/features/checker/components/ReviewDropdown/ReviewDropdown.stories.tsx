import type { Meta, StoryObj } from "@storybook/react";

import { checkerApplicationEvaluations } from "@/mocks/mockData/checkerApplicationEvaluations";

import { ReviewDropdown } from "./ReviewDropdown";

const mockData = checkerApplicationEvaluations;

const meta: Meta<typeof ReviewDropdown> = {
  component: ReviewDropdown,
  title: "Features/Checker/Components/ReviewDropdown", // Adjust the path as per your Storybook organization
} satisfies Meta<typeof ReviewDropdown>;

export default meta;

type Story = StoryObj<typeof ReviewDropdown>;

export const Default: Story = {
  args: { evaluation: { ...mockData[0] }, index: 1 },
};

export const Rejected: Story = {
  args: { evaluation: { ...mockData[1] }, index: 2 },
};

export const LlmGpt3: Story = {
  args: { evaluation: { ...mockData[2] }, index: 3 },
};
