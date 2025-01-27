import type { Meta, StoryObj } from "@storybook/react";

import { IconLabel } from "@/components/IconLabel";

import { IconType } from "../Icon";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Primitives/Accordion",
  component: Accordion,
  argTypes: {
    variant: {
      options: ["default", "light", "blue"],
      control: "select",
      description: "Style variant of the accordion",
    },
    border: {
      options: ["none", "sm", "md"],
      control: "select",
      description: "Border style of the accordion",
    },
    paddingX: {
      options: ["none", "sm", "md", "lg"],
      control: "select",
      description: "Padding style of the accordion",
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the accordion is open or closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    header: "Simple Header",
    content: "Simple Content",
    variant: "default",
  },
};

export const Light: Story = {
  args: {
    header: "Simple Header",
    content: "Simple Content",
    variant: "light",
    border: "md",
    paddingX: "xl",
    isOpen: false,
  },
};

export const Blue: Story = {
  args: {
    header: "Simple Header",
    content: "Simple Content",
    variant: "blue",
    border: "md",
    paddingX: "xl",
    isOpen: true,
  },
};

export const coolProject: Story = {
  args: {
    header: (
      <IconLabel
        type="default"
        label="Cool Project"
        iconType={IconType.GLOBE}
        iconVariant="text-lg font-medium"
      />
    ),
    content: (
      <div className="flex flex-col gap-4">
        <span className="font-ui-sans text-[16px]/[24px] font-normal">
          An onchain project that is very cool. Did I mention that it was cool?
        </span>
        <div className="flex flex-wrap items-start gap-10">
          <div className="flex flex-col gap-4">
            <IconLabel type="address" ens="coolproject.eth" />
            <IconLabel type="social" platform="website" link={"https://twitter.com/user"} />
            <IconLabel
              type="social"
              platform="twitter"
              link={"https://twitter.com/useruser"}
              isVerified={true}
            />
            <IconLabel
              type="social"
              platform="github"
              link={"https://twitter.com/user"}
              isVerified={true}
            />
          </div>
          <div className="flex flex-col gap-4">
            <IconLabel
              type="dateWithPrefix"
              prefix="Applied on:"
              date={new Date("2024-12-10T08:25:41.371Z")}
            />
            <IconLabel type="social" platform="github" link={"https://twitter.com/user"} />
          </div>
        </div>
      </div>
    ),
    variant: "default",
    border: "sm",
    paddingX: "sm",
    isOpen: false,
  },
};
