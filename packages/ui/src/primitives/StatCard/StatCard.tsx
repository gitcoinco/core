"use client";

import { cn } from "@gitcoin/utils";
import { tv, VariantProps } from "tailwind-variants";
import { match } from "ts-pattern";

import { Skeleton } from "@/primitives/Skeleton";
import { Card } from "@/ui-shadcn/card";

const statCardVariants = tv({
  slots: {
    card: "flex h-[132px] w-[220.5px] flex-col justify-between rounded-[24px] border-0 bg-grey-50 p-6",
    label: "font-ui-sans text-[14px]/[20px] font-bold text-grey-900",
    value: "font-ui-mono text-[32px]/[41.66px] font-normal text-grey-900",
  },
  variants: {
    size: {
      sm: {
        card: "h-[132px] w-[220.5px]",
        label: "text-[14px]/[20px]",
        value: "text-[32px]/[41.66px]",
      },
      md: {
        card: "h-[132px] w-[270px]",
        label: "text-sm",
        value: "text-2xl",
      },
    },
    color: {
      grey: {
        card: "bg-grey-50",
        label: "text-grey-900",
        value: "text-grey-900",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "grey",
  },
});

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  label: string;
  value?: string;
  className?: string;
}

export const StatCard = ({ label, value, size, color, className }: StatCardProps) => {
  const { card, label: labelStyle, value: valueStyle } = statCardVariants({ size, color });
  const content = match(value)
    .with(undefined, () => <Skeleton className="size-8 rounded-2xl" />)
    .otherwise((val) => <div className={valueStyle()}>{val}</div>);

  return (
    <Card className={cn(card(), className)}>
      {content}
      <div className={labelStyle()}>{label}</div>
    </Card>
  );
};
