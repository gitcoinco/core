import { SSRComponent } from "@gitcoin/types";

import { mockPendingReview0, mockReadyToSubmit0 } from "@/mocks/checker";

import { ApplicationsSectionHelper } from "./helperComponents/ApplicationsSectionHelper";

const applicationsSectionSSR: SSRComponent<React.ComponentProps<typeof ApplicationsSectionHelper>> =
  {
    component: ApplicationsSectionHelper,
    isClient: true,
    cases: [
      {
        label: "Default",
        props: {
          applications: [...mockPendingReview0, ...mockReadyToSubmit0],
          label: "Applications",
          zeroApplicationsLabel: "No applications",
          isLoading: false,
          isPoolManager: true,
          keepAction: false,
          isReadyToSubmit: false,
          actionLabel: "Submit final evaluation",
        },
      },
      {
        label: "No applications",
        props: {
          applications: [],
          label: "Applications",
          zeroApplicationsLabel: "No applications",
          isLoading: false,
          isPoolManager: true,
          keepAction: false,
          isReadyToSubmit: false,
          actionLabel: "Submit final evaluation",
        },
      },
    ],
  };

export default applicationsSectionSSR;
