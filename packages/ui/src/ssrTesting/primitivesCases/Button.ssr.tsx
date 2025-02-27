import { Button } from "@/primitives/Button/Button";
import { SSRComponent } from "@/types";

const onClick = (label: string) => {
  console.log("clicked", label);
};
const buttonSSR: SSRComponent<React.ComponentProps<typeof Button>> = {
  component: Button,
  isClient: true,
  cases: [
    {
      label: "Default",
      groupProps: {
        default: {
          value: "Click Me",
          onClick: () => onClick("Default"),
        },
        primary: {
          variant: "primary",
          value: "Primary",
          onClick: () => onClick("Primary"),
        },
        secondary: {
          variant: "secondary",
          value: "Secondary",
          onClick: () => onClick("Secondary"),
        },
        grey: {
          variant: "grey",
          value: "Grey",
          onClick: () => onClick("Grey"),
        },
        subtle: {
          variant: "subtle",
          value: "Subtle",
          onClick: () => onClick("Subtle"),
        },
        error: {
          variant: "error",
          value: "Error",
          onClick: () => onClick("Error"),
        },
        success: {
          variant: "success",
          value: "Success",
          onClick: () => onClick("Success"),
        },
        "light-purple": {
          variant: "light-purple",
          value: "Light Purple",
          onClick: () => onClick("Light Purple"),
        },
        "light-green": {
          variant: "light-green",
          value: "Light Green",
          onClick: () => onClick("Light Green"),
        },
        disabled: {
          variant: "disabled",
          value: "Disabled",
          onClick: () => onClick("Disabled"),
          disabled: true,
        },
      },
    },
  ],
};

export default buttonSSR;
