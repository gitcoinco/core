import { SSRComponent } from "@gitcoin/types";

import { Input } from "@/primitives/Input/Input";

const inputSSR: SSRComponent<React.ComponentProps<typeof Input>> = {
  component: Input,
  cases: [
    {
      label: "Default",
      props: {
        type: "text",
      },
    },
    {
      label: "Disabled",
      props: {
        type: "text",
        disabled: true,
      },
    },
    {
      label: "WithClassName",
      props: {
        type: "text",
        className: "bg-red-500",
      },
    },
    {
      label: "WithPlaceholder",
      props: {
        type: "text",
        placeholder: "Enter your name",
      },
    },
    {
      label: "WithValue",
      props: {
        type: "text",
        value: "John Doe",
      },
    },
  ],
};

export default inputSSR;
