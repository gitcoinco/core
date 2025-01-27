import { tv, VariantProps } from "tailwind-variants";

export const multipleSelect = tv({
  base: "font-ui-sans",
  slots: {
    /* The root trigger button */
    trigger:
      "flex items-center justify-between rounded-md  font-ui-sans text-body font-medium hover:bg-transparent",

    /* The text inside the trigger */
    triggerText: "text-white",

    /* The icon inside the trigger (e.g., chevron up/down) */
    triggerIcon: "size-5 transition-transform duration-200",

    /* The popover content container */
    content: "overflow-hidden rounded-2xl",

    /* Group heading row, optionally collapsible */
    groupHeader: "flex cursor-pointer items-center justify-between space-x-2 bg-transparent ",

    /* The icon for collapsing a group (chevron) */
    groupHeaderIcon: "size-5 transition-transform duration-200",

    /* The item row container (each selectable row in the list) */
    item: "flex cursor-pointer items-center",

    /* The icon within each item row (left or right position) */
    itemIcon: "flex-shrink-0",

    /* The position of the items in the list */
    itemsPosition: "justify-start",
  },

  variants: {
    color: {
      default: {
        trigger: "bg-transparent hover:bg-transparent",
        triggerIcon: "text-grey-500 ",
        triggerText: "font-ui-sans font-medium",
        content: "",
        groupHeader: "font-medium text-black",
        groupHeaderIcon: "text-black",
        item: "font-ui-sans font-normal text-black",
      },
      grey: {
        trigger: "bg-transparent text-grey-900 hover:bg-transparent",
        triggerIcon: "",
        content: "font-ui-sans text-base font-normal text-black",
        groupHeader: "text-grey-300",
        groupHeaderIcon: "",
        item: "text-grey-900",
      },
    },
    size: {
      default: {
        trigger: "flex gap-1 bg-transparent",
        triggerText: "text-body",
        content: "w-full p-1",
        groupHeader: "text-body",
        groupHeaderIcon: "size-5",
        item: "text-base",
        itemIcon: "size-4",
      },
      sm: {},
    },
    rounded: {
      default: {
        content: "rounded-2xl",
        item: "rounded-lg",
      },
    },

    itemsPosition: {
      start: {
        itemsPosition: "justify-start",
      },
      end: {
        itemsPosition: "justify-end",
        content: "justify-end text-end",
      },
      center: {
        itemsPosition: "justify-center",
        content: "justify-center text-center",
      },
    },
    headerPosition: {
      start: {
        groupHeader: "justify-start",
      },
      end: {
        groupHeader: "justify-end",
      },
      center: {
        groupHeader: "justify-center",
      },
    },
    triggerTextColor: {
      default: {
        triggerText: "text-black",
      },
      red: {
        triggerText: "text-red-500",
      },
      green: {
        triggerText: "text-moss-700",
      },
    },
    itemsColor: {
      default: {
        item: "text-black",
        itemIcon: "text-black",
      },
      "light-grey": {
        item: "text-grey-500",
        itemIcon: "text-grey-500",
      },
    },
  },

  defaultVariants: {
    color: "default",
    size: "default",
    position: "start",
    rounded: "default",
    triggerTextColor: "default",
    itemsColor: "default",
  },
});

export type MultipleSelectVariantProps = VariantProps<typeof multipleSelect>;
