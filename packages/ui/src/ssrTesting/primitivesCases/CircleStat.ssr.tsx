import { CircleStat } from "@/primitives/CircleStat/CircleStat";
import { SSRComponent } from "@/types";

const circleStatSSR: SSRComponent<React.ComponentProps<typeof CircleStat>> = {
  component: CircleStat,
  cases: [
    {
      label: "Default",
      props: {
        value: 50,
      },
    },
    {
      label: "LowPercentage",
      props: {
        value: 23,
      },
    },
    {
      label: "MidPercentage",
      props: {
        value: 54,
      },
    },
    {
      label: "HighPercentage",
      props: {
        value: 60,
      },
    },
    {
      label: "CustomColor",
      groupProps: {
        23: {
          className: "text-white",
          colors: {
            low: "#666666",
            mid: "#444444",
            high: "#000000",
          },
          value: 23,
        },
        54: {
          className: "text-white",
          colors: {
            low: "#666666",
            mid: "#444444",
            high: "#000000",
          },
          value: 54,
        },
        85: {
          className: "text-white",
          colors: {
            low: "#666666",
            mid: "#444444",
            high: "#000000",
          },
          value: 85,
        },
      },
    },
  ],
};

export default circleStatSSR;
