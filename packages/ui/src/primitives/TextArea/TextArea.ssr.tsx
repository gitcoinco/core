import { SSRComponent } from "@/ssrTesting/types";

import { TextArea } from "./TextArea";

const textAreaSSR: SSRComponent<React.ComponentProps<typeof TextArea>> = {
  component: TextArea,
  cases: [
    {
      label: "Default",
      props: {
        placeholder: "Enter your text here...",
      },
    },
    {
      label: "Disabled",
      props: {
        placeholder: "This textarea is disabled.",
        disabled: true,
      },
    },
  ],
};

export default textAreaSSR;
