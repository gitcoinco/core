import { BallotFieldValues } from "@/features/retrofunding/types/metricsBallot";

/**
 * Distributes a total available amount evenly among an array of items.
 * If there's a remainder after division, it assigns the remainder to the last field.
 *
 * @param items - Array of items to distribute the amount to.
 * @param totalAvailable - The total amount to distribute.
 * @returns An array of objects containing the field's metricId and its newly allocated amount.
 */
export const calculateDistribution = (
  items: (BallotFieldValues & { id?: string })[],
  totalAvailable: number,
): { metricId?: string; newAmount: number }[] => {
  if (items.length === 0) return [];

  const amountPerField = Math.floor(totalAvailable / items.length);
  const remainder = totalAvailable % items.length;

  return items.map((field, index) => ({
    metricId: field.metricId,
    newAmount: amountPerField + (index === items.length - 1 ? remainder : 0),
  }));
};

/**
 * Calculates the available amount that can be allocated to unlocked items.
 *
 * @param items - Array of items to check.
 * @param max - The maximum total allocation allowed.
 * @returns The available amount after subtracting locked field amounts.
 */
export const getAvailableAmount = (items: BallotFieldValues[], max: number): number => {
  const totalLockedAmount = items.reduce(
    (sum, field) => sum + (field.locked ? field.amount || 0 : 0),
    0,
  );
  return max - totalLockedAmount;
};

/**
 * Calculates the total amount allocated across all items.
 *
 * @param items - Array of items to calculate the total allocation for.
 * @returns The sum of all field amounts.
 */
export const getTotalAllocation = (items: BallotFieldValues[]): number => {
  return items.reduce((sum, field) => sum + (field.amount || 0), 0);
};

/**
 * Toggles the locked state of a specific field.
 *
 * @param index - The index of the field to toggle.
 * @param items - The array of items.
 * @param update - A callback function to update the field at the given index.
 */
export const toggleLock = (
  index: number,
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
) => {
  const field = items[index];
  update(index, { ...field, locked: !field.locked });
};

/**
 * Increases the amount allocated to a specific field, if allowed.
 *
 * @param index - The index of the field to update.
 * @param items - The array of items.
 * @param update - A callback function to update the field at the given index.
 * @param maxAllocation - The maximum total allocation allowed.
 */
export const handleIncrease = (
  index: number,
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
  maxAllocation: number,
) => {
  const field = items[index];
  const currentAmount = field.amount || 0;
  const totalAllocation = getTotalAllocation(items);

  if (!field.locked && currentAmount < maxAllocation && totalAllocation < maxAllocation) {
    update(index, { ...field, amount: currentAmount + 1 });
  }
};

/**
 * Decreases the amount allocated to a specific field, if allowed.
 *
 * @param index - The index of the field to update.
 * @param items - The array of items.
 * @param update - A callback function to update the field at the given index.
 */
export const handleDecrease = (
  index: number,
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
) => {
  const field = items[index];
  const currentAmount = field.amount || 0;

  if (!field.locked && currentAmount > 0) {
    update(index, { ...field, amount: currentAmount - 1 });
  }
};

/**
 * Sets a specific amount for a field, ensuring the total allocation does not exceed the maximum.
 *
 * @param index - The index of the field to update.
 * @param items - The array of items.
 * @param update - A callback function to update the field at the given index.
 * @param maxAllocation - The maximum total allocation allowed.
 * @param newAmount - The new amount to set for the field.
 */
export const handleSetAmount = (
  index: number,
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
  maxAllocation: number,
  newAmount: number,
) => {
  const field = items[index];
  if (!field.locked) {
    const currentAmount = field.amount || 0;
    const otheritemsTotal = getTotalAllocation(items) - currentAmount;
    if (otheritemsTotal + newAmount <= maxAllocation) {
      update(index, { ...field, amount: newAmount });
    } else {
      // Set to the remaining available amount
      const available = maxAllocation - otheritemsTotal;
      update(index, { ...field, amount: Math.max(0, available) });
    }
  }
};

/**
 * Removes a field and redistributes its amount to the remaining unlocked items.
 *
 * @param index - The index of the field to remove.
 * @param items - The array of items.
 * @param update - A callback function to update a field at a given index.
 * @param remove - A callback function to remove a field at a given index.
 * @param maxAllocation - The maximum total allocation allowed.
 */
