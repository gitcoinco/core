import { MultipleSelectGroup, MultipleSelectItem } from "./types";

/**
 * Gets a unique key for a group, defaults to "ungrouped" if no label provided
 */
export const getGroupKey = (groupLabel?: string) => groupLabel ?? "ungrouped";

/**
 * Filters out global exclusive selections from the selected values
 */
export const handleNonExclusiveSelection = (
  currentSelections: Record<string, string[]>,
  availableGroups: MultipleSelectGroup[],
) => {
  Object.entries(currentSelections).forEach(([groupKey, selectedValues]) => {
    const groupItems = availableGroups.find((group) => getGroupKey(group.groupLabel) === groupKey)
      ?.items;
    const nonExclusiveValues = selectedValues.filter((selectedValue) => {
      const matchingItem = groupItems?.find((item) => item.value === selectedValue);
      return !(matchingItem?.exclusive && matchingItem?.exclusiveScope === "global");
    });
    currentSelections[groupKey] = nonExclusiveValues;
  });
  return currentSelections;
};

/**
 * Handles exclusive selection logic - clears all selections for global scope
 * or clears specific group for group scope
 */
export const handleExclusiveSelection = (
  currentSelections: Record<string, string[]>,
  groupKey: string,
  exclusiveScope: "group" | "global" = "group",
) => {
  if (exclusiveScope === "global") {
    return {};
  }
  currentSelections[groupKey] = [];
  return currentSelections;
};

/**
 * Toggles selection state for an item, handling both single and multiple selection modes
 */
export const handleSelectionToggle = (
  currentSelections: Record<string, string[]>,
  groupKey: string,
  selectedItem: MultipleSelectItem,
  allowMultiple?: boolean,
) => {
  if (!allowMultiple) {
    const isItemSelected = currentSelections[groupKey]?.includes(selectedItem.value);
    currentSelections[groupKey] = isItemSelected ? [] : [selectedItem.value];
  } else {
    const groupSelections = currentSelections[groupKey] || [];
    const isItemSelected = groupSelections.includes(selectedItem.value);
    if (isItemSelected) {
      currentSelections[groupKey] = groupSelections.filter((value) => value !== selectedItem.value);
    } else {
      currentSelections[groupKey] = [...groupSelections, selectedItem.value];
    }
  }
  return currentSelections;
};

/**
 * Returns the label of the first globally exclusive selected item, if any
 */
export const getGlobalExclusiveSelection = (
  currentSelections: Record<string, string[]>,
  availableGroups: MultipleSelectGroup[],
) => {
  return Object.entries(currentSelections)
    .flatMap(([groupKey, selectedValues]) => {
      const matchingGroup = availableGroups.find(
        (group) => getGroupKey(group.groupLabel) === groupKey,
      );
      return selectedValues.map((selectedValue) => {
        const matchingItem = matchingGroup?.items.find((item) => item.value === selectedValue);
        return matchingItem?.exclusive && matchingItem?.exclusiveScope === "global"
          ? matchingItem.label
          : null;
      });
    })
    .filter(Boolean)[0];
};
