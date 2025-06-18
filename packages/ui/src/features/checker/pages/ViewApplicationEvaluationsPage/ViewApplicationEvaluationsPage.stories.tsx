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

type Story = StoryObj<typeof ViewApplicationEvaluationsPage>;

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
  },
};
