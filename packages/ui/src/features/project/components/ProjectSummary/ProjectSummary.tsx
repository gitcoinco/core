"use client";

import * as React from "react";

import { ProjectApplicationForManager, ProjectMetadata } from "@gitcoin/types/checker";

import { IconLabel } from "@/components/IconLabel";
import { useCredentialVerification } from "@/hooks/useCredentialVerification";
import { IconType } from "@/primitives/Icon";

export interface ProjectSummaryProps {
  projectMetadata: ProjectMetadata;
  application: Partial<ProjectApplicationForManager>;
}

export const ProjectSummary: React.FC<ProjectSummaryProps> = ({ projectMetadata, application }) => {
  const { createdAt, website, lastUpdated, projectTwitter, projectGithub } = projectMetadata;

  const recipient = application.metadata?.application.recipient;

  const appliedOnLabel = `Applied on: ${new Date(createdAt).toLocaleString()}`;
  const lastEditedLabel = `Last edited: ${new Date(
    lastUpdated.toString() !== "0" ? lastUpdated : createdAt,
  ).toLocaleString()}`;

  const { isTwitterVerified, isGithubVerified } = useCredentialVerification(application);

  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4">
        {recipient && <IconLabel type="address" address={recipient} />}
        {website && <IconLabel type="social" platform="website" link={website} />}
        {projectTwitter && (
          <IconLabel
            type="social"
            platform="twitter"
            link={`https://x.com/${projectTwitter}`}
            isVerified={isTwitterVerified}
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        {createdAt && (
          <IconLabel
            className="text-grey-900"
            type="default"
            iconType={IconType.CALENDAR}
            label={appliedOnLabel}
          />
        )}
        {(createdAt || lastUpdated) && (
          <IconLabel
            className="text-grey-900"
            type="default"
            iconType={IconType.CALENDAR}
            label={lastEditedLabel}
          />
        )}
        {projectGithub && (
          <IconLabel
            type="social"
            platform="github"
            link={`https://github.com/${projectGithub}`}
            isVerified={isGithubVerified}
          />
        )}
      </div>
    </div>
  );
};
