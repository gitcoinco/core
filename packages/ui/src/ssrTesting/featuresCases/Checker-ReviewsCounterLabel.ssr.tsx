import { ReviewsCounterLabelWithTooltip } from "@/features/checker/components/ReviewsCounterLabel";
import { SSRComponent } from "@/types";

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
