"use client";

import { generatePoolUUID } from "@gitcoin/utils/checker";

import { useCheckerContext } from "@/store/hooks/useCheckerContext";

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
