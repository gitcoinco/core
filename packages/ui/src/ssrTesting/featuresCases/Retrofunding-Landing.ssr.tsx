import { ConnectButton } from "@/components/ConnectButton/ConnectButton";
import { LandingPage } from "@/features/retrofunding/components/Landing";
import { SSRComponent } from "@/types";

const landingSSR: SSRComponent<React.ComponentProps<typeof LandingPage>> = {
  component: LandingPage,
  cases: [
    {
      label: "Vote",
      props: {
        type: "vote",
        roundName: "Metric here",
        roundDescription:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off",
        children: <ConnectButton type="vote" />,
      },
    },
    {
      label: "Admin",
      props: {
        type: "admin",
        children: <ConnectButton type="admin" />,
      },
    },
  ],
};

export default landingSSR;
