import { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Primitives/TextArea",
  component: TextArea,
  argTypes: {
    className: {
      control: "text",
    },
    placeholder: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      table: {
        type: {
          summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        },
      },
    },
    heading: {
      control: "text",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => <TextArea placeholder="Enter your text here..." />,
};

export const Disabled: Story = {
  render: () => <TextArea placeholder="This textarea is disabled." disabled />,
};

export const SizesAndHeadings: Story = {
  render: () => (
    <div className="space-y-4">
      <TextArea heading="Extra Small" size="xs" placeholder="(xs) Extra small text area" />
      <TextArea heading="Small" size="sm" placeholder="(sm) Small text area" />
      <TextArea heading="Medium" size="md" placeholder="(md) Medium text area" />
      <TextArea heading="Large" size="lg" placeholder="(lg) Large text area" />
      <TextArea heading="Extra Large" size="xl" placeholder="(xl) Extra large text area" />
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <TextArea className="border-red-500 p-20" placeholder="Custom styled textarea..." />
  ),
};
