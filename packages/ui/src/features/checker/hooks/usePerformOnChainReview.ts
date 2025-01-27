"use client";

import { useState, useEffect, useMemo } from "react";

import { useMutation } from "@tanstack/react-query";

import { getOnchainEvaluationProgressSteps } from "@/components/ProgressModal";
import { ProgressStatus } from "@/types";

import { ReviewBody } from "../types";

export const usePerformOnChainReview = () => {
  const [reviewBody, setReviewBody] = useState<ReviewBody | null>(null);
  const [contractUpdatingStatus, setContractUpdatingStatus] = useState<ProgressStatus>(
    ProgressStatus.NOT_STARTED,
  );
  const [indexingStatus, setIndexingStatus] = useState<ProgressStatus>(ProgressStatus.NOT_STARTED);
  const [finishingStatus, setFinishingStatus] = useState<ProgressStatus>(
    ProgressStatus.NOT_STARTED,
  );
  // Review mutation TODO: make use of https://github.com/gitcoinco/grants-stack/blob/main/packages/round-manager/src/context/application/BulkUpdateGrantApplicationContext.tsx#L117
  const evaluationMutation = useMutation({
    mutationFn: async (data: ReviewBody) => {
      setContractUpdatingStatus(ProgressStatus.IN_PROGRESS);
      try {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setContractUpdatingStatus(ProgressStatus.IS_SUCCESS);
            setIndexingStatus(ProgressStatus.IN_PROGRESS);
            resolve();
          }, 3000);
        });
      } catch (e) {
        console.error("error: evaluationMutation - ", e);
        setContractUpdatingStatus(ProgressStatus.IS_ERROR);
        return;
      }

      try {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setIndexingStatus(ProgressStatus.IS_SUCCESS);
            setFinishingStatus(ProgressStatus.IN_PROGRESS);
            resolve();
          }, 3000);
        });
      } catch (e) {
        console.error("error: evaluationMutation - ", e);
        setIndexingStatus(ProgressStatus.IS_ERROR);
        return;
      }

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setFinishingStatus(ProgressStatus.IS_SUCCESS);
          resolve();
        }, 3000);
      });
    },
  });

  useEffect(() => {
    if (reviewBody) {
      evaluationMutation.mutate(reviewBody);
      setContractUpdatingStatus(ProgressStatus.NOT_STARTED);
      setIndexingStatus(ProgressStatus.NOT_STARTED);
      setFinishingStatus(ProgressStatus.NOT_STARTED);
    }
  }, [reviewBody]);

  useEffect(() => {
    if (evaluationMutation.isSuccess) {
      // Assuming the correct method is to refetch or reset the mutation
      evaluationMutation.reset();
    }
  }, [evaluationMutation.isSuccess]);

  const steps = useMemo(() => {
    return getOnchainEvaluationProgressSteps({
      contractUpdatingStatus,
      indexingStatus,
      finishingStatus,
    });
  }, [contractUpdatingStatus, indexingStatus, finishingStatus]);

  return {
    setReviewBody,
    steps,
    isReviewing: evaluationMutation.isPending,
    isError: evaluationMutation.isError,
    isSuccess: evaluationMutation.isSuccess,
    error: evaluationMutation.error,
  };
};
