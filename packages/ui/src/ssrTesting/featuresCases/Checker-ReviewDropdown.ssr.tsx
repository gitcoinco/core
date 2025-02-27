import { ReviewDropdown } from "@/features/checker/components/ReviewDropdown";
import { checkerApplicationEvaluations as mockData } from "@/mocks/mockData/checkerApplicationEvaluations";
import { SSRComponent } from "@/types";

const reviewDropdownSSR: SSRComponent<React.ComponentProps<typeof ReviewDropdown>> = {
  component: ReviewDropdown,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        evaluation: { ...mockData[0] },
        index: 1,
      },
    },
    {
      label: "Rejected",
      props: {
        evaluation: { ...mockData[1] },
        index: 2,
      },
    },
    {
      label: "LlmGpt3",
      props: {
        evaluation: { ...mockData[2] },
        index: 3,
      },
    },
  ],
};

export default reviewDropdownSSR;
