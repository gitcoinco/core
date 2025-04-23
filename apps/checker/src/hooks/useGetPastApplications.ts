"use client";

import { getPastApplicationsByApplicationIdFromIndexer } from "@gitcoin/services/allo";
import { useQuery } from "@tanstack/react-query";

export const useGetPastApplications = (chainId: number, roundId: string, applicationId: string) => {
  const query = useQuery({
    enabled: !!applicationId && !!roundId && !!chainId,
    queryKey: ["getPastApplicaitions", chainId, roundId, applicationId],
    queryFn: async () => {
      const pastApplications = await getPastApplicationsByApplicationIdFromIndexer(
        chainId,
        roundId,
        applicationId,
      );
      return pastApplications;
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
