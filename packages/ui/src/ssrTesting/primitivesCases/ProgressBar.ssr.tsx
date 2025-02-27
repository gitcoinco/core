import { ProgressBar } from "@/primitives/ProgressBar/ProgressBar";
import { SSRComponent } from "@/types";

// Fix: needs a width
const ProgressBarComponent = (props: React.ComponentProps<typeof ProgressBar>) => (
  <div className="w-[228px]">
    <ProgressBar {...props} />
  </div>
);

const progressBarSSR: SSRComponent<React.ComponentProps<typeof ProgressBar>> = {
  component: ProgressBarComponent,
  cases: [
    {
      label: "Default",
      props: {
        value: 0,
        variant: "default",
      },
    },
    {
      label: "Partial Progress",
      props: {
        value: 30,
        variant: "default",
      },
    },
    {
      label: "Green Variant",
      props: {
        value: 30,
        variant: "green",
      },
    },
    {
      label: "Green Variant Full Progress",
      props: {
        value: 100,
        variant: "green",
      },
    },
  ],
};

export default progressBarSSR;
