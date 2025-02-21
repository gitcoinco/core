import { SSRComponent } from "@/types";

import { Label } from "./Label";

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
