import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { NavbarGeneric } from "./NavbarGeneric";
import { NavbarCenterSection, NavbarEndSection, NavbarStartSection } from "./NavbarSections";

const meta = {
  title: "Components/NavbarGeneric",
  component: NavbarGeneric,
  argTypes: {
    behavior: {
      control: "radio",
      options: ["static", "sticky", "fixed"],
      description: "Behavior of the navbar",
      table: {
        defaultValue: { summary: "sticky" },
      },
    },
  },
} satisfies Meta<typeof NavbarGeneric>;

export default meta;

type Story = StoryObj<typeof NavbarGeneric>;

const DefaultContent = () => (
  <>
    <NavbarStartSection>
      <div className="rounded-sm bg-grey-500 p-2">Start Content</div>
    </NavbarStartSection>
    <NavbarCenterSection>
      <div className="rounded-sm bg-grey-500 p-2">Center Content</div>
    </NavbarCenterSection>
    <NavbarEndSection>
      <div className="rounded-sm bg-grey-500 p-2">End Content</div>
    </NavbarEndSection>
  </>
);

const ScrollDecorator = (Story: React.ComponentType) => (
  <div className="h-[200vh]">
    <Story />
    <div className="p-4">Scroll content</div>
  </div>
);

export const Default: Story = {
  args: {
    children: <DefaultContent />,
  },
};

export const Static: Story = {
  args: {
    behavior: "static",
    children: <DefaultContent />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [ScrollDecorator],
};

export const Sticky: Story = {
  args: {
    behavior: "sticky",
    children: <DefaultContent />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [ScrollDecorator],
};

export const Fixed: Story = {
  args: {
    behavior: "fixed",
    children: <DefaultContent />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [ScrollDecorator],
};

export const RandomOrder: Story = {
  render: (args) => (
    <NavbarGeneric {...args}>
      <NavbarEndSection>
        <div className="bg-grey-500 p-2">End First</div>
      </NavbarEndSection>
      <NavbarStartSection>
        <div className="bg-grey-500 p-2">Start Second</div>
      </NavbarStartSection>
      <NavbarCenterSection>
        <div className="bg-grey-500 p-2">Center Last</div>
      </NavbarCenterSection>
    </NavbarGeneric>
  ),
};

export const OmittedSections: Story = {
  render: (args) => (
    <NavbarGeneric {...args}>
      <NavbarStartSection>
        <div className="bg-grey-500 p-2">Only Start</div>
      </NavbarStartSection>
      <NavbarEndSection>
        <div className="bg-grey-500 p-2">And End</div>
      </NavbarEndSection>
    </NavbarGeneric>
  ),
};
