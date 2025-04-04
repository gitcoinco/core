import React from "react";

import { Meta, StoryObj } from "@storybook/react";

// Import the component directly
import { SquarePlot } from "./SquarePlot";

const meta: Meta<typeof SquarePlot> = {
  title: "Components/SquarePlot",
  component: SquarePlot,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SquarePlot>;

const Default: Story = {
  args: {
    width: 600,
    values: [100, 200, 300, 400, 500],
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  },
};

const SmallDataset: Story = {
  args: {
    width: 500,
    values: [50, 150, 250],
    labels: ["Small", "Medium", "Large"],
  },
};

const LargeDataset: Story = {
  args: {
    width: 800,
    values: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 6",
      "Category 7",
      "Category 8",
      "Category 9",
      "Category 10",
    ],
  },
};

export { Default, SmallDataset, LargeDataset };
