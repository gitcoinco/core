import { PoolCard } from "@/features/pool/components/PoolCard";
import { mockPools } from "@/features/pool/components/PoolCardGroup/mocks";
import { SSRComponent } from "@/types";

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
