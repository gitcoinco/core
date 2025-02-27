import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { FormWithPersist } from "./FormWithPersist";
import { roundStep } from "./mocks";

const onSubmit = action("onSubmit");

const meta: Meta<typeof FormWithPersist> = {
  title: "Components/FormWithPersist",
  component: FormWithPersist,
} satisfies Meta<typeof FormWithPersist>;

export default meta;

type Story = StoryObj<typeof FormWithPersist>;

export const Default: Story = {
  args: {
    step: roundStep,
    onSubmit: async (values: any) => onSubmit(values),
    dbName: "round",
    storeName: "round",
  },
};
