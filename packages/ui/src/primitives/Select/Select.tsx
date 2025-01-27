"use client";

import * as React from "react";

import { SelectGroup } from "@radix-ui/react-select";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
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

export interface SelectProps {
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
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const selectStyles = tv({
  base: "h-10 rounded-md border text-sm",
  slots: {
    trigger: "h-10 rounded-md border text-sm",
    item: "",
    label: "",
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
        trigger: "h-8 gap-1 text-xs",
        item: "h-8 text-xs",
        label: "text-xs",
      },
      md: {
        trigger: "h-10 px-3 py-2 text-sm",
        item: "text-sm",
        label: "text-sm",
      },
      lg: {
        trigger: "h-12 gap-2 text-base",
        item: "text-base",
        label: "",
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
}: SelectProps) => {
  const item = getSelectedItem(options, value, defaultValue);

  React.useEffect(() => {
    if (item && onValueChange) {
      onValueChange(item.value);
    }
  }, [item, onValueChange]);

  const { trigger, item: selectItem, label } = selectStyles({ variant, size, className });
  return (
    <ShadcnSelect
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value || defaultValue}
    >
      <SelectTrigger className={cn(trigger(), className)}>
        {item ? <Label {...item} /> : placeholder}
      </SelectTrigger>
      <SelectContent>
        {options.map((group, index) => (
          <React.Fragment key={index}>
            {group.groupLabel && (
              <SelectGroup>
                <SelectLabel className={label()}>{group.groupLabel}</SelectLabel>
              </SelectGroup>
            )}
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <Label
                  label={item.label}
                  icon={item.icon}
                  iconPosition={item.iconPosition}
                  className={selectItem()}
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
