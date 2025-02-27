import { SSRComponent } from "@gitcoin/types";

import { TextArea } from "@/primitives/TextArea/TextArea";

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
