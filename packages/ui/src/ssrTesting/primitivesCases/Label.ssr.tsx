import { Label } from "@/primitives/Label/Label";
import { SSRComponent } from "@/types";

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
