import { SSRComponent } from "@/types";

import { MetricCardHelper } from "./helperComponents/Retrofunding-MetricCardHelper";

const metricCardSSR: SSRComponent<React.ComponentProps<typeof MetricCardHelper>> = {
  component: MetricCardHelper,
  cases: [
    {
      label: "Metric",
      props: {
        title: "Metric here",
        identifier: "metric-1",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off",
        variant: "metric",
      },
    },
    {
      label: "Metric Added",
      props: {
        title: "Metric here",
        identifier: "metric-1",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off",
        variant: "metric",
        isAdded: true,
      },
    },
    {
      label: "Ballot",
      props: {
        title: "Ballot here",
        identifier: "ballot-1",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off",
        variant: "ballot",
      },
    },
    {
      label: "Ballot Added",
      props: {
        title: "Ballot here",
        identifier: "ballot-1",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off",
        variant: "ballot",
        isAdded: true,
      },
    },
  ],
};

export default metricCardSSR;
