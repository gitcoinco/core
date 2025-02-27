import { SSRComponent } from "@gitcoin/types";

import { Select, SelectProps } from "@/primitives/Select";

const defaultProps: SelectProps = {
  options: [
    {
      items: [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Carrot", value: "carrot" },
        { label: "Lettuce", value: "lettuce" },
      ],
    },
  ],
  placeholder: "Select",
  variant: "default",
  size: "md",
};

const selectSSR: SSRComponent<React.ComponentProps<typeof Select>> = {
  component: Select,
  cases: [
    {
      label: "Default",
      props: { ...defaultProps },
    },
    {
      label: "Outlined",
      props: { ...defaultProps, variant: "outlined", defaultValue: "apple" },
    },
    {
      label: "Filled",
      props: { ...defaultProps, variant: "filled", defaultValue: "apple" },
    },
    {
      label: "Small",
      props: {
        ...defaultProps,
        size: "sm",
        disabled: true,
        variant: "default",
        defaultValue: "apple",
      },
    },
    {
      label: "Medium",
      props: {
        ...defaultProps,
        size: "md",
        variant: "default",
        defaultValue: "apple",
      },
    },
  ],
};

export default selectSSR;
