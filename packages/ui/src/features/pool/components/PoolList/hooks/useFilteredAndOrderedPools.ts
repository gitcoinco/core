import { useMemo } from "react";

import { PoolData, PoolStatus } from "@/types/pool";

interface UseFilteredAndOrderedPoolsProps {
  pools: PoolData[];
  selectedFilters: Record<string, string[]>;
  order: Record<string, string[]>;
}

export const useFilteredAndOrderedPools = ({
  pools,
  selectedFilters,
  order,
}: UseFilteredAndOrderedPoolsProps) => {
  return useMemo(() => {
    let result = [...pools];

    // 1) Check for "All" filter
    const ungrouped = selectedFilters["ungrouped"];
    const hasAllFilter = ungrouped?.includes("All");

    // 2) Filter by network
    const selectedNetworks = selectedFilters["Network"] || [];
    if (!hasAllFilter && selectedNetworks.length > 0) {
      result = result.filter((pool) => selectedNetworks.includes(pool.chainId.toString()));
    }

    // 3) Filter by status
    const selectedStatuses = selectedFilters["Status"] || [];
    if (!hasAllFilter && selectedStatuses.length > 0) {
      result = result.filter((pool) => {
        return selectedStatuses.some((status) => {
          switch (status) {
            case "active":
              return (
                pool.poolStatus === PoolStatus.RoundInProgress ||
                pool.poolStatus === PoolStatus.ApplicationsInProgress
              );
            case "applications":
              return pool.poolStatus === PoolStatus.ApplicationsInProgress;
            case "finished":
              return pool.poolStatus === PoolStatus.FundingPending;
            default:
              return false;
          }
        });
      });
    }

    // 4) Apply ordering
    const orderValue = order["ORDER BY TIME"]?.[0] || order["ORDER BY NAME"]?.[0] || "Recent";
    switch (orderValue) {
      case "Recent":
        result.sort((a, b) => b.createdAtBlock - a.createdAtBlock);
        break;
      case "Oldest":
        result.sort((a, b) => a.createdAtBlock - b.createdAtBlock);
        break;
      case "A-Z":
        result.sort((a, b) => a.roundName.localeCompare(b.roundName));
        break;
      case "Z-A":
        result.sort((a, b) => b.roundName.localeCompare(a.roundName));
        break;
    }

    return result;
  }, [pools, order, selectedFilters]);
};
