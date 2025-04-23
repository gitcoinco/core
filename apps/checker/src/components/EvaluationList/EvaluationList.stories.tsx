import type { Meta, StoryObj } from "@storybook/react";

import { EvaluationList } from "./EvaluationList";
import { mockEvaluations } from "./mocks";

const meta = {
  title: "Features/Checker/Components/EvaluationList",
  component: EvaluationList,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof EvaluationList>;

export const story: Story = { args: { evaluations: mockEvaluations } };
