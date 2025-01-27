import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/primitives/Checkbox";
import { CommandItem } from "@/ui-shadcn/command";
import { CommandGroup } from "@/ui-shadcn/command";

import { MultipleSelectItem } from "../types";
import { MultipleSelectGroup } from "../types";
import { MultipleSelectItemRow } from "./MultipleSelectItemRow";

/* -------------------------------------------------------------------------------------------------
   MultipleSelectGroupContent: subcomponent that handles each group (header + items)
------------------------------------------------------------------------------------------------- */
export const MultipleSelectGroupContent = ({
  group,
  groupKey,
  collapsedGroups,
  selectedValues,
  toggleGroupCollapse,
  toggleOption,
  groupHeaderClasses,
  groupHeaderIconClasses,
  itemClasses,
  itemIconClasses,
}: {
  group: MultipleSelectGroup;
  groupKey: string;
  collapsedGroups: Record<string, boolean>;
  selectedValues: Record<string, string[]>;
  toggleGroupCollapse: (groupKey: string) => void;
  toggleOption: (item: MultipleSelectItem, groupLabel?: string, multiple?: boolean) => void;
  groupHeaderClasses: string;
  groupHeaderIconClasses: string;
  itemClasses: string;
  itemIconClasses: string;
}) => {
  const isGroupOpen = !collapsedGroups[groupKey];
  return (
    <CommandGroup>
      <span className={cn(itemClasses, groupHeaderClasses)}>
        {group.collapsible ? "" : group.groupLabel}
      </span>
      {group.collapsible && group.groupLabel && (
        <CommandItem
          className={cn(groupHeaderClasses)}
          onSelect={() => toggleGroupCollapse(groupKey)}
        >
          <span className={cn(groupHeaderClasses)}>{group.groupLabel}</span>
          {!isGroupOpen ? (
            <ChevronDownIcon className={cn(groupHeaderIconClasses)} fill="currentColor" />
          ) : (
            <ChevronUpIcon className={cn(groupHeaderIconClasses)} fill="currentColor" />
          )}
        </CommandItem>
      )}

      {/* If this group is collapsed, don't show items */}
      {isGroupOpen &&
        group.items.map((optItem) => {
          const isSelected = selectedValues[groupKey]?.includes(optItem.value);
          const showCheckbox = group.multiple;

          return (
            <CommandItem
              key={optItem.value}
              onSelect={(str) => {
                // Only toggle if not clicking the checkbox (which has its own handler)
                if (!str.startsWith("checkbox-click")) {
                  toggleOption(optItem, group.groupLabel, group.multiple);
                }
              }}
              className={cn(itemClasses, "gap-1")}
            >
              {/* Show a checkbox if multiple, else a single check icon if selected */}
              {showCheckbox ? (
                <div className={cn("flex items-center gap-2")}>
                  <Checkbox
                    checked={isSelected}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleOption(optItem, group.groupLabel, group.multiple);
                    }}
                    data-value="checkbox-click"
                  />
                  <MultipleSelectItemRow
                    item={optItem}
                    itemIconClasses={itemIconClasses}
                    itemClasses={itemClasses}
                  />
                </div>
              ) : (
                <div className={cn("flex items-center gap-1")}>
                  {isSelected ? (
                    <CheckIcon className={cn(itemIconClasses)} fill="currentColor" />
                  ) : null}
                  <MultipleSelectItemRow
                    item={optItem}
                    itemIconClasses={itemIconClasses}
                    itemClasses={itemClasses}
                  />
                </div>
              )}
            </CommandItem>
          );
        })}
    </CommandGroup>
  );
};
