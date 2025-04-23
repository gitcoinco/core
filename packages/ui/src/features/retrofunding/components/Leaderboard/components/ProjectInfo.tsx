import { useMemo } from "react";

import { cn } from "@gitcoin/utils";
import { tv } from "tailwind-variants";
import { useMediaQuery } from "usehooks-ts";

import { IconLabel } from "@/components/IconLabel";
import { IconType } from "@/primitives/Icon";
import { Markdown } from "@/primitives/Markdown";

const projectInfoVariants = tv({
  slots: {
    container: "flex w-full flex-col gap-4 pb-4 pl-4",
    title:
      "leaderboard-project-info-link cursor-pointer truncate font-ui-sans text-sm font-normal leading-7 hover:underline",
    description:
      "leaderboard-project-info-description max-h-[350px] overflow-y-auto text-left font-ui-sans font-normal leading-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    icon: "leaderboard-project-info-icons size-5 shrink-0 ",
  },
});

interface ProjectInfoProps {
  project: {
    website?: string;
    projectProfile?: string;
    projectTwitter?: string;
    projectGithub?: string;
    description?: string;
  };
  parentWidth?: number;
}

export const ProjectInfo = ({ project, parentWidth }: ProjectInfoProps) => {
  const { container, title, description, icon } = projectInfoVariants();
  const isDesktopView = useMediaQuery("(min-width: 768px)");

  const descriptionWidth = useMemo(() => {
    if (!isDesktopView || !parentWidth) return undefined;
    return { width: `${parentWidth - 90}px` };
  }, [isDesktopView, parentWidth]);
  return (
    <div className={cn(container(), isDesktopView && "pl-6")}>
      <div className={cn("flex w-fit flex-col gap-1", isDesktopView && "flex-row gap-6")}>
        {project.website && (
          <IconLabel
            type="social"
            platform="website"
            link={project.website}
            iconVariant={icon()}
            textVariant={title()}
            className="shrink-0 items-center"
          />
        )}
        {project.projectProfile && (
          <IconLabel
            type="default"
            iconType={IconType.EXPLORER_RAW}
            label={
              <a href={project.projectProfile} target="_blank" rel="noreferrer" className={title()}>
                Project profile
              </a>
            }
            iconVariant={icon()}
            className="shrink-0 items-center"
          />
        )}
        {project.projectTwitter && (
          <IconLabel
            type="social"
            platform="twitter"
            link={`https://twitter.com/${project.projectTwitter}`}
            isVerified={true}
            textVariant={title()}
            iconVariant={icon()}
            className="shrink-0 items-center"
          />
        )}

        {project.projectGithub && (
          <IconLabel
            type="social"
            platform="github"
            link={`https://github.com/${project.projectGithub}`}
            isVerified={true}
            textVariant={title()}
            iconVariant={icon()}
            className="shrink-0 items-center"
          />
        )}
      </div>

      <div className={cn(description())} style={descriptionWidth}>
        <Markdown>{project.description}</Markdown>
      </div>
    </div>
  );
};
