import { PoolTypeBadge } from "@/features/pool/components/PoolTypeBadge";
import { PoolType, SSRComponent } from "@/types";

const poolTypeBadgeSSR: SSRComponent<React.ComponentProps<typeof PoolTypeBadge>> = {
  component: PoolTypeBadge,
  cases: [
    {
      label: "QuadraticFunding",
      props: {
        value: PoolType.QuadraticFunding,
      },
    },
    {
      label: "DirectGrants",
      props: {
        value: PoolType.DirectGrants,
      },
    },
    {
      label: "Retrofunding",
      props: {
        value: PoolType.Retrofunding,
      },
    },
    {
      label: "Undefined",
      props: {
        value: undefined,
      },
    },
  ],
};

export default poolTypeBadgeSSR;
