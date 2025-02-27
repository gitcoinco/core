import { Switch } from "@/primitives/Switch/Switch";
import { SSRComponent } from "@/types";

const switchSSR: SSRComponent<React.ComponentProps<typeof Switch>> = {
  component: Switch,
  cases: [
    {
      label: "Default",
      props: {
        color: "moss",
      },
    },
    {
      label: "Default Checked",
      props: {
        color: "moss",
        defaultChecked: true,
      },
    },
    {
      label: "Disabled",
      props: {
        color: "moss",
        disabled: true,
      },
    },
  ],
};

export default switchSSR;
