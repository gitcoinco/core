"use client";

import { tv } from "tailwind-variants";

import { StatCard, StatCardProps } from "@/primitives/StatCard";

export type JustifyVariants =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export interface StatCardGroupProps {
  stats: StatCardProps[];
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

export const StatCardGroup = ({ stats, justify }: StatCardGroupProps) => {
  return (
    <div className={justifyVariants({ justify })}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
