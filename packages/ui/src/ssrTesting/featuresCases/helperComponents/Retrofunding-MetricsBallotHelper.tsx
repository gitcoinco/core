"use client";

import { MetricsBallot } from "@/features/retrofunding/components/MetricsBallot";

export const MetricsBallotHelper = (
  props: Omit<React.ComponentProps<typeof MetricsBallot>, "onSubmit" | "onFormChange">,
) => {
  const fullProps = {
    ...props,
    onSubmit: (values: any) => console.log(values),
    onFormChange: (values: any) => console.log(values),
  };
  return <MetricsBallot {...fullProps} />;
};
