"use client";

import { useMemo } from "react";

import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";
import { StatCardProps } from "@/primitives/StatCard";
import { StatCardGroup } from "@/primitives/StatCardGroup";
import { PoolType } from "@/types";

import { ApplicationsSection } from "~checker/components";
import { useGetApplicationsReviewPage } from "~checker/hooks";
import {
  goToApplicationEvaluationOverviewAction,
  goToSubmitFinalEvaluationAction,
  useCheckerContext,
  useCheckerDispatchContext,
} from "~checker/store";
import { getManagerUrl, getRoundLinkOnManager } from "~checker/utils";
import { PoolSummary } from "~pool";

export const ReviewApplicationsPage = ({ isStandalone }: { isStandalone: boolean }) => {
  const { categorizedReviews, statCardsProps, poolData, poolFetchState } =
    useGetApplicationsReviewPage() || {};
  const { poolId, chainId } = useCheckerContext();
  const {
    ReadyApplicationsToSubmit,
    PendingApplications,
    ApprovedApplications,
    RejectedApplications,
    isLoading,
  } = useMemo(() => {
    return {
      ReadyApplicationsToSubmit: categorizedReviews?.READY_TO_REVIEW || [],
      PendingApplications: categorizedReviews?.INREVIEW || [],
      ApprovedApplications: categorizedReviews?.APPROVED || [],
      RejectedApplications: categorizedReviews?.REJECTED || [],
      isLoading: poolFetchState?.isLoading,
    };
  }, [categorizedReviews, poolData, poolFetchState]);

  const dispatch = useCheckerDispatchContext();

  if (!poolId || !chainId || isLoading === undefined) return null;

  const goToApplicationEvaluationOverview = (projectId: string) => {
    dispatch(goToApplicationEvaluationOverviewAction({ projectId }));
  };

  const goToSubmitFinalEvaluation = () => {
    dispatch(goToSubmitFinalEvaluationAction());
  };

  const openRoundInManager = () => {
    window.open(
      getRoundLinkOnManager(chainId, poolId, poolData?.strategyName as PoolType),
      "_blank",
    );
  };

  const openCheckerApplicationEvaluations = (projectId: string) => {
    window.open(
      `https://beta.checker.gitcoin.co/view/application/${chainId}/${poolId}/${projectId}`,
      "_blank",
    );
  };

  return (
    <div className="flex flex-col gap-6 ">
      {isStandalone && (
        <PoolSummary
          isLoading={isLoading}
          chainId={chainId}
          poolId={poolId}
          programId={poolData?.project.id as string}
          strategyName={poolData?.strategyName}
          name={poolData?.roundMetadata?.name}
          applicationsStartTime={poolData?.applicationsStartTime}
          applicationsEndTime={poolData?.applicationsEndTime}
          donationsStartTime={poolData?.donationsStartTime}
          donationsEndTime={poolData?.donationsEndTime}
        />
      )}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-20">
        {isStandalone && (
          <div className="flex justify-start">
            <Button
              variant="secondry"
              icon={<Icon type={IconType.CHEVRON_LEFT} />}
              onClick={openRoundInManager}
              value="back to round manager"
            />
          </div>
        )}
        <StatCardGroup stats={statCardsProps as StatCardProps[]} justify="center" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-ui-sans text-2xl font-medium leading-loose text-black">
              Review applications
            </div>
            <div className="font-ui-sans text-base font-normal leading-7 text-grey-900">
              Evaluate projects here.
            </div>
          </div>
          <ApplicationsSection
            label="Ready to submit"
            zeroApplicationsLabel="Evaluations that are ready to be submitted onchain will appear here once reviewed."
            count={ReadyApplicationsToSubmit.length}
            isLoading={isLoading}
            applications={ReadyApplicationsToSubmit}
            action={goToApplicationEvaluationOverview}
            isPoolManager={poolData?.isPoolManager}
            isReadyToSubmit
            goToSubmitFinalEvaluation={goToSubmitFinalEvaluation}
          />
          <ApplicationsSection
            label="In Review"
            zeroApplicationsLabel="No applications are currently in review."
            count={PendingApplications.length}
            isLoading={isLoading}
            applications={PendingApplications}
            action={goToApplicationEvaluationOverview}
            isPoolManager={poolData?.isPoolManager}
          />
          <ApplicationsSection
            label="Approved applications"
            zeroApplicationsLabel="No approved applications."
            count={ApprovedApplications.length}
            isLoading={isLoading}
            applications={ApprovedApplications}
            action={openCheckerApplicationEvaluations}
            isPoolManager={poolData?.isPoolManager}
            keepAction
            actionLabel="View evaluations"
          />
          <ApplicationsSection
            label="Rejected applications"
            zeroApplicationsLabel="No rejected applications."
            count={RejectedApplications.length}
            isLoading={isLoading}
            applications={RejectedApplications}
            action={openCheckerApplicationEvaluations}
            isPoolManager={poolData?.isPoolManager}
            actionLabel="View evaluations"
            keepAction
          />
        </div>
      </div>
    </div>
  );
};
