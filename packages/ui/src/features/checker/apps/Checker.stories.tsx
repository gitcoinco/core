import type { Meta, StoryObj } from "@storybook/react";

import { usePerformEvaluation, usePerformOnChainReview } from "~checker/hooks";
import { CheckerProvider } from "~checker/store";

import { Checker } from "./Checker";

const meta = {
  title: "Features/Checker",
  component: Checker,
  args: {
    address: "0x0D1781F0b693b35939A49831A6C799B938Bd2F80",
    poolId: "597",
    chainId: 11155111,
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
      <CheckerProvider>
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
