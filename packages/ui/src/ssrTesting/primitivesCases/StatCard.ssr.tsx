import { SSRComponent } from "@gitcoin/types";

import { StatCard } from "@/primitives/StatCard/StatCard";

const statCardSSR: SSRComponent<React.ComponentProps<typeof StatCard>> = {
  component: StatCard,
  cases: [
    {
      label: "Default",
      props: {
        label: "Applications pending",
        value: "100",
      },
    },
  ],
};

export default statCardSSR;
