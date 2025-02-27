import { mockData } from "@/features/retrofunding/components/Leaderboard/mocks";
import { SSRComponent } from "@/types";

import { LeaderboardHelper } from "./helperComponents/Retrofunding-LeaderBoardHelper";

const leaderboardSSR: SSRComponent<React.ComponentProps<typeof LeaderboardHelper>> = {
  component: LeaderboardHelper,
  cases: [
    {
      label: "Single metric",
      props: {
        projects: Object.fromEntries(
          Object.entries(mockData.projects).map(([key, value]) => [
            key,
            {
              project: value.project,
              metrics: { votes: value.metrics.votes },
            },
          ]),
        ),
        metrics: {
          votes: mockData.metrics.votes,
        },
      },
    },
    {
      label: "FourMetrics",
      props: {
        projects: mockData.projects,
        metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 4)),
      },
    },
    {
      label: "All",
      props: {
        projects: mockData.projects,
        metrics: mockData.metrics,
      },
    },
  ],
};

export default leaderboardSSR;
