export interface LeaderboardProps {
  projects: Record<
    number,
    {
      project: {
        name: string;
        logoImg?: string;
        website?: string;
        projectProfile?: string;
        projectTwitter?: string;
        projectGithub?: string;
        description?: string;
      };
      metrics: Record<string, number>;
    }
  >;
  metrics: Record<
    string,
    {
      name: string;
      description?: string;
    }
  >;

  paginationProps: {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsChange: (rows: number) => void;
  };
  expandedProject: number | null;
  setExpandedProject: (project: number | null) => void;
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
}

export interface SortConfig {
  key: "rank" | string;
  direction: "asc" | "desc";
}
