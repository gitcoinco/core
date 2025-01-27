"use client";

import { match } from "ts-pattern";

import { Skeleton } from "@/primitives/Skeleton";
import { Card } from "@/ui-shadcn/card";

export interface StatCardProps {
  label: string;
  value?: string;
}

export const StatCard = ({ label, value }: StatCardProps) => {
  const content = match(value)
    .with(undefined, () => <Skeleton className="size-8 rounded-2xl" />)
    .otherwise((val) => (
      <div className="font-ui-mono text-[32px]/[41.66px] font-normal text-grey-900">{val}</div>
    ));

  return (
    <Card className="flex h-[132px] w-[220.5px] flex-col justify-between rounded-[24px] border-0 bg-grey-50 p-6">
      {content}
      <div className="font-ui-sans text-[14px]/[20px] font-bold text-grey-900">{label}</div>
    </Card>
  );
};
