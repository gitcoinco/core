import { SSRComponent } from "@/ssrTesting/types";

import { Spinner } from "./Spinner";

const spinnerSSR: SSRComponent<React.ComponentProps<typeof Spinner>> = {
  component: Spinner,
  cases: [
    {
      label: "Default",
      props: { size: "sm" },
    },
    {
      label: "Medium",
      props: { size: "md" },
    },
    {
      label: "Custom Color",
      props: { size: "md", className: "fill-red-500" },
    },
  ],
};

export default spinnerSSR;
