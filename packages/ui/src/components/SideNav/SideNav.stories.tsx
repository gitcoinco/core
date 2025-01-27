import { useState } from "react";

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { SideNav, SideNavProps } from "@/components/SideNav";

const handleClick = action("handleClick");

// Wrapper component to handle state
function SideNavWrapper(props: SideNavProps) {
  const [activeId, setActiveId] = useState<string | undefined>(props.activeId);
  const handleClick = (id: string | undefined) => {
    console.log("id", id);
    setActiveId(id);
  };

  return (
    <div className="w-[440px] p-10">
      <SideNav
        {...props}
        activeId={activeId}
        onClick={handleClick}
        accordionProps={{
          radius: "sm",
        }}
      />
    </div>
  );
}

const meta: Meta<typeof SideNavWrapper> = {
  title: "Components/SideNav",
  component: SideNavWrapper,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SideNavWrapper>;

// Sample navigation items
const sampleItems = [
  {
    content: "Home",
    id: "/home",
    items: [],
  },
  {
    content: "My Programs",
    id: "/my-programs",
    items: [
      {
        content: "My Program 1",
        id: "/my-programs/my-program-1",
        items: [],
      },
      {
        content: "My Program 2",
        id: "/my-programs/my-program-2",
        items: [],
      },
    ],
  },
  {
    content: "My Rounds",
    id: "/my-rounds",
    items: [
      {
        content: "Active Rounds",
        items: [],
        isSeparator: true,
      },
      {
        content: "Cool Round",
        id: "/my-rounds/cool-round",
        items: [],
      },
      {
        content: "Draft Rounds",
        id: "/my-rounds/draft-rounds",
        items: [],
        isSeparator: true,
      },
      {
        content: "Draft Cool Round",
        id: "/my-rounds/draft-cool-round",
        items: [],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    onClick: handleClick,
    hoverVariant: "grey",
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const WithCustomClass: Story = {
  args: {
    items: sampleItems,
    className: "bg-gray-100 p-4 rounded-lg",
    onClick: handleClick,
  },
};
