import { SSRComponent } from "@/types";

import { Typography } from "./Typography";

const typographySSR: SSRComponent<React.ComponentProps<typeof Typography>> = {
  component: Typography,
  cases: [
    {
      label: "Default",
      props: {
        children: "Default",
      },
    },
    {
      label: "Font Sans",
      props: {
        children: "Sans",
        font: "sans",
      },
    },
    {
      label: "Font Mono",
      props: {
        children: "Mono",
        font: "mono",
      },
    },
  ],
};

export default typographySSR;
