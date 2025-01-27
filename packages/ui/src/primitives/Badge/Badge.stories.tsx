import { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeVariants } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  args: {
    children: "Badge",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "info",
          "success",
          "warning",
          "error",
          "success-strong",
          "warning-strong",
          "info-strong",
          "outlined-info",
          "outlined-success",
          "outlined-warning",
          "outlined-error",
          "outlined-success-strong",
          "outlined-warning-strong",
          "outlined-info-strong",
        ],
      },
      table: {
        type: {
          summary: "BadgeVariants",
        },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
      table: {
        type: {
          summary: "BadgeSizes",
        },
      },
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Badges: Story = {
  render: () => {
    const args = [
      {
        variant: "success",
        children: "Success",
      },
      {
        variant: "info",
        children: "Info",
      },
      {
        variant: "warning",
        children: "Warning",
      },
    ];

    return (
      <div className="flex space-x-4">
        {args.map((arg) => (
          <Badge variant={arg.variant as BadgeVariants} size="sm">
            {arg.children}
          </Badge>
        ))}
      </div>
    );
  },
};

export const StrongBadges: Story = {
  render: () => {
    const args = [
      {
        variant: "success-strong",
        children: "Success Strong",
      },
      {
        variant: "info-strong",
        children: "Info Strong",
      },
      {
        variant: "warning-strong",
        children: "Warning Strong",
      },
      {
        variant: "error-strong",
        children: "Error Strong",
      },
    ];

    return (
      <div className="flex space-x-4">
        {args.map((arg) => (
          <Badge variant={arg.variant as BadgeVariants} size="md">
            {arg.children}
          </Badge>
        ))}
      </div>
    );
  },
};

export const OutlinedBadges: Story = {
  render: () => {
    const args = [
      {
        variant: "outlined-success",
        children: "Outlined Success",
      },
      {
        variant: "outlined-info",
        children: "Outlined Info",
      },
      {
        variant: "outlined-warning",
        children: "Outlined Warning",
      },
      {
        variant: "outlined-success-strong",
        children: "Outlined Success Strong",
      },
      {
        variant: "outlined-info-strong",
        children: "Outlined Info Strong",
      },
      {
        variant: "outlined-warning-strong",
        children: "Outlined Warning Strong",
      },
    ];

    return (
      <div className="grid grid-cols-3 gap-4">
        {args.map((arg) => (
          <div className="flex justify-center" key={arg.children}>
            <Badge variant={arg.variant as BadgeVariants} style={{ minWidth: "200px" }}>
              {arg.children}
            </Badge>
          </div>
        ))}
      </div>
    );
  },
};

export const SizeVariants: Story = {
  render: () => {
    const args: { size?: "xs" | "sm" | "md" | "lg"; children: string; className?: string }[] = [
      {
        size: "xs",
        children: "XS",
      },
      {
        size: "sm",
        children: "SM",
      },
      {
        size: "md",
        children: "MD",
      },
      {
        size: "lg",
        children: "LG",
      },
      {
        children: "Custom (300px)",
        className: "min-w-[300px]",
      },
    ];

    return (
      <div className="flex space-x-4">
        {args.map((arg) => (
          <Badge className={arg.className} size={arg.size}>
            {arg.children}
          </Badge>
        ))}
      </div>
    );
  },
};

export const CustomClassName: Story = {
  args: {
    className: "bg-blue-900 border border-blue-700 text-white",
  },
};
