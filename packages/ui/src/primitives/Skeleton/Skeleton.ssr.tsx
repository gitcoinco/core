import { SSRComponent } from "@/ssrTesting/types";

import { Skeleton } from "./Skeleton";

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
