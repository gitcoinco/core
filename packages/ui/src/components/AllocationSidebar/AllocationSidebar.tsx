"use client";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/primitives/ScrollArea";

import {
  AllocationChart,
  AllocationItem,
  AllocationSortButton,
  SkeletonAllocationItems,
} from "./components";
import { AllocationSidebarProps } from "./types";

export const AllocationSidebar = ({
  title,
  description,
  isLoading,
  projects,
  chartData,
  footer,
  formatAllocation = (v: number) => `${(v * 100).toFixed(0)}%`,
  formatChartTick = (v: number) => `${(v * 100).toFixed(0)}%`,
  sortConfig,
  onClickProject,
}: AllocationSidebarProps) => {
  const { isAscending, onClick } = sortConfig;

  return (
    <div
      className={cn(
        "relative w-[300px] rounded-lg border border-grey-900 bg-grey-50 py-6",
        "flex flex-col gap-4",
      )}
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col gap-1">
          <div className="font-ui-sans text-lg font-medium text-grey-900">{title}</div>
          {description && (
            <div className="font-ui-sans text-sm font-normal text-grey-500">{description}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-32 rounded-lg border border-grey-300 bg-white">
            <AllocationChart data={chartData} formatChartTick={formatChartTick} />
          </div>

          {projects.length > 0 && !isLoading && (
            <div className="flex justify-start gap-1">
              <AllocationSortButton isAscending={isAscending} onClick={onClick} />
            </div>
          )}
        </div>
      </div>

      <div className=" pl-4">
        {!isLoading && projects.length > 0 ? (
          <ScrollArea className="h-[372px] ">
            <div className="pr-4">
              {projects.map((item) => (
                <AllocationItem key={item.name} {...item} onClickProject={onClickProject}>
                  {formatAllocation(item.amount)}
                </AllocationItem>
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        ) : (
          <SkeletonAllocationItems count={9} isLoading={isLoading} />
        )}
      </div>
      {footer}
    </div>
  );
};
