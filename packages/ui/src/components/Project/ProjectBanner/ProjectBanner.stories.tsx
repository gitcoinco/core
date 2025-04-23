import { Meta, StoryObj } from "@storybook/react";

import { ProjectBanner } from "./ProjectBanner";

const banner = "bafkreigt2makx2ld4jcbmmpnipmxiaq2qn2f54nb3pj254tuljcxyedu3m";
const logo = "bafkreifzwavjfgnauozlt2zhmrf3vhwyo3hl6c4dt4rwgp6gircmaf4t5a";

const meta: Meta<typeof ProjectBanner> = {
  title: "Features/Project/ProjectBanner",
  component: ProjectBanner,
  argTypes: {
    avatarPosition: {
      options: ["center", "left", "right"],
      control: "select",
      description: "Position of the avatar on the banner",
    },
    bannerImg: {
      control: "text",
      description: "CID for the banner image",
    },
    logoImg: {
      control: "text",
      description: "CID for the avatar image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectBanner>;

export const CenteredAvatar: Story = {
  args: {
    bannerImg: banner,
    logoImg: logo,
    avatarPosition: "center",
  },
};

export const LeftAvatar: Story = {
  args: {
    bannerImg: banner,
    logoImg: logo,
    avatarPosition: "left",
  },
};

export const RightAvatar: Story = {
  args: {
    bannerImg: banner,
    logoImg: logo,
    avatarPosition: "right",
  },
};
