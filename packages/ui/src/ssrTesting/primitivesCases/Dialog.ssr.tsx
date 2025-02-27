import { DialogTest } from "@/ssrTesting/primitivesCases/Dialog.ssr.helper";
import { SSRComponent } from "@/types";

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
