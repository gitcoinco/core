"use client";

import { match } from "ts-pattern";

import { Badge } from "@/primitives/Badge";
import { Skeleton } from "@/primitives/Skeleton";

import { StakePoolDataCard } from "./components";
import { StakePoolDataCardProps } from "./types";


export const StakePoolCard = ({ data }: { data: StakePoolDataCardProps }) => {
  return match(data)
    .with({ isLoading: true }, () => <LoadingCard />)
    .otherwise(() => <StakePoolDataCard {...data} />);
};

const LoadingCard = () => {
  return (
    <div className="inline-flex h-60 w-full items-center justify-between rounded-2xl border border-grey-100 p-6">
      <div className="flex items-center justify-start gap-6">
        <Skeleton className="relative h-40 w-[184px] rounded-2xl" />
        <div className="inline-flex w-[620px] flex-col items-start justify-start gap-3">
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-1/4 rounded-md" />
        </div>
      </div>
      <Badge skeleton size="md" />
    </div>
  );
};
