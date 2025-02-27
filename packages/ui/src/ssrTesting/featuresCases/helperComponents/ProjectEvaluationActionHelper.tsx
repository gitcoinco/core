"use client";

import { EvaluationAction } from "@gitcoin/types/checker";

import {
  ProjectEvaluationAction,
  ProjectEvaluationActionProps,
} from "@/features/checker/components/ProjectEvaluationAction";

export const ProjectEvaluationActionHelper = (
  props: Omit<ProjectEvaluationActionProps, "onEvaluate">,
) => {
  const onEvaluate = (projectId: string, action: EvaluationAction) =>
    console.log("onEvaluate", { projectId, action });
  return <ProjectEvaluationAction {...props} onEvaluate={onEvaluate} />;
};
