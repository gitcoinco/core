import { Meta, StoryObj } from "@storybook/react";

import { ApplicationBadge, ApplicationBadgeStatus } from "./ApplicationBadge";

const meta: Meta<typeof ApplicationBadge> = {
  title: "Features/Application/ApplicationBadge",
  component: ApplicationBadge,
};

export default meta;
type Story = StoryObj<typeof ApplicationBadge>;

export const PendingBadge: Story = {
  argTypes: {
    status: {
      control: "select",
      options: Object.values(ApplicationBadgeStatus),
      description: "The Application Status.",
    },
    // badge: {
    //   control: "select",
    //   options: Object.values(ApplicationBadgeStatus),
    //   description: "The application status",
    // },
    // Exclude the type from the controls
    // status: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
  args: {
    status: ApplicationBadgeStatus.Pending,
  },
};

export const ApprovedBadge: Story = {
  args: {
    status: ApplicationBadgeStatus.Approved,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Approved` Application status badge.",
    },
  },
};

export const RejectedBadge: Story = {
  args: {
    status: ApplicationBadgeStatus.Rejected,
  },
  parameters: {
    docs: {
      storyDescription: "Displays the `Rejected` Application status badge.",
    },
  },
};
