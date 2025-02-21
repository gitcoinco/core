import { SSRComponent } from "@/ssrTesting/types";

import { StatCard } from "./StatCard";

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
