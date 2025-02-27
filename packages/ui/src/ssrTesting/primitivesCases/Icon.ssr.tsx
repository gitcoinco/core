import { Icon } from "@/primitives/Icon/Icon";
import { SSRComponent } from "@/types";

const iconSSR: SSRComponent<React.ComponentProps<typeof Icon>> = {
  component: Icon,
  cases: [
    {
      label: "Default",
      props: {
        type: "check",
      },
    },
    {
      label: "WithThemeColor",
      props: {
        type: "check",
        className: "fill-grey-500",
      },
    },
    {
      label: "WithCustomColor",
      props: {
        type: "check",
        className: "fill-[#ff00ff]",
      },
    },
    {
      label: "WithCustomSize",
      props: {
        type: "check",
        className: "size-[40px]",
      },
    },
  ],
};

export default iconSSR;
