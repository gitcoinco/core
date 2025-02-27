import { SSRComponent } from "@gitcoin/types";

import { CreateButton } from "@/components/CreateButton";

import { ProgramPickerModalHelper } from "./helperComponents/Retrofunding-ProgramPickerModal";

const programPickerModalSSR: SSRComponent<React.ComponentProps<typeof ProgramPickerModalHelper>> = {
  component: ProgramPickerModalHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {},
    },
    {
      label: "With Footer",
      props: {
        footer: <CreateButton variant="round">Create new round</CreateButton>,
      },
    },
  ],
};

export default programPickerModalSSR;
