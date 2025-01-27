import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Small Checkboxes Story
export const SmallCheckboxes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox size="sm" color="moss" defaultChecked />
      <Checkbox size="sm" color="black" defaultChecked />
      <Checkbox size="sm" color="white" defaultChecked />
      <Checkbox size="sm" color="purple" defaultChecked />
    </div>
  ),
};

// Medium Checkboxes Story
export const MediumCheckboxes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox size="md" color="moss" defaultChecked />
      <Checkbox size="md" color="black" defaultChecked />
      <Checkbox size="md" color="white" defaultChecked />
      <Checkbox size="md" color="purple" defaultChecked />
    </div>
  ),
};

// Large Checkboxes Story
export const LargeCheckboxes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox size="lg" color="moss" defaultChecked />
      <Checkbox size="lg" color="black" defaultChecked />
      <Checkbox size="lg" color="white" defaultChecked />
      <Checkbox size="lg" color="purple" defaultChecked />
    </div>
  ),
};

// Interactive Checkbox Story with Controls
export const Interactive: Story = {
  args: {
    size: "md",
    color: "moss",
    defaultChecked: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["moss", "black", "white", "purple"],
    },
    defaultChecked: {
      control: "boolean",
    },
  },
};

// States Story
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Checkbox color="moss" />
        <span className="text-sm">Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="moss" defaultChecked />
        <span className="text-sm">Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="moss" disabled />
        <span className="text-sm">Disabled Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="moss" disabled defaultChecked />
        <span className="text-sm">Disabled Checked</span>
      </div>
    </div>
  ),
};
