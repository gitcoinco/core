"use client";

import { getApplicationByIdFromIndexer } from "@gitcoin/services/allo";
import { getCheckerApplicationEvaluations } from "@gitcoin/services/checker";
import { useQuery } from "@tanstack/react-query";

export const useApplicationEvaluations = (
  chainId: number,
  roundId: string,
  applicationId: string,
) => {
  const query = useQuery({
    enabled: !!applicationId && !!roundId && !!chainId,
    queryKey: ["viewApplicationEvaluationsPage", chainId, roundId, applicationId],
    queryFn: async () => {
      const application = await getApplicationByIdFromIndexer(chainId, roundId, applicationId);
      const applicationEvaluations = await getCheckerApplicationEvaluations(
        chainId,
        roundId,
        applicationId,
      );
      if (!application || !applicationEvaluations) return undefined;
      const data = {
        application,
        applicationEvaluations: applicationEvaluations,
      };
      return data;
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
