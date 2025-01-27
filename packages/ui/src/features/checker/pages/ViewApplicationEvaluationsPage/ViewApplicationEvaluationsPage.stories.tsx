import { Meta, StoryObj } from "@storybook/react";

import { handlers } from "@/mocks/handlers";

import { CheckerProvider } from "~checker/store";

import { ViewApplicationEvaluationsPage } from "./ViewApplicationEvaluationsPage";

const meta: Meta<typeof ViewApplicationEvaluationsPage> = {
  title: "Features/Checker/Pages/ViewApplicationEvaluationsPage",
  component: ViewApplicationEvaluationsPage,
  argTypes: {
    chainId: {
      control: "number",
    },
    poolId: {
      control: "text",
    },
    applicationId: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <CheckerProvider>
        <Story />
      </CheckerProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ViewApplicationEvaluationsPage>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
  args: {
    chainId: 42161,
    poolId: "609",
    applicationId: "0",
  },
};
