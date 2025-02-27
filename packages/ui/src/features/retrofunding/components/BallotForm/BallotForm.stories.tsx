import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { BallotForm } from "./BallotForm";
import {
  mockAvailableMetrics as availableMetrics,
  mockSubmittedBallot as submittedBallot,
} from "./mocks";

const meta: Meta<typeof BallotForm> = {
  title: "Features/RetroFunding/BallotForm",
  component: BallotForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BallotForm>;

const commonArgs = {
  name: "metrics",
  availableMetrics,
  maxAllocation: 100,
  onSubmit: action("onSubmit"),
  onChange: action("onChange"),
};

export const Default: Story = {
  args: commonArgs,
};

export const AlreadyVoted: Story = {
  args: {
    ...commonArgs,
    name: "alreadyVoted-metrics",
    submittedBallot,
  },
};
