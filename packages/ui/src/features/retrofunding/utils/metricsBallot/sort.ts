import { BallotFieldValues } from "@/features/retrofunding/types/metricsBallot";

export const sortFieldsByOrder = (
  arr: BallotFieldValues[],
  sortOrder: string,
): BallotFieldValues[] => {
  const indexedFields = arr.map((field, index) => ({
    field,
    originalIndex: index,
  }));

  switch (sortOrder) {
    case "A-Z":
      indexedFields.sort((a, b) => a.field.name.localeCompare(b.field.name));
      break;
    case "Z-A":
      indexedFields.sort((a, b) => b.field.name.localeCompare(a.field.name));
      break;
    case "High to low":
      indexedFields.sort((a, b) => (b.field.amount || 0) - (a.field.amount || 0));
      break;
    case "Low to high":
      indexedFields.sort((a, b) => (a.field.amount || 0) - (b.field.amount || 0));
      break;
    default:
      break;
  }

  return indexedFields.map((item) => item.field);
};

export const sortOptions = [
  {
    groupLabel: "SORT BY NAME",
    items: ["A-Z", "Z-A"].map((value) => ({
      label: value,
      value,
    })),
  },
  {
    groupLabel: "SORT BY WEIGHT",
    items: ["High to low", "Low to high"].map((value) => ({
      label: value,
      value,
    })),
  },
];
