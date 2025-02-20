import { SSRComponent } from "@/ssrTesting/types";

import { Button } from "./Button";

const onClick = () => alert("Button clicked!");

const buttonSSR: SSRComponent<React.ComponentProps<typeof Button>> = {
  component: Button,
  cases: [
    {
      label: "Default",
      props: Object.entries({
        default: {
          value: "Click Me",
          onClick,
        },
        primary: {
          variant: "primary",
          value: "Primary",
          onClick,
        },
        secondary: {
          variant: "secondary",
          value: "Secondary",
          onClick,
        },
        grey: {
          variant: "grey",
          value: "Grey",
          onClick,
        },
        subtle: {
          variant: "subtle",
          value: "Subtle",
          onClick,
        },
        error: {
          variant: "error",
          value: "Error",
          onClick,
        },
        success: {
          variant: "success",
          value: "Success",
          onClick,
        },
        "light-purple": {
          variant: "light-purple",
          value: "Light Purple",
          onClick,
        },
        "light-green": {
          variant: "light-green",
          value: "Light Green",
          onClick,
        },
        disabled: {
          variant: "disabled",
          value: "Disabled",
          disabled: true,
          onClick,
        },
      }),
    },
  ],
};

export default buttonSSR;
