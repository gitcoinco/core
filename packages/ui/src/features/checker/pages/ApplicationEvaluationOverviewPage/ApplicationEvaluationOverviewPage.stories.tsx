import { Meta, StoryObj } from "@storybook/react";

import { handlers } from "@/mocks/handlers";

import { CheckerProvider } from "~checker/store";

import { ApplicationEvaluationOverviewPage } from "./ApplicationEvaluationOverviewPage";

const meta: Meta<typeof ApplicationEvaluationOverviewPage> = {
  title: "Features/Checker/Pages/ApplicationEvaluationOverviewPage",
  component: ApplicationEvaluationOverviewPage,
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
      <CheckerProvider
        config={{
          checkerEndpoint: "https://checker-api-production.up.railway.app",
          gsIndexerEndpoint: "https://hasura-production-3454.up.railway.app/v1/graphql",
        }}
      >
        <Story />
      </CheckerProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ApplicationEvaluationOverviewPage>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
  args: {
    chainId: 10,
    poolId: "7",
    applicationId: "1",
    address: "0x0D1781F0b693b35939A49831A6C799B938Bd2F80",
  },
};
