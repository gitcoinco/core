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
