import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { CreateButton } from "./CreateButton";

const onButtonClick = action("Button clicked!");

const meta: Meta<typeof CreateButton> = {
  title: "Features/RetroFunding/Components/CreateButton",
  component: CreateButton,
  args: {
    children: "Create new program",
    onClick: () => onButtonClick("button clicked"),
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["program", "round"],
      },
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof CreateButton>;

export default meta;

type Story = StoryObj<typeof CreateButton>;

export const Default: Story = {
  args: {
    onClick: () => onButtonClick("program button clicked"),
  },
};

export const Round: Story = {
  args: {
    variant: "round",
    children: "Create new round",
    onClick: () => onButtonClick("round button clicked"),
  },
};
