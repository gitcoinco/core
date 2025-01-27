"use client";

import { useCheckerContext } from "@/features/checker/store/hooks/useCheckerContext";

import { generatePoolUUID } from "~checker/utils/generatePoolUUID";

export const useApplicationOverviewEvaluations = ({ applicationId }: { applicationId: string }) => {
  const { poolId, chainId, poolsData } = useCheckerContext();

  const poolUUID = generatePoolUUID(poolId, chainId);

  const poolData = poolUUID ? poolsData[poolUUID] : null;

  if (!poolData) return null;

  const application = poolData.applications[applicationId];
  const applicationEvaluations = application?.evaluations ?? [];
  const evaluationQuestions = poolData.evaluationQuestions;

  return {
    application,
    applicationEvaluations,
    evaluationQuestions,
    poolData,
  };
};
