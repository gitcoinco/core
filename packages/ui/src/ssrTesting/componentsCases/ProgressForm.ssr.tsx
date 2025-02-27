import { SSRComponent } from "@gitcoin/types";

import { ProgressForm } from "@/components/ProgressForm/ProgressForm";
import { roundSetupSteps } from "@/components/ProgressForm/mocks/RoundSetup";

import { LastStepFormSummary } from "./helperComponents/ProgressFormHelper";

const progressFormSSR: SSRComponent<React.ComponentProps<typeof ProgressForm>> = {
  component: ProgressForm,
  isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        name: "Round setup",
        steps: roundSetupSteps,
        onSubmit: async (values: any) => console.log(values),
        dbName: "formDB",
        storeName: "formDrafts",
        stepsPersistKey: "roundSetup",
        lastStepFormSummary: LastStepFormSummary,
      },
    },
  ],
};

export default progressFormSSR;
