"use client";

import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { Hex } from "viem";

import { EvaluationForm } from "@/components/EvaluationForm/EvaluationForm";
import { useToast } from "@/hooks/useToast";
import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";

import { ApplicationSummary } from "~application";
import {
  useGetPastApplications,
  useInitialize,
  useApplicationOverviewEvaluations,
} from "~checker/hooks";
import { goToApplicationEvaluationOverviewAction, useCheckerDispatchContext } from "~checker/store";
import { EvaluationStatus, EvaluationBody } from "~checker/types";
import { PoolSummary } from "~pool";
import { ProjectBanner } from "~project";

import { SubmitApplicationEvaluationModal } from "./SubmitApplicationEvaluationModal";
import { getAnswerEnum } from "./utils";

export interface SubmitApplicationEvaluationPageProps {
  chainId: number;
  poolId: string;
  applicationId: string;
  address: Hex;
  setEvaluationBody: (data: EvaluationBody) => void;
  isSuccess: boolean;
  isEvaluating: boolean;
  isError: boolean;
}

export const SubmitApplicationEvaluationPage = ({
  chainId,
  poolId,
  applicationId,
  address,
  setEvaluationBody,
  isSuccess,
  isEvaluating,
  isError,
}: SubmitApplicationEvaluationPageProps) => {
  useInitialize({ address, poolId, chainId });

  const [evaluationStatus, setEvaluationStatus] = useState<EvaluationStatus>(
    EvaluationStatus.UNCERTAIN,
  );
  const [evaluationBody, setLocalEvaluationBody] = useState<EvaluationBody | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { application, evaluationQuestions, poolData } =
    useApplicationOverviewEvaluations({ applicationId }) || {};

  const dispatch = useCheckerDispatchContext();
  const { data: pastApplications } = useGetPastApplications(chainId, poolId, applicationId);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const showToast = () => {
    toast({
      status: isSuccess ? "success" : "error",
      description: isSuccess
        ? "Your evaluation has been saved"
        : "Error: Your evaluation has not been saved. Please try again.",
      timeout: 5000,
    });
  };

  const goToApplicationEvaluationOverview = () => {
    dispatch(goToApplicationEvaluationOverviewAction({ projectId: applicationId }));
  };

  useEffect(() => {
    if ((isSuccess || isError) && isModalOpen) {
      showToast();
      setIsModalOpen(false);
      goToApplicationEvaluationOverview();
      if (isSuccess) {
        queryClient.invalidateQueries({ queryKey: ["poolData", chainId, poolId, address] }); // Invalidate the query
      }
    }
  }, [isSuccess, isError]);

  if (!application || !evaluationQuestions) return null;

  const project = application.metadata.application.project;

  const groups = evaluationQuestions.map((q) => ({
    id: q.questionIndex.toString(),
    heading: q.question,
  }));

  const handleSubmit = ({
    type,
    selections,
    feedback,
  }: {
    type: "approve" | "reject";
    selections: Record<string, string>;
    feedback: string;
  }) => {
    const data = evaluationQuestions.map((q) => ({
      questionIndex: q.questionIndex,
      answerEnum: getAnswerEnum(selections[q.questionIndex - 1]),
    }));

    const evaluationType =
      type === "approve" ? EvaluationStatus.APPROVED : EvaluationStatus.REJECTED;
    setEvaluationStatus(evaluationType);
    setLocalEvaluationBody({
      chainId,
      alloPoolId: poolId,
      alloApplicationId: applicationId,
      cid: application.metadataCid,
      evaluator: address,
      summaryInput: {
        questions: data,
        summary: feedback,
      },
      evaluationStatus: evaluationType,
    });
    setIsModalOpen(true);
  };

  const onSave = () => {
    if (evaluationBody) {
      setEvaluationBody(evaluationBody);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <PoolSummary
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
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-20">
        <SubmitApplicationEvaluationModal
          evaluationStatus={evaluationStatus}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          isSuccess={isSuccess}
          isEvaluating={isEvaluating}
          isError={isError}
          onSave={onSave}
        />

        <div>
          <Button
            variant="secondry"
            icon={<Icon type={IconType.CHEVRON_LEFT} />}
            onClick={goToApplicationEvaluationOverview}
            value="back to evaluation overview"
          />
        </div>

        <ProjectBanner
          bannerImg={project.bannerImg ?? ""}
          logoImg={project.logoImg ?? ""}
          avatarPosition="left"
        />
        <h1 className="text-3xl font-medium leading-9">Evaluate {project.title}</h1>
        <div className="h-0.5 bg-grey-100" />
        <div className="flex gap-2">
          <ApplicationSummary
            project={project}
            application={application}
            pastApplications={pastApplications || []}
            className="max-w-[600px]"
          />

          <div className="rounded-[20px] border border-grey-100 p-5">
            <EvaluationForm groups={groups} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
