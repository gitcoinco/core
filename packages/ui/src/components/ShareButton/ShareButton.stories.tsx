import { Meta, StoryObj } from "@storybook/react";

import { ShareButton } from "./ShareButton";

const meta: Meta<typeof ShareButton> = {
  title: "Components/ShareButton",
  component: ShareButton,
};

export default meta;

type Story = StoryObj<typeof ShareButton>;

const Default: Story = {
  render: () => <ShareButton shareText="Hello, world!" />,
};

export { Default };
