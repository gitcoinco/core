"use client";

import { EvaluationForm, EvaluationFormProps } from "@/components/EvaluationForm/EvaluationForm";

export const EvaluationFormHelper = (props: Omit<EvaluationFormProps, "onSubmit">) => {
  const fullProps = {
    ...props,
    onSubmit: (values: any) => console.log(values),
  };
  return <EvaluationForm {...fullProps} />;
};
