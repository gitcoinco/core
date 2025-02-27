import { SSRComponent } from "@gitcoin/types";

import { Breadcrumb } from "@/primitives/Breadcrumb/Breadcrumb";

const breadcrumbSSR: SSRComponent<React.ComponentProps<typeof Breadcrumb>> = {
  component: Breadcrumb,
  cases: [
    {
      label: "Default",
      props: {
        items: [
          { label: "My Programs", href: "#" },
          { label: "Program Details", href: "#" },
          { label: "Round Details", href: "#" },
        ],
      },
    },
  ],
};

export default breadcrumbSSR;
