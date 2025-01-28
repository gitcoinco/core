"use client";

import { Hex } from "viem";

import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";

import { EvaluationList } from "~checker/components";
import { useApplicationOverviewEvaluations, useInitialize } from "~checker/hooks";
import {
  goToReviewApplicationsAction,
  goToSubmitApplicationEvaluationAction,
  useCheckerDispatchContext,
} from "~checker/store";
import { PoolSummary } from "~pool";
import { ProjectBanner } from "~project";

export interface ApplicationEvaluationOverviewPageProps {
  chainId: number;
  poolId: string;
  applicationId: string;
  address: Hex;
  isStandalone: boolean;
}

export const ApplicationEvaluationOverviewPage = ({
  chainId,
  poolId,
  applicationId,
  address,
  isStandalone,
}: ApplicationEvaluationOverviewPageProps) => {
  useInitialize({ address, poolId, chainId });

  const { application, applicationEvaluations, poolData } =
    useApplicationOverviewEvaluations({ applicationId }) || {};

  if (!application) return null;

  const dispatch = useCheckerDispatchContext();

  const goToSubmitApplicationEvaluation = () => {
    dispatch(goToSubmitApplicationEvaluationAction({ projectId: applicationId }));
  };

  const goToReviewApplications = () => {
    dispatch(goToReviewApplicationsAction());
  };

  const project = application.metadata.application.project;

  return (
    <div className="flex flex-col gap-6">
      {isStandalone && (
        <PoolSummary
          chainId={chainId}
          poolId={poolId}
          programId={poolData?.project.id as string}
          strategyName={poolData?.strategyName}
          name={poolData?.roundMetadata.name}
          applicationsStartTime={poolData?.applicationsStartTime}
          applicationsEndTime={poolData?.applicationsEndTime}
          donationsStartTime={poolData?.donationsStartTime}
          donationsEndTime={poolData?.donationsEndTime}
        />
      )}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-20">
        <div>
          <Button
            variant="secondry"
            icon={<Icon type={IconType.CHEVRON_LEFT} />}
            onClick={goToReviewApplications}
            value="back to all projects"
          />
        </div>
        <ProjectBanner
          bannerImg={project.bannerImg ?? ""}
          logoImg={project.logoImg ?? ""}
          avatarPosition="left"
        />
        <h1 className="text-3xl font-medium leading-9">{project.title}</h1>
        <div className="h-0.5 bg-grey-100" />
        <p className="leading-9 text-grey-900">
          Evaluate this project and see how others have evaluated this project.
        </p>
        <div className="mb-64 flex flex-col gap-8">
          <div className="px-16">
            <EvaluationList evaluations={applicationEvaluations ?? []} />
          </div>
          {poolData?.isPoolManager && (
            <div className="flex items-center justify-center">
              <Button
                variant="primary"
                value="Perform evaluation"
                className="w-44"
                onClick={goToSubmitApplicationEvaluation}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
