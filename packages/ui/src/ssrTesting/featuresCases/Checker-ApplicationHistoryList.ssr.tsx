import { SSRComponent } from "@gitcoin/types";

import { ApplicationHistoryList } from "@/features/checker/components/ApplicationHistoryList";
import { mockApplications } from "@/mocks/checker";

const applicationHistoryListSSR: SSRComponent<React.ComponentProps<typeof ApplicationHistoryList>> =
  {
    component: ApplicationHistoryList,
    cases: [
      {
        label: "Default",
        props: {
          applications: mockApplications,
        },
      },
    ],
  };

export default applicationHistoryListSSR;
