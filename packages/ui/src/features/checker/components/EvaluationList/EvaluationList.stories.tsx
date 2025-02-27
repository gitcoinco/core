import { mockEvaluations } from "@repo/mocks/checker";
import type { Meta, StoryObj } from "@storybook/react";

import { EvaluationList } from "./EvaluationList";

const meta = {
  title: "Features/Checker/Components/EvaluationList",
  component: EvaluationList,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof EvaluationList>;

export const story: Story = { args: { evaluations: mockEvaluations } };
