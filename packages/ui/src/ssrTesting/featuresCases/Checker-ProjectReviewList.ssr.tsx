import { ProjectReviewList } from "@/features/checker/components/ProjectReviewList";
import { mockPendingReview0, mockReadyToSubmit0 } from "@/mocks/checker";
import { SSRComponent } from "@/types";

const projectReviewListSSR: SSRComponent<React.ComponentProps<typeof ProjectReviewList>> = {
  component: ProjectReviewList,
  isClient: true,
  cases: [
    {
      label: "Ready to submit",
      props: {
        reviewer: "0x1234567890123456789012345678901234567890",
        projects: mockReadyToSubmit0,
      },
    },
    {
      label: "Pending review",
      props: {
        reviewer: "0x1234567890123456789012345678901234567890",
        projects: mockPendingReview0,
      },
    },
  ],
};

export default projectReviewListSSR;
