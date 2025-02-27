import { ProgramList } from "@/features/program/components/ProgramList";
import { mockPrograms } from "@/features/program/components/ProgramList/mocks";
import { PoolType, SSRComponent } from "@/types";

const programListSSR: SSRComponent<React.ComponentProps<typeof ProgramList>> = {
  component: ProgramList,
  cases: [
    {
      label: "Default",
      props: {
        programs: mockPrograms,
        title: "Available Programs",
        noProgramsPlaceholder: "No programs found",
      },
    },
    {
      label: "Empty",
      props: {
        programs: [],
        title: "Available Programs",
        noProgramsPlaceholder: "No programs found",
      },
    },
  ],
};

export default programListSSR;
