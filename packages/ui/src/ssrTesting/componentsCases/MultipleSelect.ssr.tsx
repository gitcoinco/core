import { SSRComponent } from "@gitcoin/types";

import { MultipleSelectProps } from "@/components/MultipleSelect";

import { MultipleSelectHelper } from "./helperComponents/MultipleSelectHelper";

const multipleSelectSSR: SSRComponent<Omit<MultipleSelectProps, "onChange">> = {
  component: MultipleSelectHelper,
  isClient: true,
  tooltipMessage:
    " Cannot update a component (`HotReload`) while rendering a different component (`MultipleSelectGroupContent`)",
  cases: [
    {
      label: "Basic",
      props: {
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
      },
    },
    {
      label: "Order by",
      props: {
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
      },
    },
    {
      label: "Filter",
      props: {
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
      },
    },
    {
      label: "Mixed selection types",
      props: {
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
      },
    },
    {
      label: "With variants",
      props: {
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
        className: "w-40",
      },
    },
  ],
};

export default multipleSelectSSR;
