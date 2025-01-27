import { MultipleSelectGroup } from "@/components/MultipleSelect";
import { ProgramCardProps } from "@/features/program";
import { getChainInfo } from "@/lib";

export const getOrderAndFilterOptions = (programs: ProgramCardProps[]) => {
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
      items: [...new Set(programs.map((program) => program.chainId))].map((chainId) => ({
        label: `Rounds on ${getChainInfo(chainId).name}`,
        value: chainId.toString(),
      })),
    },
  ] satisfies MultipleSelectGroup[];

  return { orderOptions, filterOptions };
};
