import { TextArea } from "@/primitives/TextArea/TextArea";
import { SSRComponent } from "@/types";

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
