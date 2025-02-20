import { SSRComponent } from "@/ssrTesting/types";

import { Accordion, AccordionProps } from "./Accordion";

const accordionSSR: SSRComponent<AccordionProps> = {
  component: Accordion,
  cases: [
    {
      label: "Default",
      props: Object.entries({
        default: {
          header: "Simple Header",
          content: "Simple Content",
          variant: "default",
        },
        light: {
          header: "Simple Header",
          content: "Simple Content",
          variant: "light",
          border: "md",
          paddingX: "xl",
        },
        blue: {
          header: "Simple Header",
          content: "Simple Content",
          variant: "blue",
          border: "md",
          paddingX: "xl",
        },
      }),
    },
  ],
};

export default accordionSSR;
