import { Skeleton } from "@/primitives/Skeleton/Skeleton";
import { SSRComponent } from "@/types";

const skeletonSSR: SSRComponent<React.ComponentProps<typeof Skeleton>> = {
  component: Skeleton,
  cases: [
    {
      label: "Default",
      props: { className: "w-10 h-10" },
    },
  ],
};

export default skeletonSSR;
