import { SSRComponent } from "@gitcoin/types";

import { ReviewsCounterLabelWithTooltip } from "@/features/checker/components/ReviewsCounterLabel";

const reviewsCounterLabelSSR: SSRComponent<
  React.ComponentProps<typeof ReviewsCounterLabelWithTooltip>
> = {
  component: ReviewsCounterLabelWithTooltip,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        positiveReviews: 0,
        negativeReviews: 0,
      },
    },
  ],
};

export default reviewsCounterLabelSSR;
