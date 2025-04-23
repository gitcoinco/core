import type { Meta, StoryObj } from "@storybook/react";

import { ProjectReviewList } from "./ProjectReviewList";
import { mockPendingReview0, mockReadyToSubmit0 } from "./mocks";

const meta = {
  title: "Features/Checker/Components/ProjectReviewList",
  component: ProjectReviewList,
  args: {
    reviewer: "0x1234567890123456789012345678901234567890",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ProjectReviewList>;

export const ReadyToSubmit: Story = { args: { projects: mockReadyToSubmit0 } };
export const PendingReview: Story = { args: { projects: mockPendingReview0 } };
