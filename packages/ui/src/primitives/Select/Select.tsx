"use client";

import * as React from "react";

import { cn } from "@gitcoin/utils";
import { SelectGroup } from "@radix-ui/react-select";
import { tv, type VariantProps } from "tailwind-variants";

import { IconType } from "@/primitives/Icon";
import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/ui-shadcn/select";

import { Label } from "./Label";

export interface SelectProps
  extends VariantProps<typeof selectStyles>,
    React.ComponentProps<typeof SelectContent> {
  options: {
    groupLabel?: string;
    items: {
      label: string;
      value: string;
      icon?: React.ReactNode;
      iconPosition?: "left" | "right";
      iconType?: IconType;
    }[];
    separator?: boolean;
  }[];
  placeholder?: React.ReactNode;
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
}

const selectStyles = tv({
  base: "h-10 rounded-md border text-sm",
  slots: {
    trigger: "h-10 rounded-md border text-sm",
    item: "",
    label: "",
    icon: "h-5 w-5",
  },
  variants: {
    variant: {
      default: {
        trigger: "border-transparent bg-white ",
        content: "",
        item: "",
        label: "",
      },
      outlined: {
        trigger: "border-transparent bg-transparent",
        item: "",
        label: "",
      },
      filled: {
        trigger: " bg-grey-200 text-grey-900",
        content: "",
        item: "",
        label: "",
      },
    },
    size: {
      sm: {
        trigger: "h-6 gap-1 text-xs",
        item: "text-xs ",
        label: "text-xs",
        icon: "size-3",
      },
      md: {
        trigger: "h-10 px-3 py-2 text-sm",
        item: "text-sm",
        label: "text-sm",
        icon: "h-4 w-4",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const getSelectedItem = (
  options: SelectProps["options"],
  value?: string,
  defaultValue?: string,
) => {
  const itemValue = value || defaultValue;
  return options
    .find((option) => option.items.find((item) => item.value === itemValue))
    ?.items.find((item) => item.value === itemValue);
};

export const Select = ({
  options,
  placeholder = "Select an option",
  onValueChange,
  defaultValue,
  value,
  variant,
  size,
  className,
  disabled,
  position,
  side,
  align,
}: SelectProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const selectedItem = getSelectedItem(options, currentValue, defaultValue);
  const { trigger, item: selectItem, label, icon } = selectStyles({ variant, size, className });

  return (
    <ShadcnSelect
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
      value={currentValue}
      disabled={disabled}
    >
      <SelectTrigger className={cn(trigger(), className)}>
        {selectedItem ? <Label {...selectedItem} iconClassName={icon()} /> : placeholder}
      </SelectTrigger>
      <SelectContent className="min-w-fit" position={position} side={side} align={align}>
        {options.map((group, index) => (
          <React.Fragment key={index}>
            {group.groupLabel && (
              <SelectGroup>
                <SelectLabel className={label()}>{group.groupLabel}</SelectLabel>
              </SelectGroup>
            )}
            {group.items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                indicatorClassName={cn("size-4", icon())}
              >
                <Label
                  label={item.label}
                  icon={item.icon}
                  iconPosition={item.iconPosition}
                  className={selectItem()}
                  iconClassName={icon()}
                />
              </SelectItem>
            ))}
            {group.separator && <SelectSeparator />}
          </React.Fragment>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};
