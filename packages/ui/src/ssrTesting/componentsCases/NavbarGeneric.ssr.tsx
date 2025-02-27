import { SSRComponent } from "@gitcoin/types";

import { NavbarGeneric } from "@/components/Navbar/components/NavbarGeneric";
import { DefaultContent } from "@/components/Navbar/components/mocks";

const navbarGenericSSR: SSRComponent<React.ComponentProps<typeof NavbarGeneric>> = {
  component: NavbarGeneric,
  // isClient: true,
  cases: [
    {
      label: "Default",
      props: {
        children: <DefaultContent />,
      },
    },
  ],
};

export default navbarGenericSSR;
