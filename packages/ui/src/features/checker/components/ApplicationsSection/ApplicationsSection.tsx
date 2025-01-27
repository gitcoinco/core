"use client";

import React from "react";

import { match } from "ts-pattern";

import { Button } from "@/primitives/Button";
import { Skeleton } from "@/primitives/Skeleton";

import { ProjectReviewList } from "~checker/components";
import { useCheckerContext } from "~checker/store";
import { ProjectReview } from "~checker/types";

export interface SectionCountHeadingProps {
  label: string;
  count?: number;
  isLoading: boolean;
}

export interface ApplicationsSectionProps extends SectionCountHeadingProps {
  zeroApplicationsLabel: string;
  applications: ProjectReview[];
  action: (projectId: string) => void;
  isPoolManager?: boolean;
  keepAction?: boolean;
  isReadyToSubmit?: boolean;
  goToSubmitFinalEvaluation?: () => void;
  actionLabel?: string;
}

/**
 * A heading component that displays a label and a count, with a skeleton
 * placeholder when loading.
 */
export const SectionCountHeading: React.FC<SectionCountHeadingProps> = ({
  label,
  count,
  isLoading,
}) => {
  return match(isLoading)
    .with(true, () => (
      <div className="flex items-center gap-1">
        <div className="font-ui-sans text-2xl font-medium leading-loose text-black">
          {`${label} (`}
        </div>
        <Skeleton className="h-6 w-5 rounded" />
        <div className="font-ui-sans text-2xl font-medium leading-loose text-black">{")"}</div>
      </div>
    ))
    .otherwise(() => (
      <div className="font-ui-sans text-2xl font-medium leading-loose text-black">
        {`${label} (${count})`}
      </div>
    ));
};

/**
 * A section component that displays a list of applications under a heading.
 * Supports showing a loading state, a submit button if ready to submit,
 * and a fallback message when no applications are present.
 */
export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  label,
  zeroApplicationsLabel,
  isLoading,
  applications,
  action,
  isPoolManager,
  keepAction,
  isReadyToSubmit,
  goToSubmitFinalEvaluation,
  actionLabel,
}) => {
  const { address } = useCheckerContext();

  const heading = (
    <SectionCountHeading label={label} count={applications.length} isLoading={isLoading} />
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="pb-1">
        {isReadyToSubmit ? (
          <div className="flex items-center justify-between pb-1">
            <SectionCountHeading label={label} count={applications.length} isLoading={isLoading} />
            <Button
              value="Submit final evaluation"
              disabled={isLoading || applications.length === 0 || !isPoolManager}
              onClick={goToSubmitFinalEvaluation}
            />
          </div>
        ) : (
          <div className="flex items-center justify-start pb-1">{heading}</div>
        )}
        <div className="h-px bg-grey-300" />
      </div>

      <div>
        {applications.length === 0 && !isLoading ? (
          <div className="text-base font-normal leading-7 text-grey-900">
            {zeroApplicationsLabel}
          </div>
        ) : (
          <ProjectReviewList
            isLoading={isLoading}
            projects={applications}
            action={action}
            isPoolManager={isPoolManager}
            keepAction={keepAction}
            actionLabel={actionLabel}
            reviewer={address}
          />
        )}
      </div>
    </div>
  );
};
