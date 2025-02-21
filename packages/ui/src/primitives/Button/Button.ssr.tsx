import { SSRComponent } from "@/ssrTesting/types";

import { Button } from "./Button";

const buttonSSR: SSRComponent<React.ComponentProps<typeof Button>> = {
  component: Button,
  cases: [
    {
      label: "Default",
      groupProps: {
        default: {
          value: "Click Me",
        },
        primary: {
          variant: "primary",
          value: "Primary",
        },
        secondary: {
          variant: "secondary",
          value: "Secondary",
        },
        grey: {
          variant: "grey",
          value: "Grey",
        },
        subtle: {
          variant: "subtle",
          value: "Subtle",
        },
        error: {
          variant: "error",
          value: "Error",
        },
        success: {
          variant: "success",
          value: "Success",
        },
        "light-purple": {
          variant: "light-purple",
          value: "Light Purple",
        },
        "light-green": {
          variant: "light-green",
          value: "Light Green",
        },
        disabled: {
          variant: "disabled",
          value: "Disabled",
          disabled: true,
        },
      },
    },
  ],
};

export default buttonSSR;
