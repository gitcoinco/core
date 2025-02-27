import { ApplicationHistoryList } from "@/features/checker/components/ApplicationHistoryList";
import { mockApplications } from "@/mocks/checker";
import { SSRComponent } from "@/types";

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
