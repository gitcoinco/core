import type { Meta, StoryObj } from "@storybook/react";

import { usePerformEvaluation, usePerformOnChainReview } from "~checker/hooks";
import { CheckerProvider } from "~checker/store";

import { Checker } from "./Checker";

const meta = {
  title: "Features/Checker",
  component: Checker,
  args: {
    address: "0x0D1781F0b693b35939A49831A6C799B938Bd2F80",
    poolId: "7",
    chainId: 10,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Checker>;

export const Default: Story = {
  render(args) {
    // New StoryWrapper component
    const StoryWrapper = () => {
      const { setEvaluationBody, isSuccess, isEvaluating, isError } = usePerformEvaluation();
      const { steps, setReviewBody, isReviewing } = usePerformOnChainReview();

      return (
        <Checker
          {...args}
          setEvaluationBody={setEvaluationBody}
          isSuccess={isSuccess}
          isEvaluating={isEvaluating}
          isError={isError}
          steps={steps}
          setReviewBody={setReviewBody}
          isReviewing={isReviewing}
        />
      );
    };
    return (
      <CheckerProvider
        config={{
          checkerEndpoint: "https://checker-api-production.up.railway.app",
          gsIndexerEndpoint: "https://hasura-production-3454.up.railway.app/v1/graphql",
        }}
      >
        <StoryWrapper />
      </CheckerProvider>
    );
  },
};

export const Embedded: Story = {
  render(args) {
    // New StoryWrapper component
    const StoryWrapper = () => {
      const { setEvaluationBody, isSuccess, isEvaluating, isError } = usePerformEvaluation();
      const { steps, setReviewBody, isReviewing } = usePerformOnChainReview();

      return (
        <Checker
          {...args}
          setEvaluationBody={setEvaluationBody}
          isSuccess={isSuccess}
          isEvaluating={isEvaluating}
          isError={isError}
          steps={steps}
          setReviewBody={setReviewBody}
          isReviewing={isReviewing}
          isStandalone={false}
        />
      );
    };
    return (
      <CheckerProvider>
        <StoryWrapper />
      </CheckerProvider>
    );
  },
};
