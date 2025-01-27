"use client";

import { IconLabel } from "@/components/IconLabel";
import { DateFormat, formatDate } from "@/lib/dates/formatDate";
import { Accordion } from "@/primitives/Accordion";
import { IconType } from "@/primitives/Icon";
import { ListGrid, ListGridColumn } from "@/primitives/ListGrid";
import { Markdown } from "@/primitives/Markdown";

import { PastApplication, ProjectApplication, ProjectMetadata } from "~checker/services/allo/types";
import { ProjectSummary } from "~project";

import { ApplicationBadge, ApplicationBadgeStatus } from "../ApplicationBadge";

export enum SummaryAccordians {
  project = "project",
  projectDetails = "projectDetails",
  applicationAnswers = "applicationAnswers",
  pastApplications = "pastApplications",
}

export const ApplicationSummary = ({
  project,
  application,
  pastApplications,
  hideAccordians,
  className,
}: {
  project: ProjectMetadata;
  application: ProjectApplication;
  pastApplications: PastApplication[];
  hideAccordians?: SummaryAccordians[];
  className?: string;
}) => {
  const columns: ListGridColumn<PastApplication>[] = pastApplications
    ? [
        {
          header: "Status",
          key: "status",
          width: "0.5fr",
          render: (item) => {
            let status;
            // Determine the badge properties based on the status
            if (item.status === "REJECTED") {
              status = ApplicationBadgeStatus.Rejected;
            } else if (item.status === "APPROVED") {
              status = ApplicationBadgeStatus.Approved;
            } else {
              status = ApplicationBadgeStatus.Pending;
            }
            return <ApplicationBadge status={status} />;
          },
        },
        {
          header: "Date",
          key: "createdAtBlock",
          width: "1.2fr",
          render: (item) => (
            <span className="text-[16px]/[24px]">
              {formatDate(new Date(item.statusSnapshots[0]?.updatedAt), DateFormat.FullDate24Hour)}
            </span>
          ),
        },
        {
          header: "Round",
          key: "name",
          width: "1.8fr",
          render: (item) => <p className="text-[16px]/[24px]">{item.round.roundMetadata.name}</p>,
        },
      ]
    : [];

  return (
    <div className={`${className} flex w-full flex-col gap-4`}>
      {!hideAccordians?.includes(SummaryAccordians.project) && (
        <Accordion
          header={
            <IconLabel
              type="default"
              label={project.title}
              iconType={IconType.GLOBE}
              iconVariant="text-lg font-medium"
            />
          }
          isOpen={true}
          content={<ProjectSummary projectMetadata={project} application={application} />}
          variant="default"
          border="none"
          paddingX="sm"
        />
      )}

      {!hideAccordians?.includes(SummaryAccordians.projectDetails) && (
        <Accordion
          header={
            <IconLabel
              type="default"
              label="Project details"
              iconType={IconType.CLIPBOARD_LIST}
              iconVariant="text-lg font-medium"
            />
          }
          content={<Markdown>{project.description}</Markdown>}
          variant="default"
          border="none"
          paddingX="sm"
          isOpen={false}
        />
      )}

      {!hideAccordians?.includes(SummaryAccordians.applicationAnswers) && (
        <Accordion
          header={
            <IconLabel
              type="default"
              label="Application answers"
              iconType={IconType.STAR}
              iconVariant="text-lg font-medium"
            />
          }
          content={
            <div className="flex flex-col gap-4">
              {application.metadata.application.answers.map((answer, index) => {
                if (answer.encryptedAnswer || !answer.answer) {
                  return null;
                }
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="font-ui-sans text-[16px]/[24px] font-bold">
                      {answer.question}
                    </span>
                    <span className="font-ui-sans text-[16px]/[24px] font-normal">
                      <Markdown>{answer.answer}</Markdown>
                    </span>
                  </div>
                );
              })}
            </div>
          }
          variant="default"
          border="none"
          paddingX="sm"
          isOpen={false}
        />
      )}
      {!hideAccordians?.includes(SummaryAccordians.pastApplications) && (
        <Accordion
          header={
            <IconLabel
              type="default"
              label="Past applications"
              iconType={IconType.INFORMATION_CIRCLE}
              iconVariant="text-lg font-medium"
            />
          }
          content={
            pastApplications ? (
              <div>
                <ListGrid
                  data={pastApplications}
                  columns={columns}
                  rowClassName="h-[72px]"
                  getRowKey={(item: PastApplication) => `${item.id}-${item.roundId}`}
                />
              </div>
            ) : (
              <div>No past applications</div>
            )
          }
          variant="default"
          border="none"
          paddingX="sm"
          isOpen={false}
        />
      )}
    </div>
  );
};
