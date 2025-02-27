import { SSRComponent } from "@gitcoin/types";

import { PoolCardGroup } from "@/features/pool/components/PoolCardGroup";
import { mockPools } from "@/features/pool/components/PoolCardGroup/mocks";

const poolCardGroupSSR: SSRComponent<React.ComponentProps<typeof PoolCardGroup>> = {
  component: PoolCardGroup,
  cases: [
    {
      label: "Default",
      props: {
        pools: mockPools,
      },
    },
  ],
};

export default poolCardGroupSSR;
