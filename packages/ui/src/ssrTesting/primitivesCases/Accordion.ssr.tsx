import { SSRComponent } from "@gitcoin/types";

import { Accordion, AccordionProps } from "@/primitives/Accordion";

const accordionSSR: SSRComponent<AccordionProps> = {
  component: Accordion,
  cases: [
    {
      label: "Default",
      props: {
        header: "Simple Header",
        content: "Simple Content",
        variant: "default",
      },
    },
    {
      label: "Light",
      props: {
        header: "Simple Header",
        content: "Simple Content",
        variant: "light",
        border: "md",
        paddingX: "xl",
      },
    },
    {
      label: "Blue",
      props: {
        header: "Simple Header",
        content: "Simple Content",
        variant: "blue",
        border: "md",
        paddingX: "xl",
      },
    },
  ],
};

export default accordionSSR;
