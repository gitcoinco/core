"use client";

import { DefaultLogo } from "@/assets";
import { IconLabel } from "@/components/IconLabel";
import { CircleStat } from "@/primitives/Indicators";
import { ListGrid, ListGridColumn } from "@/primitives/ListGrid";

import { EvaluationAction, ProjectReview, ProjectStatus } from "~checker/types";
import { getReviewsCount } from "~checker/utils/getReviewsCount";

import { ProjectEvaluationAction } from "../ProjectEvaluationAction";
import { ReviewsCounterLabelWithTooltip } from "../ReviewsCounterLabel";

export interface ProjectEvaluationListProps {
  evaluationStatus?: ProjectStatus;
  projects: ProjectReview[];
  action: (projectId: string, action: EvaluationAction) => void;
  isPoolManager?: boolean;
}

export const ProjectEvaluationList = ({
  evaluationStatus = "pending",
  projects,
  action,
  isPoolManager,
}: ProjectEvaluationListProps) => {
  const columns: ListGridColumn<ProjectReview>[] = [
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
      width: "1.6fr",
      render: (item) => <IconLabel type="date" date={item.date} />,
    },
    {
      header: "Reviews",
      key: "reviews",
      width: "1fr",
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
      width: "1.1fr",
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
      width: "1fr",
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
      width: "1.9fr",
      position: "center",
      render: (item) => {
        return (
          <div className="flex items-center justify-center">
            <ProjectEvaluationAction
              onEvaluate={action}
              projectId={item.id}
              status={evaluationStatus}
              disabled={!isPoolManager}
            />
          </div>
        );
      },
    },
  ];
  return (
    <ListGrid
      data={projects}
      columns={columns}
      rowClassName="h-[72px]"
      getRowKey={(item: ProjectReview) => item.id.toString()}
    />
  );
};
