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
  isStandalone: boolean;
}

export const Checker = (props: CheckerProps) => {
  return (
    <CheckerProvider
      config={{
        checkerEndpoint: "https://checker-api-production.up.railway.app",
        gsIndexerEndpoint: "https://hasura-production-3454.up.railway.app/v1/graphql",
      }}
    >
      <CheckerRouter {...props} />
    </CheckerProvider>
  );
};
