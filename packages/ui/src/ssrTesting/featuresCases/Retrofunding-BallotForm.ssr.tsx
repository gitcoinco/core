import {
  mockAvailableMetrics,
  mockSubmittedBallot,
} from "@/features/retrofunding/components/BallotForm/mocks";
import { SSRComponent } from "@/types";

import { BallotFormHelper } from "./helperComponents/Retrofunding-BallotForm";

const props = {
  name: "metrics",
  availableMetrics: mockAvailableMetrics,
  maxAllocation: 100,
};

const ballotFormSSR: SSRComponent<React.ComponentProps<typeof BallotFormHelper>> = {
  component: BallotFormHelper,
  cases: [
    {
      label: "Default",
      props,
    },
    {
      label: "Metric Added",
      props: {
        ...props,
        name: "alreadyVoted-metrics",
        submittedBallot: mockSubmittedBallot,
      },
    },
  ],
};

export default ballotFormSSR;
