import { ReactNode } from "react";

export interface ProjectAllocation {
  id: string;
  name: string;
  amount: number;
  image?: string;
}

export interface SortConfig {
  isAscending: boolean;
  onClick: () => void;
}

export interface AllocationSidebarProps {
  title: string;
  projects: ProjectAllocation[];
  chartData: { x: number; y: number }[];
  sortConfig: SortConfig;
  description?: string;
  isLoading?: boolean;
  footer?: ReactNode;
  formatAllocation?: (alloc: number) => string | number;
  formatChartTick?: (alloc: number) => string;
  onClickProject?: (id?: string) => void;
}
