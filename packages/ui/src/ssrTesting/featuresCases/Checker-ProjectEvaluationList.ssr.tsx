import { mockPendingReview0 } from "@/mocks/checker";
import { SSRComponent } from "@/types";

import { ProjectEvaluationListHelper } from "./helperComponents/ProjectEvaluationListHelper";

const projectEvaluationListSSR: SSRComponent<
  React.ComponentProps<typeof ProjectEvaluationListHelper>
> = {
  component: ProjectEvaluationListHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        projects: mockPendingReview0,
        evaluationStatus: "pending",
        isPoolManager: true,
      },
    },
  ],
};

export default projectEvaluationListSSR;
