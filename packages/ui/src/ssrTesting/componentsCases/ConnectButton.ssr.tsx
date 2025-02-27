import { ConnectButton, ConnectButtonProps } from "@/components/ConnectButton/ConnectButton";
import { SSRComponent } from "@/types";

const connectButtonSSR: SSRComponent<ConnectButtonProps> = {
  component: ConnectButton,
  cases: [
    {
      label: "Vote",
      props: {
        type: "vote",
      },
    },
    {
      label: "Admin",
      props: {
        type: "admin",
      },
    },
  ],
};

export default connectButtonSSR;
