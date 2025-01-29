import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgressForm } from "./ProgressForm";
import { roundSetupSteps } from "./mocks/RoundSetup";

const onSubmit = action("onSubmit");

const meta: Meta<typeof ProgressForm> = {
  title: "Components/ProgressForm",
  component: ProgressForm,
} satisfies Meta<typeof ProgressForm>;

export default meta;

type Story = StoryObj<typeof ProgressForm>;

export const Default: Story = {
  args: {
    name: "Round setup",
    steps: roundSetupSteps,
    onSubmit: async (values: any) => onSubmit(values),
    dbName: "formDB",
    storeName: "formDrafts",
    stepsPersistKey: "roundSetup",
  },
};
