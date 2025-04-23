"use client";

import { ProjectReview } from "@gitcoin/types";
import { ListGrid } from "@gitcoin/ui";
import { match } from "ts-pattern";
import { Address } from "viem";

import { getProjectReviewListColumns, skeletonColumns, skeletonData } from "./utils";

export interface ProjectReviewListProps {
  projects: ProjectReview[];
  isLoading?: boolean;
  reviewer?: Address;
  isPoolManager?: boolean;
  action?: (projectId: string) => void;
  actionLabel?: string;
  keepAction?: boolean;
}

const getRowKey = (item: ProjectReview) => item.id.toString();

export const ProjectReviewList = ({
  reviewer,
  isPoolManager,
  isLoading,
  projects,
  action,
  actionLabel,
  keepAction,
}: ProjectReviewListProps) => {
  const columns = getProjectReviewListColumns({
    reviewer,
    isPoolManager,
    action,
    actionLabel,
    keepAction,
  });

  return match(isLoading)
    .with(true, () => (
      <div className="max-w-screen-xl">
        <ListGrid
          data={skeletonData}
          columns={skeletonColumns}
          getRowKey={getRowKey}
          rowClassName="h-[72px]"
        />
      </div>
    ))
    .otherwise(() => (
      <ListGrid data={projects} columns={columns} rowClassName="h-[72px]" getRowKey={getRowKey} />
    ));
};
