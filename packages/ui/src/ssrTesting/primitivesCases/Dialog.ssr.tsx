import { SSRComponent } from "@gitcoin/types";

import { DialogTest } from "@/ssrTesting/primitivesCases/Dialog.ssr.helper";

const dialogSSR: SSRComponent<React.ComponentProps<typeof DialogTest>> = {
  component: DialogTest,
  cases: [
    {
      label: "Default",
      props: {},
    },
  ],
};

export default dialogSSR;
