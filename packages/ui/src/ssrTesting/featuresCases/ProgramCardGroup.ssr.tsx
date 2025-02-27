import { ProgramCardGroup } from "@/features/program/components/ProgramCardGroup";
import { mockPrograms } from "@/features/program/components/ProgramList/mocks";
import { SSRComponent } from "@/types";

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
