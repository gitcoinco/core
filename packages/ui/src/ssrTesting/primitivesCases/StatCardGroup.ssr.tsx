import { SSRComponent } from "@gitcoin/types";

import { StatCardGroup } from "@/primitives/StatCardGroup/StatCardGroup";

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
