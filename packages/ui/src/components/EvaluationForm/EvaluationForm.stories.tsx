import { Meta, StoryObj } from "@storybook/react";

import { EvaluationForm } from "./EvaluationForm";

const meta: Meta<typeof EvaluationForm> = {
  title: "Components/EvaluationForm",
  component: EvaluationForm,
  argTypes: {
    onSubmit: {
      action: "submitted",
    },
    groups: {
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof EvaluationForm>;

export default meta;

type Story = StoryObj<typeof EvaluationForm>;

const defaultGroups = [
  {
    id: "group1",
    heading: "Question 1",
  },
  {
    id: "group2",
    heading: "Question 2",
  },
  {
    id: "group3",
    heading: "Question 3",
  },
];

export const Default: Story = {
  args: {
    groups: defaultGroups,
  },
};

export const WithCustomOptions: Story = {
  args: {
    groups: [
      {
        id: "group1",
        heading: "Do you like coding?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No", disabled: true },
          { value: "maybe", label: "Maybe", disabled: true },
        ],
      },
      {
        id: "group2",
        heading: "Do you like coffee?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  render: (args) => <EvaluationForm {...args} />,
};

export const HandleState: Story = {
  args: {
    groups: defaultGroups,
  },
  render: (args) => {
    const handleSubmit = (data: {
      type: "approve" | "reject";
      selections: Record<string, string>;
      feedback: string;
    }) => {
      alert(JSON.stringify(data, null, 2));
    };

    return <EvaluationForm {...args} onSubmit={handleSubmit} />;
  },
};
