import { RadioGroupList } from "@/components/RadioGroupList/RadioGroupList";
import { radioGroups, radioGroupsWithDisabledOptions } from "@/components/RadioGroupList/mocks";
import { SSRComponent } from "@/types";

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
