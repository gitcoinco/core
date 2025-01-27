"use client";

import * as React from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Command, CommandList } from "@/ui-shadcn/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui-shadcn/popover";

import { MultipleSelectGroupContent } from "./components";
import { MultipleSelectItem, MultipleSelectProps } from "./types";
import {
  getGlobalExclusiveSelection,
  handleExclusiveSelection,
  handleNonExclusiveSelection,
  handleSelectionToggle,
  getGroupKey,
} from "./utils";
import { multipleSelect } from "./variants";

/**
 * MultipleSelect Component
 *
 * A flexible dropdown component that supports grouped and ungrouped items,
 * exclusive and non-exclusive selections, and single/multiple selection modes.
 *
 * @example Basic Usage (Ungrouped)
 * ```tsx
 * <MultipleSelect
 *   options={[{
 *     items: [
 *       { value: "1", label: "Option 1" },
 *       { value: "2", label: "Option 2" }
 *     ]
 *   }]}
 *   onValueChange={(values) => console.log(values)}
 * />
 * ```
 *
 * @example Grouped Items
 * ```tsx
 * <MultipleSelect
 *   options={[
 *     {
 *       groupLabel: "Group 1",
 *       items: [
 *         { value: "1.1", label: "Option 1.1" },
 *         { value: "1.2", label: "Option 1.2" }
 *       ]
 *     },
 *     {
 *       groupLabel: "Group 2",
 *       items: [
 *         { value: "2.1", label: "Option 2.1" },
 *         { value: "2.2", label: "Option 2.2" }
 *       ]
 *     }
 *   ]}
 *   onValueChange={(values) => console.log(values)}
 * />
 * ```
 *
 * @example Exclusive Selection (Radio-like behavior)
 * ```tsx
 * <MultipleSelect
 *   options={[{
 *     items: [
 *       { value: "exclusive1", label: "Exclusive 1", exclusive: true },
 *       { value: "exclusive2", label: "Exclusive 2", exclusive: true }
 *     ]
 *   }]}
 * />
 * ```
 *
 * @example Global Exclusive (Resets all selections)
 * ```tsx
 * <MultipleSelect
 *   options={[{
 *     items: [
 *       {
 *         value: "reset",
 *         label: "Reset All",
 *         exclusive: true,
 *         exclusiveScope: "global"
 *       }
 *     ]
 *   }]}
 * />
 * ```
 *
 */
export const MultipleSelect = ({
  variants,
  options,
  onChange,
  defaultValue = {},
  placeholder = "Select options",
  className,
  ...props
}: MultipleSelectProps) => {
  // ------------------ State Management ------------------
  const [selectedValues, setSelectedValues] =
    React.useState<Record<string, string[]>>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [collapsedGroups, setCollapsedGroups] = React.useState<Record<string, boolean>>({});

  // ------------------ Style Classes ------------------
  const {
    trigger,
    triggerText,
    triggerIcon,
    content,
    groupHeader,
    groupHeaderIcon,
    item,
    itemIcon,
    itemsPosition,
  } = multipleSelect(variants);

  /**
   * Toggles the collapsed state of a group
   */
  const toggleGroupCollapse = (groupLabel: string) => {
    setCollapsedGroups((prevState) => ({
      ...prevState,
      [groupLabel]: !prevState[groupLabel],
    }));
  };

  /**
   * Handles option selection/deselection
   * @param selectedItem - The item being toggled
   * @param groupLabel - Optional group label for grouped items
   * @param allowMultiple - Whether multiple selections are allowed
   */
  const toggleOption = (
    selectedItem: MultipleSelectItem,
    groupLabel?: string,
    allowMultiple?: boolean,
  ) => {
    setSelectedValues((currentSelections) => {
      let updatedSelections = { ...currentSelections };
      const groupKey = getGroupKey(groupLabel);

      // Handle non-exclusive selections first
      if (!selectedItem.exclusive) {
        updatedSelections = handleNonExclusiveSelection(updatedSelections, options);
      }

      // Handle exclusive selections
      if (selectedItem.exclusive) {
        updatedSelections = handleExclusiveSelection(
          updatedSelections,
          groupKey,
          selectedItem.exclusiveScope,
        );
      }

      // Toggle the selection
      updatedSelections = handleSelectionToggle(
        updatedSelections,
        groupKey,
        selectedItem,
        allowMultiple,
      );

      // Reset to default if no selections remain
      const hasSelections = Object.values(updatedSelections).some((values) => values.length > 0);
      if (!hasSelections) {
        updatedSelections = { ...defaultValue };
      }

      onChange(updatedSelections);
      return updatedSelections;
    });
  };

  /**
   * Determines the display text for the select trigger
   */
  const getDisplayValue = React.useCallback(() => {
    const globalExclusiveSelection = getGlobalExclusiveSelection(selectedValues, options);
    if (globalExclusiveSelection) return globalExclusiveSelection;

    const allSelectedValues = Object.values(selectedValues).flat();
    if (allSelectedValues.length === 0) return placeholder;
    if (allSelectedValues.length === 1) {
      const selectedValue = allSelectedValues[0];
      const selectedItem = options
        .flatMap((group) => group.items)
        .find((item) => item.value === selectedValue);
      return selectedItem?.label ?? placeholder;
    }
    return "Multiple";
  }, [selectedValues, options, placeholder]);

  // ------------------ Render ------------------
  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div {...props} className={cn(trigger(), "flex items-center justify-between")}>
          <span className={cn(triggerText())}>{getDisplayValue()}</span>
          {isPopoverOpen ? (
            <ChevronUp className={cn(triggerIcon())} />
          ) : (
            <ChevronDown className={cn(triggerIcon())} />
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent side="bottom" align="end" sideOffset={4} className={cn(content(), className)}>
        <Command>
          <CommandList>
            {options.map((group, idx) => {
              const groupKey = getGroupKey(group.groupLabel);
              return (
                <React.Fragment key={groupKey + idx}>
                  <MultipleSelectGroupContent
                    group={group}
                    groupKey={groupKey}
                    collapsedGroups={collapsedGroups}
                    selectedValues={selectedValues}
                    toggleGroupCollapse={toggleGroupCollapse}
                    toggleOption={toggleOption}
                    groupHeaderClasses={cn(groupHeader())}
                    groupHeaderIconClasses={groupHeaderIcon()}
                    itemClasses={cn(item(), itemsPosition())}
                    itemIconClasses={itemIcon()}
                  />
                </React.Fragment>
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
