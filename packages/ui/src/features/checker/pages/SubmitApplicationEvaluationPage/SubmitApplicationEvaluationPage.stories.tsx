import { Meta, StoryObj } from "@storybook/react";

import { handlers } from "@/mocks/handlers";

import { usePerformEvaluation } from "~checker/hooks";
import { CheckerProvider } from "~checker/store";

import { SubmitApplicationEvaluationPage } from "./SubmitApplicationEvaluationPage";

const meta: Meta<typeof SubmitApplicationEvaluationPage> = {
  title: "Features/Checker/Pages/SubmitApplicationEvaluationPage",
  component: SubmitApplicationEvaluationPage,
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
    (Story) => {
      return (
        <CheckerProvider
          config={{
            checkerEndpoint: "https://checker-api-production.up.railway.app",
            gsIndexerEndpoint: "https://hasura-production-3454.up.railway.app/v1/graphql",
          }}
        >
          <Story />
        </CheckerProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SubmitApplicationEvaluationPage>;

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
  render: (args) => {
    const { setEvaluationBody, isSuccess, isEvaluating, isError } = usePerformEvaluation();
    return (
      <SubmitApplicationEvaluationPage
        setEvaluationBody={setEvaluationBody}
        isSuccess={isSuccess}
        isEvaluating={isEvaluating}
        isError={isError}
        applicationId={args.applicationId}
        chainId={args.chainId}
        poolId={args.poolId}
        address={args.address}
        isStandalone={true}
      />
    );
  },
};
