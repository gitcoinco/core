import { SSRComponent } from "@gitcoin/types";

import { ProgramCardGroup } from "@/features/program/components/ProgramCardGroup";
import { mockPrograms } from "@/features/program/components/ProgramList/mocks";

const programCardGroupSSR: SSRComponent<React.ComponentProps<typeof ProgramCardGroup>> = {
  component: ProgramCardGroup,
  cases: [
    {
      label: "Default",
      props: {
        programs: mockPrograms,
      },
    },
  ],
};

export default programCardGroupSSR;
