"use client";

import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { StatCard, StatCardProps } from "@/primitives/StatCard";

const statCardGroupVariants = tv({
  slots: {
    root: "flex flex-wrap gap-6",
  },
  variants: {
    justify: {
      normal: { root: "justify-normal" },
      start: { root: "justify-start" },
      end: { root: "justify-end" },
      center: { root: "justify-center" },
      between: { root: "justify-between" },
      around: { root: "justify-around" },
      evenly: { root: "justify-evenly" },
    },
  },
  defaultVariants: {
    justify: "normal",
  },
});

export interface StatCardGroupProps extends VariantProps<typeof statCardGroupVariants> {
  stats: StatCardProps[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const StatCardGroup = ({ stats, justify, size, className }: StatCardGroupProps) => {
  const { root } = statCardGroupVariants({ justify });
  return (
    <div className={cn(root(), className)}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} size={size} />
      ))}
    </div>
  );
};