export const handleRemove = (
  index: number,
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
  remove: (index: number) => void,
  maxAllocation: number,
) => {
  const field = items[index];
  if (!field.locked) {
    const itemsBeforeRemoval = [...items];
    const removedFieldId = field.metricId;

    // Gather remaining unlocked items
    const remainingUnlockeditems = itemsBeforeRemoval.filter(
      (f) => !f.locked && f.metricId !== removedFieldId,
    );

    if (remainingUnlockeditems.length > 0) {
      // Calculate the total locked amount
      const totalLockedAmount = itemsBeforeRemoval.reduce(
        (sum, f) => sum + (f.locked ? f.amount || 0 : 0),
        0,
      );
      const availableAmount = maxAllocation - totalLockedAmount;

      // Distribute the available amount among remaining unlocked items
      const distribution = calculateDistribution(remainingUnlockeditems, availableAmount);

      // Remove the field
      remove(index);

      // Update the remaining unlocked items with their new amounts
      remainingUnlockeditems.forEach((f) => {
        const distributionForField = distribution.find((d) => d.metricId === f.metricId);
        if (!distributionForField) return;

        const originalIndex = itemsBeforeRemoval.findIndex((orig) => orig.metricId === f.metricId);
        const adjustedIndex = originalIndex > index ? originalIndex - 1 : originalIndex;
        if (adjustedIndex !== -1) {
          update(adjustedIndex, { ...f, amount: distributionForField.newAmount });
        }
      });
    } else {
      // If there are no other unlocked items, just remove the field
      remove(index);
    }
  }
};

/**
 * Checks if a metric is already added to the items.
 *
 * @param metricId - The ID of the metric to check.
 * @param items - The array of items.
 * @returns True if the metric is already added, otherwise false.
 */
export const isMetricAdded = (metricId: string, items: BallotFieldValues[]): boolean => {
  return items.some((f) => f.metricId === metricId);
};

/**
 * Checks if a metric is locked.
 *
 * @param metricId - The ID of the metric to check.
 * @param items - The array of items.
 * @returns True if the metric is locked, otherwise false.
 */
export const isMetricLocked = (metricId: string, items: BallotFieldValues[]): boolean => {
  return items.some((f) => f.metricId === metricId && f.locked);
};

/**
 * Toggles the addition or removal of a metric in the items.
 * If the metric is already added, it removes it and redistributes its amount.
 * If the metric is not added, it adds it and distributes the available amount.
 *
 * @param metric - The metric to add or remove.
 * @param items - The array of items.
 * @param update - A callback function to update a field at a given index.
 * @param remove - A callback function to remove a field at a given index.
 * @param maxAllocation - The maximum total allocation allowed.
 */
export const handleMetricToggle = (
  metric: { title: string; description: string; metricId: string },
  items: BallotFieldValues[],
  update: (index: number, value: BallotFieldValues) => void,
  remove: (index: number) => void,
  maxAllocation: number,
) => {
  const isAlreadyAdded = isMetricAdded(metric.metricId, items);
  if (isAlreadyAdded) {
    const index = items.findIndex((f) => f.metricId === metric.metricId);
    if (index !== -1) {
      handleRemove(index, items, update, remove, maxAllocation);
    }
  } else {
    // Create a new field for the metric
    const newField: BallotFieldValues = {
      metricId: metric.metricId,
      name: metric.title,
      amount: 0,
      locked: false,
    };

    // Combine existing unlocked items with the new field
    const allUnlockeditems = [
      ...items.filter((f) => !f.locked),
      { ...newField, id: "temp-" + metric.metricId }, // Temporary ID for distribution
    ];

    // Calculate the available amount for distribution
    const availableAmount = getAvailableAmount(items, maxAllocation);

    // Distribute the available amount among all unlocked items
    const distribution = calculateDistribution(allUnlockeditems, availableAmount);

    // Update existing unlocked items with their new amounts
    distribution.slice(0, -1).forEach((dist) => {
      const existingIndex = items.findIndex((f) => f.metricId === dist.metricId);
      if (existingIndex !== -1) {
        update(existingIndex, { ...items[existingIndex], amount: dist.newAmount });
      }
    });

    // Add the new field with its allocated amount
    const newFieldAmount = distribution[distribution.length - 1].newAmount;
    update(items.length, { ...newField, amount: newFieldAmount });
  }
};
