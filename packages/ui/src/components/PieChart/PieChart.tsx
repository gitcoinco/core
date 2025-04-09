"use client";

import { Pie, PieChart as RechartsPieChart, Legend, Label } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui-shadcn/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui-shadcn/chart";

const DEFAULT_COLORS = [
  "#D9D6FF",
  "#B3B0FF",
  "#B3D3FE",
  "#1F9EB5",
  "#8FBE7F",
  "#B0D0B0",
  "#1A7A4A",
  "#D65A33",
  "#4A42B8",
  "#D5A2D5",
  "#D57756",
  "#4F7A9C",
  "#D5C5D5",
  "#A8D6D6",
  "#DBA614",
  "#4A2AD8",
  "#D50098",
  "#53B2B2",
  "#D5B9AE",
  "#DCA611",
  "#0D8CA5",
];

export interface PieChartProps {
  width?: number;
  height?: number;
  data: {
    name: string;
    value: number;
    color?: string;
  }[];
  title?: string;
  description?: string;
  total?: string;
  totalLabel?: string;
}

export function PieChart({
  width = 500,
  height = 400,
  data,
  title,
  description,
  total,
  totalLabel = "Total",
}: PieChartProps) {
  if (!data || data.length === 0) {
    return [];
  }
  const chartData = data.map((item, index) => ({
    name: item.name,
    value: item.value,
    fill: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
  }));

  const chartConfig = data.reduce(
    (acc, item, index) => {
      acc[item.name] = {
        label: item.name, 
        color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
      };
      return acc;
    },
    {},
  );

  return (
    <Card className="flex flex-col" style={{ width }}>
      <CardHeader className="items-center pb-0">
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div style={{ width: "100%", height: height, maxWidth: "100%", overflow: "auto" }}>
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[400px] w-full pb-0 responsive-chart"
          >
            <RechartsPieChart width={width} height={height}>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                label
                outerRadius={total ? 120 : 140}
                innerRadius={total ? 60 : 0}
                paddingAngle={total ? 2 : 0}
              >
                {total && (
                  <Label
                    value={`${totalLabel}\n${total}`}
                    position="center"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "normal",
                    }}
                    className="[&>tspan:nth-child(2)]:text-xl [&>tspan:nth-child(2)]:font-bold"
                  />
                )}
              </Pie>
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                wrapperStyle={{ paddingLeft: "20px" }}
              />
            </RechartsPieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
