import { useMemo } from "react";

import { ProgramCardProps } from "@/features/program";

interface UseFilteredAndOrderedProgramsProps {
  programs: ProgramCardProps[];
  selectedFilters: Record<string, string[]>;
  order: Record<string, string[]>;
}

export const useFilteredAndOrderedPrograms = ({
  programs,
  selectedFilters,
  order,
}: UseFilteredAndOrderedProgramsProps) => {
  return useMemo(() => {
    let result = [...programs];

    // Apply filters
    const ungrouped = selectedFilters["ungrouped"];
    const hasAllFilter = ungrouped?.includes("All");

    // Apply network filters if not "All"
    const selectedNetworks = selectedFilters["Network"] || [];
    if (!hasAllFilter && selectedNetworks.length > 0) {
      result = result.filter((program) => selectedNetworks.includes(program.chainId.toString()));
    }

    // Apply ordering
    const orderValue = order["ORDER BY TIME"]?.[0] || order["ORDER BY NAME"]?.[0] || "Recent";
    switch (orderValue) {
      case "Recent":
        result.sort((a, b) => b.createdAtBlock - a.createdAtBlock);
        break;
      case "Oldest":
        result.sort((a, b) => a.createdAtBlock - b.createdAtBlock);
        break;
      case "A-Z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [programs, order, selectedFilters]);
};
