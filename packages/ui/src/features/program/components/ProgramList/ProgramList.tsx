"use client";

import { useState } from "react";

import { MultipleSelect } from "@/components/MultipleSelect";

import { ProgramCardProps } from "../ProgramCard";
import { ProgramCardGroup } from "../ProgramCardGroup";
import { useFilteredAndOrderedPrograms } from "./hooks/useFilteredAndOrderedPrograms";
import { getOrderAndFilterOptions } from "./utils";

export interface ProgramListProps {
  programs: ProgramCardProps[];
  title?: string;
  noProgramsPlaceholder: string;
}

export const ProgramList = ({
  programs,
  noProgramsPlaceholder = "No programs found",
  title = "Programs",
}: ProgramListProps) => {
  const [order, setOrder] = useState<Record<string, string[]>>({ "ORDER BY TIME": ["Recent"] });
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    ungrouped: ["All"],
  });

  const { orderOptions, filterOptions } = getOrderAndFilterOptions(programs);

  const handleOrderChange = (values: Record<string, string[]>) => {
    setOrder(values);
  };

  const handleFilterChange = (values: Record<string, string[]>) => {
    setSelectedFilters(values);
  };

  const filteredAndOrderedPrograms = useFilteredAndOrderedPrograms({
    programs,
    selectedFilters,
    order,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex font-ui-sans text-2xl font-medium">{`${title} (${programs.length})`}</div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-nowrap font-ui-sans text-body font-medium">Order by</span>
            <MultipleSelect
              options={orderOptions}
              onChange={handleOrderChange}
              defaultValue={{ "ORDER BY TIME": ["Recent"] }}
              placeholder="Select order"
              variants={{ triggerTextColor: "green", headerPosition: "end", itemsPosition: "end" }}
              className="w-40"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-nowrap font-ui-sans text-body font-medium">Filter by</div>
            <MultipleSelect
              options={filterOptions}
              onChange={handleFilterChange}
              defaultValue={{ ungrouped: ["All"] }}
              placeholder="Select filters"
              variants={{ triggerTextColor: "red" }}
              className="w-64"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        {filteredAndOrderedPrograms.length > 0 ? (
          <ProgramCardGroup programs={filteredAndOrderedPrograms} />
        ) : (
          <div className="font-ui-sans text-lg">{noProgramsPlaceholder}</div>
        )}
      </div>
    </div>
  );
};
