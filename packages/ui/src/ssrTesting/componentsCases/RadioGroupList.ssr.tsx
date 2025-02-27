import { SSRComponent } from "@gitcoin/types";

import { RadioGroupList } from "@/components/RadioGroupList/RadioGroupList";
import { radioGroups, radioGroupsWithDisabledOptions } from "@/components/RadioGroupList/mocks";

const radioGroupListSSR: SSRComponent<React.ComponentProps<typeof RadioGroupList>> = {
  component: RadioGroupList,
  cases: [
    {
      label: "Default",
      props: {
        groups: radioGroups,
      },
    },
    {
      label: "With Disabled Options",
      props: {
        groups: radioGroupsWithDisabledOptions,
      },
    },
  ],
};

export default radioGroupListSSR;
