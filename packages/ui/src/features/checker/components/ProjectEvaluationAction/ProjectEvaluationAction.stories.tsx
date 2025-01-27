import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { EvaluationAction } from "../../types";
import { ProjectEvaluationAction } from "./ProjectEvaluationAction";

const meta = {
  title: "Features/Checker/Components/ProjectEvaluationAction",
  component: ProjectEvaluationAction,
  args: {
    status: "pending",
    onEvaluate: (projectId: string, action: EvaluationAction) => {
      console.log(`Evaluating project ${projectId} with action ${action}`);
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ProjectEvaluationAction>;

const onEvaluateAction = action("onEvaluate");

export const Default: Story = {
  args: {
    status: "pending",
    projectId: "0x123",
    onEvaluate: (projectId, action) => {
      onEvaluateAction("onEvaluate", projectId, action);
    },
  },
} satisfies Story;

export const Approved: Story = {
  args: {
    status: "approved",
    projectId: "0x123",
    onEvaluate: (projectId, action) => {
      onEvaluateAction("onEvaluate", projectId, action);
    },
  },
} satisfies Story;

export const Rejected: Story = {
  args: {
    status: "rejected",
    projectId: "0x123",
    onEvaluate: (projectId, action) => {
      onEvaluateAction("onEvaluate", projectId, action);
    },
  },
} satisfies Story;
