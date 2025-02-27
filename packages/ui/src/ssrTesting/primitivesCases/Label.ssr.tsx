import { SSRComponent } from "@gitcoin/types";

import { Label } from "@/primitives/Label/Label";

const labelSSR: SSRComponent<React.ComponentProps<typeof Label>> = {
  component: Label,
  cases: [
    {
      label: "Default",
      props: {
        children: "Default",
      },
    },
  ],
};

export default labelSSR;
