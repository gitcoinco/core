import type { Meta, StoryObj } from "@storybook/react";

import { ReviewIcon } from "./ReviewIcon";

const meta: Meta<typeof ReviewIcon> = {
  title: "Primitives/ReviewIcon",
  component: ReviewIcon,
  argTypes: {
    withCounter: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    nReviews: {
      control: {
        type: "number",
        min: 0,
      },
      defaultValue: undefined,
    },
    status: {
      control: {
        type: "select",
        options: ["approved", "rejected", "pending"],
      },
      defaultValue: "pending",
    },
    className: {
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReviewIcon>;

export const Playground: Story = {
  args: {
    nReviews: 1,
    status: "approved",
  },
};

export const Approved: Story = {
  args: {
    status: "approved",
  },
};

export const Rejected: Story = {
  args: {
    status: "rejected",
  },
};

export const Pending: Story = {
  args: {
    status: "pending",
  },
};

export const WithCounter: Story = {
  args: {
    status: "approved",
    withCounter: true,
  },

  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["approved", "rejected", "pending"],
        defaultValue: "pending",
      },
    },
    withCounter: {
      control: false,
    },
  },
};
