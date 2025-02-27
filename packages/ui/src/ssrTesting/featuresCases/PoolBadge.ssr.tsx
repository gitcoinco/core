import { PoolBadge } from "@/features/pool/components/PoolBadge";
import { PoolStatus, PoolType, SSRComponent } from "@/types";

const poolBadgeSSR: SSRComponent<React.ComponentProps<typeof PoolBadge>> = {
  component: PoolBadge,
  cases: [
    {
      label: "Status",
      props: {
        badge: PoolStatus.ApplicationsInProgress,
        type: "poolStatus",
      },
    },
    {
      label: "Type",
      props: {
        badge: PoolType.QuadraticFunding,
        type: "poolType",
      },
    },
  ],
};

export default poolBadgeSSR;
