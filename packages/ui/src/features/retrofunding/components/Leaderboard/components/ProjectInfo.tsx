import { tv } from "tailwind-variants";
import { useMediaQuery } from "usehooks-ts";

import { IconLabel } from "@/components/IconLabel";
import { cn } from "@/lib";
import { IconType } from "@/primitives/Icon";

const projectInfoVariants = tv({
  slots: {
    container: "flex flex-col gap-4 pb-4 pl-4",
    title:
      "leaderboard-project-info-link cursor-pointer truncate font-ui-sans text-sm font-normal leading-7 hover:underline",
    description:
      "leaderboard-project-info-description line-clamp-3 font-ui-sans font-normal leading-7",
    icon: "leaderboard-project-info-icons size-5 shrink-0 ",
  },
});

interface ProjectInfoProps {
  project: {
    website?: string;
    projectTwitter?: string;
    projectGithub?: string;
    description?: string;
  };
}

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const { container, title, description, icon } = projectInfoVariants();
  const isDesktopView = useMediaQuery("(min-width: 768px)");
  return (
    <div className={cn(container(), isDesktopView && "pl-6")}>
      <div className={cn("flex w-fit flex-col gap-1", isDesktopView && "flex-row gap-6")}>
        <IconLabel
          type="social"
          platform="website"
          link={project.website}
          iconVariant={icon()}
          textVariant={title()}
          className="shrink-0 items-center"
        />
        <IconLabel
          type="default"
          iconType={IconType.EXPLORER_RAW}
          label={
            <a href={project.website} target="_blank" rel="noreferrer" className={title()}>
              Project profile
            </a>
          }
          iconVariant={icon()}
          className="shrink-0 items-center"
        />
        <IconLabel
          type="social"
          platform="twitter"
          link={`https://twitter.com/${project.projectTwitter}`}
          isVerified={true}
          textVariant={title()}
          iconVariant={icon()}
          className="shrink-0 items-center"
        />

        <IconLabel
          type="social"
          platform="github"
          link={`https://github.com/${project.projectGithub}`}
          isVerified={true}
          textVariant={title()}
          iconVariant={icon()}
          className="shrink-0 items-center"
        />
      </div>

      <span className={description()}>{project.description}</span>
    </div>
  );
};
