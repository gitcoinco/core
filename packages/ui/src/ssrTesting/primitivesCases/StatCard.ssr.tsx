import { StatCard } from "@/primitives/StatCard/StatCard";
import { SSRComponent } from "@/types";

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
