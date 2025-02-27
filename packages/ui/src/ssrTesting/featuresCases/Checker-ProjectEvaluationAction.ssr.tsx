import { SSRComponent } from "@gitcoin/types";

import { ProjectEvaluationActionHelper } from "@/ssrTesting/featuresCases/helperComponents/ProjectEvaluationActionHelper";

const projectEvaluationActionSSR: SSRComponent<
  React.ComponentProps<typeof ProjectEvaluationActionHelper>
> = {
  component: ProjectEvaluationActionHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        status: "pending",
        projectId: "0x123",
      },
    },
    {
      label: "Approved",
      props: {
        status: "approved",
        projectId: "0x123",
      },
    },
    {
      label: "Rejected",
      props: {
        status: "rejected",
        projectId: "0x123",
      },
    },
  ],
};

export default projectEvaluationActionSSR;
