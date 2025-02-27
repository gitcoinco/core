import { SSRComponent } from "@/types";

import { ProgramCardHelper } from "./helperComponents/ProgramCardHelper";

const programCardSSR: SSRComponent<React.ComponentProps<typeof ProgramCardHelper>> = {
  component: ProgramCardHelper,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        caseType: "default",
      },
    },
    {
      label: "Query Result Loading",
      props: {
        caseType: "loading",
      },
    },
    {
      label: "Query Result Success",
      props: {
        caseType: "success",
      },
    },
    {
      label: "Query Result Error",
      props: {
        caseType: "error",
      },
    },
  ],
};

export default programCardSSR;
