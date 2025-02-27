import { SSRComponent } from "@gitcoin/types";

import { PoolList } from "@/features/pool/components/PoolList";
import { mockPools } from "@/features/pool/components/PoolList/mocks";

const poolListSSR: SSRComponent<React.ComponentProps<typeof PoolList>> = {
  component: PoolList,
  cases: [
    {
      label: "Default",
      props: {
        pools: mockPools,
        title: "Available Pools",
        noPoolsPlaceholder: "No pools found",
      },
    },
    {
      label: "Empty",
      props: {
        pools: [],
        title: "Available Pools",
        noPoolsPlaceholder: "No pools found",
      },
    },
  ],
};

export default poolListSSR;
