import { SSRComponent } from "@gitcoin/types";

import { ReviewDropdownList } from "@/features/checker/components/ReviewDropdownList";
import { checkerApplicationEvaluations } from "@/mocks/mockData/checkerApplicationEvaluations";

const reviewDropdownListSSR: SSRComponent<React.ComponentProps<typeof ReviewDropdownList>> = {
  component: ReviewDropdownList,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        evaluations: checkerApplicationEvaluations,
      },
    },
  ],
};

export default reviewDropdownListSSR;
