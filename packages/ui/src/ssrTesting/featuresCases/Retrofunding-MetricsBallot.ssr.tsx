import { SSRComponent } from "@gitcoin/types";

import {
  mockAvailableMetrics,
  mockSubmittedBallot,
} from "@/features/retrofunding/components/BallotForm/mocks";

import { MetricsBallotHelper } from "./helperComponents/Retrofunding-MetricsBallotHelper";

const metricsBallotSSR: SSRComponent<React.ComponentProps<typeof MetricsBallotHelper>> = {
  component: MetricsBallotHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        name: "metrics",
        availableMetrics: mockAvailableMetrics,
        maxAllocation: 100,
      },
    },
    {
      label: "Already Voted",
      props: {
        name: "alreadyVoted-metrics",
        availableMetrics: mockAvailableMetrics,
        maxAllocation: 100,
        submittedBallot: mockSubmittedBallot,
      },
    },
  ],
};

export default metricsBallotSSR;
