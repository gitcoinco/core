import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

const meta: Meta<BreadcrumbProps> = {
  title: "Primitives/Breadcrumb",
  component: Breadcrumb,
  args: {
    items: [
      { label: "My Programs", href: "#" },
      { label: "Program Details", href: "#" },
      { label: "Round Details", href: "#" },
    ],
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};
