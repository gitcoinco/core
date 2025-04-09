import { Meta, StoryObj } from "@storybook/react";

import { PieChart } from "./PieChart";

const meta: Meta<typeof PieChart> = {
  title: "Components/PieChart",
  component: PieChart,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PieChart>;

const Basic: Story = {
  args: {
    width: 800,
    data: [
      { name: "Category A", value: 30 },
      { name: "Category B", value: 20 },
      { name: "Category C", value: 15 },
      { name: "Category D", value: 25 },
      { name: "Category E", value: 10 },
    ],
    title: "Distribution",
    description: "Sample data distribution",
  },
};

const DonutChart: Story = {
  args: {
    width: 800,
    data: [
      { name: "Category A", value: 30 },
      { name: "Category B", value: 20 },
      { name: "Category C", value: 15 },
      { name: "Category D", value: 25 },
      { name: "Category E", value: 10 },
    ],
    title: "Total Distribution",
    description: "Sample data with total",
    total: "$2000",
  },
};

const CustomColors: Story = {
  args: {
    width: 800,
    data: [
      { name: "Category A", value: 30, color: "#1F9EB5" },
      { name: "Category B", value: 20, color: "#4A6B8C" },
      { name: "Category C", value: 15, color: "#0D8CA5" },
      { name: "Category D", value: 25, color: "#5AB8B8" },
      { name: "Category E", value: 10, color: "#4A42B8" },
    ],
    title: "Custom Colors",
    description: "Using different shades of blue",
  },
};

const NoValues: Story = {
  args: {
    width: 800,
    data: [
      { name: "Category A", value: 30 },
      { name: "Category B", value: 20 },
      { name: "Category C", value: 15 },
      { name: "Category D", value: 25 },
      { name: "Category E", value: 10 },
    ],
    title: "No Values",
    description: "Hiding value labels",
  },
};

const WithLegend: Story = {
  args: {
    width: 800,
    data: [
      { name: "Category A", value: 30 },
      { name: "Category B", value: 20 },
      { name: "Category C", value: 15 },
      { name: "Category D", value: 25 },
      { name: "Category E", value: 10 },
    ],
    title: "Distribution with Legend",
    description: "Showing data distribution with a legend",
  },
};

export { Basic, DonutChart, CustomColors, NoValues, WithLegend };
