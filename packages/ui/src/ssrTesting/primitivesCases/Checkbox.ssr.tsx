import { SSRComponent } from "@gitcoin/types";

import { Checkbox } from "@/primitives/Checkbox/Checkbox";

const checkboxSSR: SSRComponent<React.ComponentProps<typeof Checkbox>> = {
  component: Checkbox,
  cases: [
    {
      label: "Small",
      groupProps: {
        moss: {
          size: "sm",
          color: "moss",
          defaultChecked: true,
        },
        black: {
          size: "sm",
          color: "black",
          defaultChecked: true,
        },
        white: {
          size: "sm",
          color: "white",
          defaultChecked: true,
        },
        purple: {
          size: "sm",
          color: "purple",
          defaultChecked: true,
        },
      },
    },
    {
      label: "Medium",
      groupProps: {
        moss: {
          size: "md",
          color: "moss",
          defaultChecked: true,
        },
        black: {
          size: "md",
          color: "black",
          defaultChecked: true,
        },
        white: {
          size: "md",
          color: "white",
          defaultChecked: true,
        },
        purple: {
          size: "md",
          color: "purple",
          defaultChecked: true,
        },
      },
    },
    {
      label: "Large",
      groupProps: {
        moss: {
          size: "lg",
          color: "moss",
          defaultChecked: true,
        },
        black: {
          size: "lg",
          color: "black",
          defaultChecked: true,
        },
        white: {
          size: "lg",
          color: "white",
          defaultChecked: true,
        },
        purple: {
          size: "lg",
          color: "purple",
          defaultChecked: true,
        },
      },
    },
  ],
};

export default checkboxSSR;
