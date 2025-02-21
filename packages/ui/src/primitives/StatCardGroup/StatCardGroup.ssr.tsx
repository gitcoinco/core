import { SSRComponent } from "@/ssrTesting/types";

import { StatCardGroup } from "./StatCardGroup";

const statCardGroupSSR: SSRComponent<React.ComponentProps<typeof StatCardGroup>> = {
  component: StatCardGroup,
  cases: [
    {
      label: "Default",
      props: {
        stats: [
          { label: "Application approved", value: "10" },
          { label: "Application rejected", value: "10" },
        ],
      },
    },
  ],
};

export default statCardGroupSSR;
