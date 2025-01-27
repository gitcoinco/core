import { Meta, StoryObj } from "@storybook/react";

import { Form, FormProps } from "@/components/Form";
import { FormField } from "@/types";

const fields: FormField[] = [
  {
    field: {
      name: "roundName",
      label: "Round name",
      className: "border-grey-300",
      validation: { stringValidation: { minLength: 7 } },
    },
    component: "Input",
    placeholder: "your cool round name",
  },

  {
    field: {
      name: "roundDescription",
      label: "Round description",
      validation: { required: true },
    },
    component: "MarkdownEditor",
  },
  {
    field: {
      name: "select",
      label: "Select",
      validation: { required: true },
    },
    component: "Select",
    options: [
      {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ],
      },
      {
        items: [
          { label: "Carrot", value: "carrot" },
          { label: "Lettuce", value: "lettuce" },
        ],
      },
    ],
    placeholder: "Select",
    variant: "filled",
    size: "md",
  },
  {
    field: {
      name: "fileUpload",
      label: "File upload",
      validation: { required: true },
    },
    component: "FileUpload",
    mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/svg+xml"],
  },
];

export default {
  title: "Components/Form",
  component: Form,
} as Meta;
type Story = StoryObj<FormProps>;

export const Default: Story = {
  args: {
    fields,
    persistKey: "storybook-form",
  },
  render: (args) => {
    return (
      <div>
        <Form {...args} />
      </div>
    );
  },
};
