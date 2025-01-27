import type { Meta, StoryObj } from "@storybook/react";

import { Icon, IconType } from "../Icon";
import { VerticalTabs } from "./VerticalTabs";

const tabs = [
  {
    tabTitle: "Applications",
    tabSubtitle: "Review and approve applications",
    tabIcon: <Icon type={IconType.DOCUMENT_DUPLICATE} />,
    tabKey: "applications",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Applications</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
  {
    tabTitle: "Voters",
    tabSubtitle: "Configure voter settings",
    tabIcon: <Icon type={IconType.USERS} />,
    tabKey: "signup",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Voters</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
  {
    tabTitle: "Custom",
    tabSubtitle: "Example without icon",
    tabKey: "custom",
    tabContent: (
      <div className="inline-flex h-60 flex-col justify-start gap-6 rounded-3xl bg-[#f7f7f7] p-6">
        <div className="text-2xl font-medium leading-loose text-black">Custom</div>
        <div className="text-base font-normal leading-7 text-grey-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    ),
  },
];

const meta = {
  title: "Primitives/VerticalTabs",
  component: VerticalTabs,
  args: {
    tabs,
  },
  argTypes: {
    withIcons: {
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    listClassName: {
      control: {
        type: "text",
        defaultValue: "",
      },
    },
  },
} satisfies Meta<typeof VerticalTabs>;

export default meta;

type Story = StoryObj<typeof VerticalTabs>;

export const Default: Story = {
  args: {
    tabs,
    withIcons: false,
  },
};

export const WithIcons: Story = {
  args: {
    tabs,
    withIcons: true,
  },
};

export const WithCustomListWidth: Story = {
  args: {
    tabs,
    withIcons: true,
    listClassName: "w-[302px]",
  },
};

export const WithCustomContentWidth: Story = {
  args: {
    tabs,
    withIcons: true,
    contentClassName: "mt-3",
  },
};
