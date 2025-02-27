"use client";

import { MetricCard } from "@/features/retrofunding/components/MetricCard";

export const MetricCardHelper = (
  props: Omit<React.ComponentProps<typeof MetricCard>, "onClick" | "onReadMore">,
) => {
  const fullProps = {
    ...props,
    onClick: () => console.log("clicked"),
    onReadMore: () => console.log("read more"),
  };
  return <MetricCard {...fullProps} />;
};
