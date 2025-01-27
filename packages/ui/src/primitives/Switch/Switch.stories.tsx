import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Color Variants Story
export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch color="moss" defaultChecked />
        <span className="text-sm">Moss</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="black" defaultChecked />
        <span className="text-sm">Black</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="purple" defaultChecked />
        <span className="text-sm">Purple</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="white" defaultChecked />
        <span className="text-sm">White</span>
      </div>
    </div>
  ),
};

// States Story
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch color="moss" />
        <span className="text-sm">Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="moss" defaultChecked />
        <span className="text-sm">Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="moss" disabled />
        <span className="text-sm">Disabled Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch color="moss" disabled defaultChecked />
        <span className="text-sm">Disabled Checked</span>
      </div>
    </div>
  ),
};

// Interactive Story with Controls
export const Interactive: Story = {
  args: {
    color: "moss",
    defaultChecked: true,
    disabled: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["moss", "black", "purple", "white"],
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

// Group Story
export const Group: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <label htmlFor="airplane-mode" className="text-sm font-medium">
          Airplane Mode
        </label>
        <Switch id="airplane-mode" color="moss" />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="wifi" className="text-sm font-medium">
          Wi-Fi
        </label>
        <Switch id="wifi" color="purple" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="notifications" className="text-sm font-medium">
          Notifications
        </label>
        <Switch id="notifications" color="black" defaultChecked />
      </div>
    </div>
  ),
};
