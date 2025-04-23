"use client";

import { EvaluationBody, ReviewBody } from "@gitcoin/types";
import { Step } from "@gitcoin/ui/types";
import { Hex } from "viem";

import { CheckerRouter } from "@/routers";
import { CheckerProvider } from "@/store";

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
