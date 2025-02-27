import { ProjectApplicationForManager } from "@gitcoin/types/checker";

import { ProjectSummary } from "@/features/project";
import { applicationsForManagers } from "@/mocks/mockData/applicationsForManager";
import { SSRComponent } from "@/types";

const projectSummarySSR: SSRComponent<React.ComponentProps<typeof ProjectSummary>> = {
  component: ProjectSummary,
  cases: [
    {
      label: "Default",
      props: {
        projectMetadata: {
          title: "Sample Project",
          description: "This is a sample project for demonstration purposes.",
          website: "https://www.sampleproject.com",
          recipient: "0x1234567890123456789012345678901234567890",
          createdAt: new Date("2024-01-01T00:00:00Z").getTime(),
          lastUpdated: new Date("2024-11-21T12:14:34.603Z").getTime(),
          projectTwitter: "sampleproject",
          projectGithub: "sampleproject",
          credentials: {},
          owners: [],
        },
        application: applicationsForManagers.data
          .applications[0] as unknown as Partial<ProjectApplicationForManager>,
      },
    },
  ],
};

export default projectSummarySSR;
