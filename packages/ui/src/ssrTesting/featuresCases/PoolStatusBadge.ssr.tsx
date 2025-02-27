import { PoolStatusBadge } from "@/features/pool/components/PoolStatusBadge";
import { PoolStatus, SSRComponent } from "@/types";

const poolStatusBadgeSSR: SSRComponent<React.ComponentProps<typeof PoolStatusBadge>> = {
  component: PoolStatusBadge,
  cases: [
    {
      label: "Pre Round",
      props: {
        value: PoolStatus.PreRound,
      },
    },
    {
      label: "Round In Progress",
      props: {
        value: PoolStatus.RoundInProgress,
      },
    },
    {
      label: "Applications In Progress",
      props: {
        value: PoolStatus.ApplicationsInProgress,
      },
    },
    {
      label: "Funding Pending",
      props: {
        value: PoolStatus.FundingPending,
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

export default poolStatusBadgeSSR;
