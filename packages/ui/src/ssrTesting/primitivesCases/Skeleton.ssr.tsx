import { SSRComponent } from "@gitcoin/types";

import { Skeleton } from "@/primitives/Skeleton/Skeleton";

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
