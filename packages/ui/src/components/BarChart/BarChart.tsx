"use client";

import * as React from "react";

import { Bar, BarChart as RechartsBarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui-shadcn/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui-shadcn/chart";

export interface BarChartProps {
  width?: number;
  height?: number;
  data: {
    x: string[]; // Dates or categories
    y: number[]; // Values
    name?: string; // For multiple series
    color?: string;
  }[];
  title?: string;
  description?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
  xAxisLabelInterval?: number; // Show label every n-th item
  yAxisLabelInterval?: number; // Show label every n-th value
  showLegend?: boolean;
  barGap?: number; // Gap between bars of different series (0-1)
  barGroupGap?: number; // Gap between groups of bars (0-1)
  isDateAxis?: boolean; // Whether x-axis values should be treated as dates
}

export function BarChart({
  width = 800,
  data,
  title,
  description,
  xAxisTitle,
  yAxisTitle,
  showLegend = true,
  isDateAxis = false,
}: BarChartProps) {
  // Transform data into recharts format
  const chartData =
    data.length > 0
      ? data[0].x.map((date, index) => {
          const item: Record<string, any> = { date };
          data.forEach((series) => {
            item[series.name || "value"] = series.y[index];
          });
          return item;
        })
      : [];

  // Create chart config with default colors
  const chartConfig = data.reduce<ChartConfig>((acc, series, index) => {
    acc[series.name || "value"] = {
      label: series.name || "Value",
      color: series.color || "#25BDCE", // Default teal color
    };
    return acc;
  }, {});

  // Check if the first x value is a date
  const isDate = (value: string) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  };

  const formatXAxis = (value: string) => {
    if (isDateAxis) {
      const date = new Date(value);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
    return value; // Return numeric values as is
  };

  return (
    <Card className="flex flex-col" style={{ width }}>
      <CardHeader className="items-center pb-0">
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-auto h-[400px] w-full">
          <RechartsBarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              label={xAxisTitle ? { value: xAxisTitle, position: "bottom", offset: 30 } : undefined}
              tickFormatter={formatXAxis}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={
                yAxisTitle
                  ? { value: yAxisTitle, angle: -90, position: "left", offset: 10 }
                  : undefined
              }
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="value"
                  labelFormatter={(value) => {
                    // if (isDate(value)) {
                    //   return new Date(value).toLocaleDateString("en-US", {
                    //     month: "short",
                    //     day: "numeric",
                    //     year: "numeric",
                    //   });
                    // }
                    return value;
                  }}
                />
              }
            />
            {showLegend && (
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) => chartConfig[value]?.label || value}
              />
            )}
            {data.map((series, index) => (
              <Bar
                key={series.name || index}
                dataKey={series.name || "value"}
                fill={series.color || "#25BDCE"}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
