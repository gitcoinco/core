import { NavbarGeneric } from "@/components/Navbar/components/NavbarGeneric";
import { DefaultContent } from "@/components/Navbar/components/mocks";
import { SSRComponent } from "@/types";

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
