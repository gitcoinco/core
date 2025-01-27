import { useState, useMemo } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { AllocationSidebar, AllocationSidebarProps } from "@/components/AllocationSidebar";

// Wrapper component to handle state
const AllocationSidebarWrapper = (props: AllocationSidebarProps) => {
  const [isAscending, setIsAscending] = useState(false);

  // Memoize sorted projects
  const sortedProjects = useMemo(() => {
    if (!props.projects) return [];
    return [...props.projects].sort((a, b) => (a.amount < b.amount ? (isAscending ? -1 : 1) : -1));
  }, [props.projects, isAscending]);

  // Memoize chart data
  const chartData = useMemo(
    () =>
      sortedProjects.map((project, i) => ({
        x: i,
        y: project.amount,
      })),
    [sortedProjects],
  );

  const handleToggleOrder = () => setIsAscending((prev) => !prev);

  return (
    <AllocationSidebar
      {...props}
      projects={sortedProjects}
      chartData={chartData}
      sortConfig={{
        isAscending,
        onClick: handleToggleOrder,
      }}
    />
  );
};

const meta: Meta<typeof AllocationSidebarWrapper> = {
  title: "Components/AllocationSidebar",
  component: AllocationSidebarWrapper,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AllocationSidebarWrapper>;

export const NoProjects: Story = {
  args: {
    title: "Projects Allocation",
    description: "This is a description (optional)",
    isLoading: false,
    projects: [],
    formatAllocation: (value: number) => `${(value * 100).toFixed(0)}%`,
    formatChartTick: (value: number) => `${(value * 100).toFixed(0)}%`,
  },
};

export const WithProjects: Story = {
  args: {
    ...NoProjects.args,
    projects: [
      {
        id: "1",
        name: "Project Alpha",
        amount: 0.3,
        image: "https://picsum.photos/100",
      },
      {
        id: "2",
        name: "Project Beta",
        amount: 0.1,
        image: "https://picsum.photos/200",
      },
      {
        id: "3",
        name: "Project Gamma",
        amount: 0.02,
        image: "https://picsum.photos/300",
      },
      {
        id: "4",
        name: "Project Delta",
        amount: 0.08,
        image: "https://picsum.photos/400",
      },
      {
        id: "5",
        name: "Project Epsilon",
        amount: 0.2,
        image: "https://picsum.photos/500",
      },
      {
        id: "6",
        name: "Project Zeta",
        amount: 0.1,
        image: "https://picsum.photos/600",
      },
      {
        id: "7",
        name: "Project Eta",
        amount: 0.01,
        image: "https://picsum.photos/700",
      },
      {
        id: "8",
        name: "Project Theta",
        amount: 0.02,
        image: "https://picsum.photos/800",
      },
      {
        id: "9",
        name: "Project Iota",
        amount: 0.03,
        image: "https://picsum.photos/900",
      },
      {
        id: "10",
        name: "Project Kappa",
        amount: 0.02,
        image: "https://picsum.photos/1000",
      },
      {
        id: "11",
        name: "Project Lambda",
        amount: 0.02,
        image: "https://picsum.photos/1100",
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    ...NoProjects.args,
    isLoading: true,
  },
};
