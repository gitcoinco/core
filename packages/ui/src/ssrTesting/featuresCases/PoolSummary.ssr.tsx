import { PoolSummary, PoolSummaryProps } from "@/features/pool/components/PoolSummary";
import { PoolType, SSRComponent } from "@/types";

const defaultProps: PoolSummaryProps = {
  chainId: 1,
  programId: "1",
  name: "Beta Round",
  poolId: "1",
  strategyName: PoolType.QuadraticFunding,
  applicationsStartTime: "2024-12-09T19:22:56.413Z",
  applicationsEndTime: "2024-12-10T19:23:30.678Z",
  donationsStartTime: "2024-12-09T19:22:56.413Z",
  donationsEndTime: "2024-12-09T19:22:56.413Z",
};

const poolSummarySSR: SSRComponent<React.ComponentProps<typeof PoolSummary>> = {
  component: PoolSummary,
  cases: [
    {
      label: "QuadraticFunding",
      props: {
        ...defaultProps,
      },
    },
    {
      label: "Retrofunding",
      props: {
        ...defaultProps,
        strategyName: PoolType.Retrofunding,
      },
    },
  ],
};

export default poolSummarySSR;
