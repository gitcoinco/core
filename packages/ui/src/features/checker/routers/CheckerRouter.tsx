"use client";

import { useEffect } from "react";

import { match, P } from "ts-pattern";
import { Hex } from "viem";

import { useCheckerContext } from "@/features/checker/store/hooks/useCheckerContext";
import { Step } from "@/types";

import { useInitialize } from "~checker/hooks";
import {
  ApplicationEvaluationOverviewPage,
  ReviewApplicationsPage,
  SubmitApplicationEvaluationPage,
  SubmitFinalEvaluationPage,
} from "~checker/pages";
import { CheckerRoute } from "~checker/store";
import { EvaluationBody, ReviewBody } from "~checker/types";

export interface CheckerRouterProps {
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

export const CheckerRouter = ({
  address,
  poolId,
  chainId,
  setEvaluationBody,
  isSuccess,
  isEvaluating,
  isError,
  steps,
  setReviewBody,
  isReviewing,
  isStandalone = true,
}: CheckerRouterProps) => {
  useInitialize({ address, poolId, chainId });

  const { route } = useCheckerContext();

  // When route changes scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return match(route)
    .with({ id: CheckerRoute.ReviewApplications }, () => (
      <ReviewApplicationsPage isStandalone={isStandalone} />
    ))
    .with(
      { id: CheckerRoute.ApplicationEvaluationOverview, projectId: P.string.minLength(1) },
      ({ projectId }) => (
        <ApplicationEvaluationOverviewPage
          chainId={chainId}
          poolId={poolId}
          applicationId={projectId}
          address={address}
          isStandalone={isStandalone}
        />
      ),
    )
    .with(
      { id: CheckerRoute.SubmitApplicationEvaluation, projectId: P.string.minLength(1) },
      ({ projectId }) => {
        return (
          <SubmitApplicationEvaluationPage
            setEvaluationBody={setEvaluationBody}
            isSuccess={isSuccess}
            isEvaluating={isEvaluating}
            isError={isError}
            applicationId={projectId}
            chainId={chainId}
            poolId={poolId}
            address={address}
            isStandalone={isStandalone}
          />
        );
      },
    )
    .with({ id: CheckerRoute.SubmitFinalEvaluation }, () => (
      <SubmitFinalEvaluationPage
        steps={steps}
        setReviewBody={setReviewBody}
        isReviewing={isReviewing}
        isStandalone={isStandalone}
      />
    ))
    .otherwise(() => <div>{`Route Not Found: ${JSON.stringify(route)}`}</div>);
};
