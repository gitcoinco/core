import { ProgressStatus, SSRComponent } from "@/types";

import { ProgressModalHelper } from "./helperComponents/ProgressModalHelper";

const progressModalSSR: SSRComponent<React.ComponentProps<typeof ProgressModalHelper>> = {
  component: ProgressModalHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        heading: "Processing Your Request",
        subheading: "Please hold while we record your results onchain.",
        steps: [
          {
            name: "INITIALIZED",
            description: "Preparing the necessary resources.",
            status: ProgressStatus.IS_SUCCESS,
          },
          {
            name: "STORING",
            description: "The storing operation is currently in progress.",
            status: ProgressStatus.IN_PROGRESS,
          },
          {
            name: "PROCESS",
            description: "The operation will start soon.",
            status: ProgressStatus.NOT_STARTED,
          },
          {
            name: "FINALIZE",
            description: "Wrapping up the last steps.",
            status: ProgressStatus.NOT_STARTED,
          },
        ],
      },
    },
  ],
};

export default progressModalSSR;
