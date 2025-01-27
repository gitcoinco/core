import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { MultipleSelect } from "./MultipleSelect";

const onChange = action("onChange");

const meta = {
  title: "Components/MultipleSelect",
  component: MultipleSelect,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MultipleSelect>;

export default meta;
type Story = StoryObj<typeof MultipleSelect>;

// Basic example with single group
export const Basic: Story = {
  args: {
    options: [
      {
        items: [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ],
      },
    ],
    placeholder: "Select options",
    onChange: (values) => onChange(values),
  },
};

// Example with exclusive options (like order by)
export const OrderByExample: Story = {
  args: {
    options: [
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
    ],
    defaultValue: { "ORDER BY TIME": ["Recent"] },
    variants: {
      triggerTextColor: "green",
      headerPosition: "end",
      itemsPosition: "end",
    },
    placeholder: "Order by",
    className: "w-40",
    onChange: (values) => onChange(values),
  },
};

// Example with filters including "All" option and collapsible groups
export const FilterExample: Story = {
  args: {
    options: [
      {
        multiple: false,
        items: [
          {
            label: "All",
            value: "All-id",
            exclusive: true,
            exclusiveScope: "global",
          },
        ],
      },
      {
        groupLabel: "Network",
        multiple: true,
        collapsible: true,
        items: [
          { label: "Rounds on Ethereum", value: "1" },
          { label: "Rounds on Polygon", value: "137" },
          { label: "Rounds on Optimism", value: "10" },
        ],
      },
      {
        groupLabel: "Status",
        multiple: true,
        collapsible: true,
        items: [
          { label: "Active", value: "active" },
          { label: "Taking Applications", value: "applications" },
          { label: "Finished", value: "finished" },
        ],
      },
    ],
    defaultValue: { ungrouped: ["All-id"] },
    variants: { triggerTextColor: "red" },
    placeholder: "Filter by",
    className: "w-64",
    onChange: (values) => onChange(values),
  },
};

// Example with mixed exclusive and non-exclusive options
export const MixedSelectionTypes: Story = {
  args: {
    options: [
      {
        groupLabel: "Special Actions",
        items: [
          {
            label: "Reset All",
            value: "reset",
            exclusive: true,
            exclusiveScope: "global",
          },
        ],
      },
      {
        groupLabel: "Regular Options",
        multiple: true,
        items: [
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ],
      },
    ],
    placeholder: "Select options",
    onChange: (values) => onChange(values),
  },
};

// Example with all variant options
export const WithVariants: Story = {
  args: {
    options: [
      {
        groupLabel: "Group 1",
        multiple: true,
        collapsible: true,
        items: [
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ],
      },
    ],

    variants: {
      triggerTextColor: "green",
      headerPosition: "end",
      itemsPosition: "end",
    },

    placeholder: "Select with variants",
    onChange: (values) => onChange(values),
    className: "w-40",
  },
};
