import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from "@/types";

import { Form } from "./Form";

const onSubmit = action("onSubmit");

const program = {
  chainId: 10,
  programId: "1",
  programName: "Cool program",
} as {
  chainId: number;
  programId: string;
  programName: string;
};
const roundDetailsFields: FormField[] = [
  {
    field: {
      name: "program",
      label: "Program",
      validation: { isObject: true },
    },
    component: "DisabledProgramInput",
  },
  {
    field: {
      name: "name",
      label: "Round name",
      className: "border-grey-300",
      validation: {
        required: true,
        stringValidation: { minLength: 5 },
      },
    },
    component: "Input",
    placeholder: "My Round Name",
  },
  {
    field: {
      name: "payoutToken",
      label: "Select payout token",
      validation: { required: true },
    },
    component: "Select",
    options: [
      {
        items: [
          { label: "ETH", value: "ETH" },
          { label: "USDC", value: "USDC" },
        ],
      },
    ],
    placeholder: "Select",
    className: "bg-white border-grey-300",
    size: "md",
  },
  {
    field: {
      name: "banner",
      label: "Cover image",
      validation: {
        required: true,
        fileValidation: {},
      },
    },
    component: "FileUpload",
    mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/svg+xml"],
  },
];

const roundDetailsArgs = {
  fields: roundDetailsFields,
  defaultValues: {
    program: program,
  },
};

const roundStep = {
  name: "Round details",
  formProps: roundDetailsArgs,
  stepProps: {
    formTitle: "Round details",
    formDescription:
      "Fill out the details about your round. You can change most of these at any time.",
  },
};
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
