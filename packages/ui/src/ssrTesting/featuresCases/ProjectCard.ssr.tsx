import { SSRComponent } from "@gitcoin/types";

import { ProjectCard, ProjectCardProps } from "@/features/project";
import { createQueryState } from "@/lib";

const simpleProject = {
  id: "0x123456789",
  title: "Gitcoin Grants Stack",
  logoImg: "QmVSEo7Q1NFok7AT3vqD55EoThBgujoF1KXhiph9T9MNTr",
  bannerImg: "QmXE6wP4Zsqp6VdNtXjv2EwqJpCTcBZfZNdSKSbjzEKKtn",
  description:
    "Gitcoin Grants Stack is a protocol-enabled solution that enables any community to easily create, manage and grow a grants program.",
  projectGithub: "https://github.com/gitcoinco",
  projectTwitter: "https://twitter.com/gitcoin",
};

const projectCardSSR: SSRComponent<React.ComponentProps<typeof ProjectCard>> = {
  component: ProjectCard,
  cases: [
    {
      label: "Default",
      props: {
        ...simpleProject,
      },
    },
    {
      label: "Success",
      props: { queryResult: createQueryState("success", { ...simpleProject }) },
    },
    {
      label: "Loading",
      props: { queryResult: createQueryState<ProjectCardProps>("pending") },
    },
    {
      label: "Error",
      props: { queryResult: createQueryState<ProjectCardProps>("error", undefined) },
    },
  ],
};

export default projectCardSSR;
