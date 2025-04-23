"use client";

import { useState } from "react";

import { MultipleSelect } from "@/components/MultipleSelect";

import { PoolCardProps } from "../PoolCard";
import { PoolCardGroup } from "../PoolCardGroup";
import { useFilteredAndOrderedPools } from "./hooks/useFilteredAndOrderedPools";
import { getSortFilterOptions } from "./utils";

export interface PoolListProps {
  pools: PoolCardProps[];
  title?: string;
  noPoolsPlaceholder?: string;
}

export const PoolList = ({
  pools,
  title = "Pools",
  noPoolsPlaceholder = "No pools found",
}: PoolListProps) => {
  const [order, setOrder] = useState<Record<string, string[]>>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const { orderOptions, filterOptions } = getSortFilterOptions(pools);

  const handleFilterChange = (values: Record<string, string[]>) => {
    setSelectedFilters(values);
  };

  const handleOrderChange = (values: Record<string, string[]>) => {
    setOrder(values);
  };

  const filteredAndOrderedPools = useFilteredAndOrderedPools({ pools, order, selectedFilters });

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex-1 text-start font-ui-sans text-2xl font-medium">
          {`${title} (${pools.length})`}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-nowrap font-ui-sans text-body font-medium">Order by</div>
            <MultipleSelect
              options={orderOptions}
              onChange={handleOrderChange}
              defaultValue={{ "ORDER BY TIME": ["Recent"] }}
              className="w-40"
              variants={{ triggerTextColor: "green", itemsPosition: "end", headerPosition: "end" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-nowrap font-ui-sans text-body font-medium">Filter by</div>
            <MultipleSelect
              options={filterOptions}
              onChange={handleFilterChange}
              defaultValue={{ ungrouped: ["All"] }} // so it starts with 'All' selected
              className="w-64"
              variants={{ triggerTextColor: "red" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        {filteredAndOrderedPools.length > 0 ? (
          <PoolCardGroup pools={filteredAndOrderedPools} />
        ) : (
          <div className="font-ui-sans text-lg">{noPoolsPlaceholder}</div>
        )}
      </div>
    </div>
  );
};
