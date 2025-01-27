"use client";

import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/primitives/Skeleton";

import { ProjectAllocation } from "../types";

export const AllocationItem = ({
  id,
  name,
  image,
  children,
  onClickProject,
  isLoading,
}: PropsWithChildren<Partial<ProjectAllocation>> & {
  onClickProject?: (id?: string) => void;
  isLoading?: boolean;
}) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between border-b border-grey-300 py-2 text-xs">
        <div
          className={cn("flex max-w-[204px] cursor-pointer items-center gap-2", {
            "cursor-default": !id || !onClickProject,
          })}
          onClick={() => {
            if (id && onClickProject) {
              onClickProject(id);
            }
          }}
        >
          {image ? (
            <div
              className="size-6 shrink-0 rounded-lg bg-grey-100 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ) : (
            <Skeleton
              className={cn("size-6 shrink-0 rounded-lg", { "animate-none": !isLoading })}
            />
          )}
          <div className="truncate font-ui-sans text-xs font-normal text-grey-900">
            {name || (
              <Skeleton className={cn("h-4 w-16 rounded-md", { "animate-none": !isLoading })} />
            )}
          </div>
        </div>
        <div
          className={cn("font-ui-mono text-xs font-normal text-grey-900", {
            "animate-none": !isLoading,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};
