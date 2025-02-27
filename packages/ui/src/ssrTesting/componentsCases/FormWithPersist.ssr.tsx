import { SSRComponent } from "@gitcoin/types";

import { FormWithPersist } from "@/components/FormWithPersist/FormWithPersist";
import { roundStep } from "@/components/FormWithPersist/mocks";

const formWithPersistSSR: SSRComponent<React.ComponentProps<typeof FormWithPersist>> = {
  component: FormWithPersist,
  cases: [
    {
      label: "Default",
      props: {
        step: roundStep,
        onSubmit: async (values: any) => console.log(values),
        dbName: "round",
        storeName: "round",
      },
    },
  ],
};

export default formWithPersistSSR;
