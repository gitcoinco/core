import { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Primitives/RadioGroup",
  component: RadioGroup,
  argTypes: {
    buttonsPerRow: {
      control: {
        type: "number",
      },
    },
    className: {
      control: "text",
    },
    heading: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    buttonsPerRow: 3,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const SingleRow: Story = {
  args: {
    buttonsPerRow: 1,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const TwoPerRow: Story = {
  args: {
    buttonsPerRow: 2,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const CustomStyles: Story = {
  args: {
    buttonsPerRow: 2,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Option 1" className="font-bold text-red-700" />
      <RadioGroupItem value="option2" label="Option 2" className="font-bold text-green-700" />
      <RadioGroupItem value="option3" label="Option 3" className="font-bold text-yellow-700" />
      <RadioGroupItem value="option4" label="Option 4" className="font-bold text-black" />
    </RadioGroup>
  ),
};

export const WithStringHeading: Story = {
  args: {
    buttonsPerRow: 3,
    heading: "This project must be open source",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Yes" />
      <RadioGroupItem value="option2" label="No" />
      <RadioGroupItem value="option3" label="Uncertain" />
    </RadioGroup>
  ),
};

export const WithCustomHeading: Story = {
  args: {
    buttonsPerRow: 2,
    heading: <h2 className="text-xl font-extrabold text-blue-500">Select an Option</h2>,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};
