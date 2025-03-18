import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";

const handleClickAction = action("handleClick");
const CUSTOM_DESCRIPTION =
  "Oops! We couldn’t find this voting page. Double-check the round ID/chain ID or reach out to your round admin for the correct link.";

const meta: Meta<typeof NotFoundPage> = {
  title: "Pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    description: {
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {};

export const WithCustomDescription: Story = {
  args: {
    description: CUSTOM_DESCRIPTION,
  },
};

export const WithButton: Story = {
  args: {
    button: {
      label: "Go to home",
      onClick: () => {
        handleClickAction("clicked");
      },
    },
  },
};
