import { MultipleSelectGroup } from "@/components/MultipleSelect/types";
import { getChainInfo } from "@/lib";
import { PoolData } from "@/types/pool";

export const getSortFilterOptions = (pools: PoolData[]) => {
  const orderOptions = [
    {
      groupLabel: "ORDER BY TIME",
      multiple: false,
      items: ["Recent", "Oldest"].map((value) => ({
        label: value,
        value,
        exclusive: true,
        exclusiveScope: "global",
      })),
    },
    {
      groupLabel: "ORDER BY NAME",
      multiple: false,
      items: ["A-Z", "Z-A"].map((value) => ({
        label: value,
        value,
        exclusive: true,
        exclusiveScope: "global",
      })),
    },
  ] satisfies MultipleSelectGroup[];

  // Example "All" ungrouped + networks + statuses
  const filterOptions = [
    {
      multiple: false,
      items: [
        {
          label: "All",
          value: "All",
          exclusive: true,
          exclusiveScope: "global",
        },
      ],
    },
    {
      groupLabel: "Network",
      multiple: true,
      collapsible: true,
      items: [...new Set(pools.map((pool) => pool.chainId))].map((chainId) => {
        const chainInfo = getChainInfo(chainId);
        return {
          label: `Rounds on ${chainInfo.name}`,
          value: chainId.toString(),
        };
      }),
    },
    {
      groupLabel: "Status",
      multiple: true,
      collapsible: true,
      items: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Taking Applications",
          value: "applications",
        },
        {
          label: "Finished",
          value: "finished",
        },
      ],
    },
  ] satisfies MultipleSelectGroup[];

  return { orderOptions, filterOptions };
};
