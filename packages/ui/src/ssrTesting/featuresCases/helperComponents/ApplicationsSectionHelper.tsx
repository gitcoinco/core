"use client";

import {
  ApplicationsSection,
  ApplicationsSectionProps,
} from "@/features/checker/components/ApplicationsSection";

export const ApplicationsSectionHelper = (
  props: Omit<ApplicationsSectionProps, "action" | "goToSubmitFinalEvaluation">,
) => {
  const action = () => console.log("action");
  const goToSubmitFinalEvaluation = () => console.log("goToSubmitFinalEvaluation");
  return (
    <ApplicationsSection
      {...props}
      action={action}
      goToSubmitFinalEvaluation={goToSubmitFinalEvaluation}
    />
  );
};
