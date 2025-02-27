import { IconWithTooltip } from "@/components/IconWithTooltip/IconWithTooltip";
import { IconType } from "@/primitives/Icon";
import { SSRComponent } from "@/types";

const iconWithTooltipSSR: SSRComponent<React.ComponentProps<typeof IconWithTooltip>> = {
  component: IconWithTooltip,
  cases: [
    {
      label: "Default",
      props: {
        iconType: IconType.ETH,
        tooltipText: "This is ETH icon",
      },
    },
  ],
};

export default iconWithTooltipSSR;
