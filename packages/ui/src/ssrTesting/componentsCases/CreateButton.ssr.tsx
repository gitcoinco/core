import { CreateButton } from "@/components/CreateButton/CreateButton";
import { SSRComponent } from "@/types";

const createButtonSSR: SSRComponent<React.ComponentProps<typeof CreateButton>> = {
  component: CreateButton,
  cases: [
    {
      label: "Round",
      props: {
        variant: "round",
        children: "Create new round",
      },
    },
    {
      label: "Program",
      props: {
        variant: "program",
        children: "Create new program",
      },
    },
  ],
};

export default createButtonSSR;
