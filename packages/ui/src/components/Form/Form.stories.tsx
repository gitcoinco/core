import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";
import { roundStep } from "./mocks";

const onSubmit = action("onSubmit");

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    step: roundStep,
    onSubmit: async (values: any) => onSubmit(values),
  },
};
