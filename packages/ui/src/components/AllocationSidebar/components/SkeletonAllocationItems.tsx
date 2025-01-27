"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/primitives/Skeleton";

import { AllocationItem } from "./AllocationItem";

export const SkeletonAllocationItems = ({
  count,
  isLoading,
}: {
  count: number;
  isLoading?: boolean;
}) => {
  return (
    <div className="h-[372px] pr-4">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <AllocationItem isLoading={isLoading}>
              <Skeleton
                className={cn("h-4 w-6 shrink-0 rounded-md", { "animate-none": !isLoading })}
              />
            </AllocationItem>
          </div>
        ))}
    </div>
  );
};
