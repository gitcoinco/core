import { SideNav } from "@/components/SideNav/SideNav";
import { sampleItems } from "@/components/SideNav/mocks";
import { SSRComponent } from "@/types";

const sideNavSSR: SSRComponent<React.ComponentProps<typeof SideNav>> = {
  component: SideNav,
  cases: [
    {
      label: "Default",
      props: {
        items: sampleItems,
      },
    },
    {
      label: "Empty",
      props: {
        items: [],
      },
    },
  ],
};

export default sideNavSSR;
