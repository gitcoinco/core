"use client";

import { Hex } from "viem";

import { Step } from "@/types";

import { CheckerRouter } from "~checker/routers";
import { CheckerProvider } from "~checker/store";
import { EvaluationBody, ReviewBody } from "~checker/types";

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
}

export const Checker = (props: CheckerProps) => {
  return (
    <CheckerProvider>
      <CheckerRouter {...props} />
    </CheckerProvider>
  );
};
