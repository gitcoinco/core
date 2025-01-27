// utils/getProjectReviewListColumns.ts
import React from "react";

import { Address } from "viem";

import { DefaultLogo } from "@/assets";
import { IconLabel } from "@/components/IconLabel";
import { Button } from "@/primitives/Button";
import { CircleStat } from "@/primitives/Indicators";
import { ListGridColumn } from "@/primitives/ListGrid";
import { Skeleton } from "@/primitives/Skeleton";

import { ReviewsCounterLabelWithTooltip } from "~checker/components";
import { ProjectReview } from "~checker/types";
import { getReviewsCount } from "~checker/utils";

interface GetColumnsParams {
  reviewer?: Address;
  isPoolManager?: boolean;
  action?: (projectId: string) => void;
  actionLabel?: string;
  keepAction?: boolean;
}

export function getProjectReviewListColumns({
  reviewer,
  isPoolManager,
  action,
  actionLabel,
  keepAction,
}: GetColumnsParams): ListGridColumn<ProjectReview>[] {
  return [
    {
      header: "Project",
      key: "project",
      width: "1.5fr",
      render: (item) => (
        <div className="flex items-center gap-4">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="aspect-square size-12 rounded-sm"
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
              event.currentTarget.src = DefaultLogo;
            }}
          />
          <span>{item.name}</span>
        </div>
      ),
    },
    {
      header: "Date Submitted",
      key: "date",
      width: "1.34fr",
      render: (item) => <IconLabel type="date" date={item.date} />,
    },
    {
      header: "Reviews",
      key: "reviews",
      width: "0.74fr",
      render: (item) => {
        const { nApproved, nRejected } = getReviewsCount(item.reviews);
        return (
          <ReviewsCounterLabelWithTooltip positiveReviews={nApproved} negativeReviews={nRejected} />
        );
      },
    },
    {
      header: "AI Suggestion",
      key: "aiSuggestion",
      width: "0.9fr",
      render: (item) => {
        return item.aiSuggestion >= 0 ? (
          <IconLabel type="ai-evaluation" percent={item.aiSuggestion} />
        ) : (
          <ReviewsCounterLabelWithTooltip negativeReviews={0} positiveReviews={0} />
        );
      },
    },
    {
      header: "Score Average",
      key: "scoreAverage",
      width: "0.74fr",
      position: "center",
      render: (item) => (
        <div className="flex items-center justify-center">
          <CircleStat value={item.scoreAverage.toFixed(0)} />
        </div>
      ),
    },
    {
      header: "Action",
      key: "action",
      width: "1fr",
      position: "center",
      render: (item) => {
        const isReviewed = item.reviews.some((review) => review.reviewer === reviewer);
        const isDisabled = !keepAction && !isPoolManager;
        const defaultActionLabel = isReviewed ? "View evaluation" : "Evaluate project";
        return (
          <div className="flex items-center justify-center">
            <Button
              variant={isDisabled ? "disabled" : "subtle"}
              value={actionLabel ?? defaultActionLabel}
              disabled={isDisabled}
              onClick={() => {
                if (action) {
                  action(item.id);
                }
              }}
            />
          </div>
        );
      },
    },
  ];
}

export const skeletonData = Array.from({ length: 2 }).map(
  (_, index) => ({ id: index }) as unknown as ProjectReview,
);

export const skeletonColumns = getProjectReviewListColumns({}).map((col) => {
  if (col.key === "project") {
    return {
      ...col,
      render: () => (
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-lg" />
          <Skeleton className="h-6 w-44 rounded-lg" />
        </div>
      ),
    };
  }
  if (col.key === "date") {
    return {
      ...col,
      render: () => <IconLabel type="date" isLoading date={new Date()} />,
    };
  }
  if (col.key === "reviews") {
    return {
      ...col,
      render: () => <Skeleton className="h-6 w-32 rounded-lg" />,
    };
  }
  if (col.key === "aiSuggestion") {
    return {
      ...col,
      render: () => <IconLabel type="ai-evaluation" isLoading />,
    };
  }
  if (col.key === "scoreAverage") {
    return {
      ...col,
      render: () => (
        <div className="flex items-center justify-center">
          <Skeleton className="size-12 rounded-full" />
        </div>
      ),
    };
  }
  if (col.key === "action") {
    return {
      ...col,
      render: () => (
        <div className="flex items-center justify-center">
          <Skeleton className="h-8 w-40 rounded-lg" />
        </div>
      ),
    };
  }
  return col;
});
