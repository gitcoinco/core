"use client";

import { Distribute } from "@/features/retrofunding";

export const DistributeHelper = (
  props: Omit<
    React.ComponentProps<typeof Distribute>,
    "onFundRound" | "onDistribute" | "onEditPayouts" | "onResetEdit" | "className"
  >,
) => {
  const fullProps = {
    ...props,

    onFundRound: async () => console.log("onFundRound"),
    onDistribute: async () => console.log("onDistribute"),
    onEditPayouts: async () => console.log("onEditPayouts"),
    onResetEdit: async () => console.log("onResetEdit"),
  };
  return <Distribute {...fullProps} />;
};
