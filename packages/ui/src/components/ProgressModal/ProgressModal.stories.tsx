import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressStatus, Step } from "@/types";

import { ProgressModal } from "./ProgressModal";

const meta: Meta<typeof ProgressModal> = {
  title: "Components/ProgressModal",
  component: ProgressModal,
} satisfies Meta<typeof ProgressModal>;

export default meta;
type Story = StoryObj<typeof ProgressModal>;

const Template: React.FC<{
  isOpen?: boolean;
  heading?: string;
  subheading?: string;
  steps: Step[];
}> = (args) => {
  return (
    <div>
      <ProgressModal
        isOpen={true}
        heading={args.heading}
        subheading={args.subheading}
        steps={args.steps}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: true,
    heading: "Processing Your Request",
    subheading: "Please hold while we record your results onchain.",
    steps: [
      {
        name: "INITIALIZED",
        description: "Preparing the necessary resources.",
        status: ProgressStatus.IS_SUCCESS,
      },
      {
        name: "STORING",
        description: "The storing operation is currently in progress.",
        status: ProgressStatus.IN_PROGRESS,
      },
      {
        name: "PROCESS",
        description: "The operation will start soon.",
        status: ProgressStatus.NOT_STARTED,
      },
      {
        name: "FINALIZE",
        description: "Wrapping up the last steps.",
        status: ProgressStatus.NOT_STARTED,
      },
    ],
  },
};

export const AllStepsSuccess: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: true,
    heading: "All Steps Completed",
    subheading: "Your operation was successful.",
    steps: [
      {
        name: "INITIALIZED",
        description: "Completed successfully.",
        status: ProgressStatus.IS_SUCCESS,
      },
      {
        name: "PROCESSED",
        description: "Completed successfully.",
        status: ProgressStatus.IS_SUCCESS,
      },
      {
        name: "FINILIZED",
        description: "Completed successfully.",
        status: ProgressStatus.IS_SUCCESS,
      },
    ],
  },
};

export const WithError: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: true,
    heading: "An Error Occurred",
    subheading: "There was a problem processing your request.",
    steps: [
      {
        name: "INITIALIZING",
        description: "Initializing the action",
        status: ProgressStatus.IS_SUCCESS,
      },
      {
        name: "FAILED PROCESSING",
        description: "Failed to complete.",
        status: ProgressStatus.IS_ERROR,
      },
      {
        name: "FINALIZING",
        description: "Finalize the action.",
        status: ProgressStatus.NOT_STARTED,
      },
    ],
  },
};

export const InProgress: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: true,
    heading: "Processing Your Request",
    subheading: "Please wait while we complete the operation.",
    steps: [
      {
        name: "INITIALIZING",
        description: "Initializing resources.",
        status: ProgressStatus.IN_PROGRESS,
      },
      {
        name: "PROCESSING",
        description: "Processing data.",
        status: ProgressStatus.NOT_STARTED,
      },
      {
        name: "FINALIZING",
        description: "Finalizing steps.",
        status: ProgressStatus.NOT_STARTED,
      },
    ],
  },
};
