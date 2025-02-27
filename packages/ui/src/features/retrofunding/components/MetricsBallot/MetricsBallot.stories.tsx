import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { MetricsBallot } from "./MetricsBallot";
import { mockAvailableMetrics, mockSubmittedBallot } from "./mocks";

export default {
  title: "Features/RetroFunding/MetricsBallot",
  component: MetricsBallot,
} as Meta;

const onSubmit = action("onSubmit");
const onFormChange = action("onFormChange");

type Story = StoryObj<typeof MetricsBallot>;

export const Default: Story = {
  args: {
    name: "metrics",
    availableMetrics: mockAvailableMetrics,
    maxAllocation: 100,
    onSubmit: (values: any) => onSubmit(values),
    onFormChange: (values: any) => onFormChange(values),
  },
};

export const AlreadyVoted: Story = {
  args: {
    name: "alreadyVoted-metrics",
    availableMetrics: mockAvailableMetrics,
    maxAllocation: 100,
    onSubmit: (values: any) => onSubmit(values),
    onFormChange: (values: any) => onFormChange(values),
    submittedBallot: mockSubmittedBallot,
  },
};
