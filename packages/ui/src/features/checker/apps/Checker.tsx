"use client";

import { Step } from "@gitcoin/types";
import { EvaluationBody, ReviewBody } from "@gitcoin/types/checker";
import { Hex } from "viem";

import { CheckerRouter } from "~checker/routers";
import { CheckerProvider } from "~checker/store";

export interface CheckerProps {
  address: Hex;
  poolId: string;
  chainId: number;
  setEvaluationBody: (body: EvaluationBody) => void;
  isSuccess: boolean;
  isEvaluating: boolean;
  isError: boolean;
  steps: Step[];
  setReviewBody: (reviewBody: ReviewBody | null) => void;
  isReviewing: boolean;
  isStandalone: boolean;
}

export const Checker = (props: CheckerProps) => {
  return (
    <CheckerProvider>
      <CheckerRouter {...props} />
    </CheckerProvider>
  );
};
