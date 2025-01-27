import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { ConnectButton } from "@/components/ConnectButton/ConnectButton";

import { LandingPage } from "./LandingPage";

const meta: Meta<typeof LandingPage> = {
  title: "Features/RetroFunding/Components/Landing",
  component: LandingPage,
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof LandingPage>;

const onConnectWallet = action("onConnectWallet");

const handleConnect = () => {
  onConnectWallet("onConnectWallet");
};

export const VoteLanding: Story = {
  args: {
    type: "vote",
    roundName: "Cool retro round",
    roundDescription:
      "Lorem ipsum dolor sit amet consectetur. Non laoreet nulla blandit at integer. Consectetur adipiscing magna sollicitudin arcu elementum nunc. Elit fermentum.",
    actionButton: <ConnectButton type="vote" onClick={handleConnect} />,
  },
};

export const AdminLanding: Story = {
  args: {
    type: "admin",
    actionButton: <ConnectButton type="admin" onClick={handleConnect} />,
  },
};
