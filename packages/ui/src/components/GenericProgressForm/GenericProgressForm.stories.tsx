import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { GenericProgressForm } from "./GenericProgressForm";
import { roundSetupSteps } from "./mocks/RoundSetup";

const onSubmit = action("onSubmit");

const meta: Meta<typeof GenericProgressForm> = {
  title: "Components/GenericProgressForm",
  component: GenericProgressForm,
} satisfies Meta<typeof GenericProgressForm>;

export default meta;

type Story = StoryObj<typeof GenericProgressForm>;

export const Default: Story = {
  args: {
    name: "Round setup",
    steps: roundSetupSteps,
    onSubmit: async (values: any) => onSubmit(values),
    dbName: "formDB",
    storeName: "formDrafts",
  },
};
