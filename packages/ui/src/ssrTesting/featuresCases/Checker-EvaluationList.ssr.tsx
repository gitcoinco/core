import { EvaluationList } from "@/features/checker/components/EvaluationList";
import { mockEvaluations } from "@/mocks/checker";
import { SSRComponent } from "@/types";

const evaluationListSSR: SSRComponent<React.ComponentProps<typeof EvaluationList>> = {
  component: EvaluationList,
  cases: [
    {
      label: "Default",
      props: {
        evaluations: mockEvaluations,
      },
    },
  ],
};

export default evaluationListSSR;
