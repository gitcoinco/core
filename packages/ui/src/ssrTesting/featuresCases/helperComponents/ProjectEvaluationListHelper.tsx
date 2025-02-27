"use client";

import { EvaluationAction } from "@gitcoin/types/checker";

import {
  ProjectEvaluationList,
  ProjectEvaluationListProps,
} from "@/features/checker/components/ProjectEvaluationList";

export const ProjectEvaluationListHelper = (props: Omit<ProjectEvaluationListProps, "action">) => {
  const action = (projectId: string, action: EvaluationAction) =>
    console.log("action", { projectId, action });
  return <ProjectEvaluationList {...props} action={action} />;
};
