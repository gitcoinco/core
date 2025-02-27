import { SSRComponent } from "@gitcoin/types";

import { PoolCard } from "@/features/pool/components/PoolCard";
import { mockPools } from "@/features/pool/components/PoolCardGroup/mocks";

const poolCardSSR: SSRComponent<React.ComponentProps<typeof PoolCard>> = {
  component: PoolCard,
  cases: [
    {
      label: "Default",
      props: {
        ...mockPools[0],
      },
    },
  ],
};

export default poolCardSSR;
