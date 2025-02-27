import { mockApplications } from "@repo/mocks/checker";
import type { Meta, StoryObj } from "@storybook/react";

import { ApplicationHistoryList } from "./ApplicationHistoryList";

const meta = {
  title: "Features/Checker/Components/ApplicationHistoryList",
  component: ApplicationHistoryList,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ApplicationHistoryList>;

export const OneOfEach: Story = { args: { applications: mockApplications } };
