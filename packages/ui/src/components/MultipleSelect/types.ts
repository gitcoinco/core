import { IconType } from "@/primitives/Icon";

import { MultipleSelectVariantProps } from "./variants";

/* -------------------------------------------------------------------------------------------------
   Data interfaces for items and groups
------------------------------------------------------------------------------------------------- */
export interface MultipleSelectItem {
  label: string;
  value: string;
  iconType?: IconType;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  exclusive?: boolean;
  exclusiveScope?: "group" | "global";
}

export interface MultipleSelectGroup {
  groupLabel?: string;
  multiple?: boolean;
  collapsible?: boolean;
  items: MultipleSelectItem[];
}

/* -------------------------------------------------------------------------------------------------
   Our main MultipleSelect props: includes variant props, plus your existing props.
------------------------------------------------------------------------------------------------- */
export interface MultipleSelectProps {
  options: MultipleSelectGroup[];
  onChange: (values: Record<string, string[]>) => void;
  defaultValue?: Record<string, string[]>;
  placeholder?: string;
  className?: string;
  variants?: Partial<MultipleSelectVariantProps>;
}
