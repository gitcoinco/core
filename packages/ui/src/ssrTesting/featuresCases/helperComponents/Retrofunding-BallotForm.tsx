"use client";

import { BallotForm } from "@/features/retrofunding";

export const BallotFormHelper = (
  props: Omit<React.ComponentProps<typeof BallotForm>, "onSubmit" | "onChange">,
) => {
  const fullProps = {
    ...props,
    onSubmit: async () => console.log("onSubmit"),
    onChange: async () => console.log("onChange"),
  };
  return <BallotForm {...fullProps} />;
};
