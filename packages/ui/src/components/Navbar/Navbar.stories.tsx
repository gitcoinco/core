import type { Meta, StoryObj } from "@storybook/react";

import { DefaultLogo } from "@/assets";
import { CheckerIcon } from "@/assets/icons";
import { Button } from "@/primitives/Button";

import { Navbar } from "./Navbar";

// Adjust the path as needed

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  args: {
    text: {
      text: "My Navbar",
    },
  },
  argTypes: {
    primaryLogo: {
      control: "object",
    },
    secondaryLogo: {
      control: "object",
    },
    showDivider: {
      control: "boolean",
    },
    text: {
      control: "object",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    primaryLogo: {
      link: "#",
    },
    text: {
      text: "My Navbar",
      link: "#",
    },
  },
};

export const WithSecondaryLogo: Story = {
  args: {
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
};

export const WithCustomTextAndWithoutDivider: Story = {
  args: {
    primaryLogo: {
      link: "#",
    },
    text: {
      text: "Custom Navbar",
      link: "#",
    },
    showDivider: false,
  },
};

export const WithChildren: Story = {
  args: {
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
};

export const WithCustomSizeAndColor: Story = {
  args: {
    primaryLogo: {
      img: DefaultLogo,
      link: "#",
      size: "h-16 w-16",
      color: "blue-500",
    },
    secondaryLogo: {
      img: CheckerIcon,
      link: "#",
      size: "w-8",
      color: "#d30000",
    },
    text: {
      text: "Custom Size and Color Navbar",
      link: "#",
      className: "text-xl text-purple-700",
    },
  },
};
