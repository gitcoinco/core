import { Meta, StoryObj } from "@storybook/react";
import { CircleStat } from "./CircleStat";

const meta: Meta<typeof CircleStat> = {
  title: "Primitives/CircleStat",
  component: CircleStat,
  args: {
    value: 50,
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"]
      },
      table: {
        type: {
          summary: "string",
        },
      }
    },
    value: {
      control: "number",
      table: {
        type: {
          summary: "number | string",
        },
      },
    },
    showPercentageSymbol: {
      control: "boolean",
    },
    colors: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof CircleStat>;

export default meta;

type Story = StoryObj<typeof CircleStat>;

export const Default: Story = {};

export const LowPercentage: Story = {
  args: {
    value: 23,
  },
};

export const MidPercentage: Story = {
  args: {
    value: 54,
  },
};

export const HighPercentage: Story = {
  args: {
    value: 60,
  },
};

export const CustomColor: Story = {
  render: () => {
    const stats = [
      { value: 23 },
      { value: 54 },
      { value: 85 },
    ];

    return (
      <div className="flex space-x-4">
        {stats.map((stat) => (
          <CircleStat
            key={stat.value}
            value={stat.value}
            className="text-white"
            colors={{
              low: '#666666',
              mid: '#444444',
              high: '#000000',
            }}
          />
        ))}
      </div>
    );
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "border-4 border-blue-500",
  },
};

export const WithoutPercentageSymbol: Story = {
  args: {
    value: 42,
    showPercentageSymbol: false,
  },
};
