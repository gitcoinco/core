import { SSRComponent } from "@gitcoin/types";

import {
  AllocationSidebar,
  AllocationSidebarProps,
} from "@/components/AllocationSidebar/AllocationSidebar";

const projects = [
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
];

const chartData = projects.map((project, i) => ({
  x: i,
  y: project.amount,
}));

const baseProps: AllocationSidebarProps = {
  title: "Projects Allocation",
  description: "This is a description (optional)",
  isLoading: false,
  sortConfig: { isAscending: true, onClick: () => null },
  projects: [],
  chartData: [],
};

const allocationSidebarSSR: SSRComponent<AllocationSidebarProps> = {
  component: AllocationSidebar,
  isClient: true,
  isFullNext: false,
  tooltipMessage: "entire root will switch to client rendering",
  cases: [
    {
      label: "No Projects",
      props: {
        ...baseProps,
      },
    },
    {
      label: "With Projects",
      props: {
        ...baseProps,
        projects: projects,
        chartData: chartData,
      },
    },
    {
      label: "Loading No Projects",
      props: {
        ...baseProps,
        isLoading: true,
      },
    },
    {
      label: "Loading With Projects",
      props: {
        ...baseProps,
        projects: projects,
        chartData: chartData,
        isLoading: true,
      },
    },
  ],
};

export default allocationSidebarSSR;
