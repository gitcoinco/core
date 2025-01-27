"use client";

import { tv } from "tailwind-variants";

import { PoolCard, PoolCardProps } from "../PoolCard";

export type JustifyVariants =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export interface PoolCardGroupProps {
  pools: PoolCardProps[];
  justify?: JustifyVariants;
}

const justifyVariants = tv({
  base: "flex flex-wrap gap-6",
  variants: {
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    justify: "normal",
  },
});

export const PoolCardGroup = ({ pools, justify }: PoolCardGroupProps) => {
  return (
    <div className={justifyVariants({ justify })}>
      {pools.map((pool, index) => (
        <PoolCard key={index} {...pool} />
      ))}
    </div>
  );
};
