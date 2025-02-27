import { SSRComponent } from "@gitcoin/types";

import { ConnectButton, ConnectButtonProps } from "@/components/ConnectButton/ConnectButton";

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
