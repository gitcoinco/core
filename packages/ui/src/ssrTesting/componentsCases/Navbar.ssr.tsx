import { DefaultLogo } from "@/assets";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/primitives/Button";
import { SSRComponent } from "@/types";

const navbarSSR: SSRComponent<React.ComponentProps<typeof Navbar>> = {
  component: Navbar,
  cases: [
    {
      label: "Default",
      props: {
        primaryLogo: {
          link: "#",
        },
        text: {
          text: "My Navbar",
          link: "#",
        },
      },
    },
    {
      label: "With Secondary Logo",
      props: {
        primaryLogo: {
          link: "#",
        },
        secondaryLogo: {
          img: DefaultLogo,
          link: "#",
        },
        text: {
          text: "My Navbar",
          link: "#",
        },
      },
    },
    {
      label: "With Custom Text And Without Divider",
      props: {
        primaryLogo: {
          link: "#",
        },
        text: {
          text: "My Navbar",
          link: "#",
        },
        showDivider: false,
      },
    },
    {
      label: "With Children",
      props: {
        secondaryLogo: {
          img: DefaultLogo,
          link: "#",
        },
        text: {
          text: "My Navbar",
          link: "#",
        },
        children: <Button value="Connect Wallet" />,
      },
    },
  ],
};

export default navbarSSR;
