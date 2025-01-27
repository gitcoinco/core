"use client";

import { useState, useEffect } from "react";

import { useMutation } from "@tanstack/react-query";
import { Hex } from "viem";

import { submitEvaluation } from "~checker/services/checker/api";
import { EvaluationBody } from "~checker/types";

export const usePerformEvaluation = () => {
  const [evaluationBody, setEvaluationBody] = useState<EvaluationBody | null>(null);

  const handleSetEvaluationBody = (data: EvaluationBody) => {
    setEvaluationBody(data);
  };

  // Dummy signing function
  const dummySign = async (): Promise<Hex> => {
    return new Promise<Hex>((resolve) => {
      setTimeout(() => {
        resolve("0xdeadbeef");
      }, 3000);
    });
  };

  // Signing mutation
  const signingMutation = useMutation({
    mutationFn: dummySign,
  });

  // Evaluation mutation
  const evaluationMutation = useMutation({
    mutationFn: async (data: EvaluationBody) => {
      const signature = await signingMutation.mutateAsync();
      await submitEvaluation({ ...data, signature, evaluator: "0x" });
      setEvaluationBody(null);
    },
  });

  // Trigger the signing mutation when evaluationBody is set
  useEffect(() => {
    if (evaluationBody) {
      evaluationMutation.mutate(evaluationBody);
    }
  }, [evaluationBody]);

  return {
    setEvaluationBody: handleSetEvaluationBody,
    isEvaluating: evaluationMutation.isPending,
    isError: evaluationMutation.isError,
    isSuccess: evaluationMutation.isSuccess,
  };
};
