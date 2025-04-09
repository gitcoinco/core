import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { BarChart } from "./BarChart";

const meta: Meta<typeof BarChart> = {
  title: "Components/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

// Generate time series data for the last 30 days
function generateTimeSeriesData(days = 30) {
  const data = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    data.push({
      x: date.toISOString().split("T")[0],
      y: Math.floor(Math.random() * 1000) + 500,
    });
  }
  return data;
}

// Generate numeric data
function generateNumericData(count = 10) {
  return Array.from({ length: count }, (_, i) => ({
    x: (i + 1).toString(),
    y: Math.floor(Math.random() * 1000) + 500,
  }));
}

// Sample data for date-based x-axis
const dateData = [
  {
    x: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
    y: [100, 200, 150, 300, 250],
    name: "Visitors",
  },
];

export const Default: Story = {
  args: {
    data: dateData,
    title: "Daily Visitors",
    description: "Number of visitors per day",
    xAxisTitle: "Date",
    yAxisTitle: "Visitors",
  },
};

export const WithMultipleSeries: Story = {
  args: {
    data: [
      {
        x: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
        y: [100, 200, 150, 300, 250],
        name: "Visitors",
      },
      {
        x: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04", "2024-01-05"],
        y: [50, 100, 75, 150, 125],
        name: "Unique Visitors",
      },
    ],
    title: "Daily Visitors",
    description: "Number of visitors per day",
    xAxisTitle: "Date",
    yAxisTitle: "Visitors",
  },
};

export const WithNumericXAxis: Story = {
  args: {
    data: [
      {
        x: ["1", "2", "3", "4", "5"],
        y: [100, 200, 150, 300, 250],
        name: "Performance",
        color: "#25BDCE",
      },
    ],
    title: "Category Performance",
    description: "Performance across different categories",
    xAxisTitle: "Category",
    yAxisTitle: "Performance Score",
    isDateAxis: false,
  },
};

export const TimeSeries: Story = {
  args: {
    width: 800,
    height: 500,
    data: [
      {
        const timeSeriesData = generateTimeSeriesData(30);
        {
          name: "Donations",
          x: timeSeriesData.map((d) => d.x),
          y: timeSeriesData.map((d) => d.y),
          color: "#25BDCE",
        },
      },
    ],
    title: "Daily Donations",
    description: "Showing donations over the last 30 days",
    xAxisTitle: "Date",
    yAxisTitle: "Amount (USD)",
    xAxisLabelInterval: 5,
    yAxisLabelInterval: 200,
    isDateAxis: true,
  },
};

export const MultipleSeries: Story = {
  args: {
    width: 800,
    height: 500,
    data: [
      {
        name: "Donations",
+ const multipleSeriesData = generateTimeSeriesData(30);
  {
    name: "Donations",
-   x: generateTimeSeriesData(30).map((d) => d.x),
-   y: generateTimeSeriesData(30).map((d) => d.y),
+   x: multipleSeriesData.map((d) => d.x),
+   y: multipleSeriesData.map((d) => d.y),
    color: "#25BDCE",
  },
  {
    name: "Matching Funds",
-   x: generateTimeSeriesData(30).map((d) => d.x),
-   y: generateTimeSeriesData(30).map((d) => d.y * 0.5),
+   x: multipleSeriesData.map((d) => d.x),
+   y: multipleSeriesData.map((d) => d.y * 0.5),
    color: "#FF7043",
  },
      },
    ],
    title: "Donations and Matching Funds",
    description: "Showing donations and matching funds over the last 30 days",
    xAxisTitle: "Date",
    yAxisTitle: "Amount (USD)",
    xAxisLabelInterval: 5,
    yAxisLabelInterval: 200,
    barGap: 0.1,
    barGroupGap: 0.2,
    isDateAxis: true,
  },
};

export const Categories: Story = {
  args: {
    width: 800,
    height: 500,
    data: [
      {
        name: "2023",
        x: ["Q1", "Q2", "Q3", "Q4"],
        y: [12000, 15000, 18000, 21000],
        color: "#25BDCE",
      },
      {
        name: "2024",
        x: ["Q1", "Q2", "Q3", "Q4"],
        y: [15000, 18000, 21000, 24000],
        color: "#FF7043",
      },
    ],
    title: "Quarterly Donations",
    description: "Showing donations by quarter for two years",
    xAxisTitle: "Quarter",
    yAxisTitle: "Amount (USD)",
    xAxisLabelInterval: 1,
    yAxisLabelInterval: 3000,
    barGap: 0.1,
    barGroupGap: 0.2,
    isDateAxis: false,
  },
};

export const NumericAxis: Story = {
  args: {
    width: 800,
    height: 500,
    data: [
      {
+ const numericData = generateNumericData(10);
  {
    name: "Series A",
-   x: generateNumericData(10).map((d) => d.x),
-   y: generateNumericData(10).map((d) => d.y),
+   x: numericData.map((d) => d.x),
+   y: numericData.map((d) => d.y),
    color: "#25BDCE",
  },
  {
    name: "Series B",
-   x: generateNumericData(10).map((d) => d.x),
-   y: generateNumericData(10).map((d) => d.y),
+   x: numericData.map((d) => d.x),
+   y: numericData.map((d) => d.y * 0.7), // Creating some variation between series
    color: "#FF7043",
  },
      },
    ],
    title: "Numeric X-Axis Example",
    description: "Showing data with numeric x-axis values",
    xAxisTitle: "Step",
    yAxisTitle: "Value",
    xAxisLabelInterval: 1,
    yAxisLabelInterval: 200,
    barGap: 0.1,
    barGroupGap: 0.2,
    isDateAxis: false,
  },
};

export const NoLegend: Story = {
  args: {
    width: 800,
    height: 500,
    data: [
      {
        name: "Donations",
+ const noLegendData = generateTimeSeriesData(30);
{
  name: "Donations",
-  x: generateTimeSeriesData(30).map((d) => d.x),
-  y: generateTimeSeriesData(30).map((d) => d.y),
+  x: noLegendData.map((d) => d.x),
+  y: noLegendData.map((d) => d.y),
  color: "#25BDCE",
},
      },
    ],
    title: "Daily Donations",
    description: "Showing donations over the last 30 days",
    xAxisTitle: "Date",
    yAxisTitle: "Amount (USD)",
    xAxisLabelInterval: 5,
    yAxisLabelInterval: 200,
    showLegend: false,
    isDateAxis: true,
  },
};
