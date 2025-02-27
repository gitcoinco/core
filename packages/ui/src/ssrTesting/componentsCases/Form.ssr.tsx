import { Form } from "@/components/Form/Form";
import { roundStep } from "@/components/Form/mocks";
import { SSRComponent } from "@/types";

const formSSR: SSRComponent<React.ComponentProps<typeof Form>> = {
  component: Form,
  isClient: true,
  isFullNext: false,
  tooltipMessage: "document error, use dynamic",
  cases: [
    {
      label: "Default",
      props: {
        step: roundStep,
        onSubmit: async (values: any) => console.log(values),
      },
    },
  ],
};

export default formSSR;
