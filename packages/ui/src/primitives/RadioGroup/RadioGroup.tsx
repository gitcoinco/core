"use client";

import * as React from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const radioGroup = tv({
  slots: {
    root: "grid gap-5 gap-y-1",
    item: "flex items-center gap-2",
    itemDisabled: "cursor-not-allowed opacity-50",
    indicatorWrapper: "relative size-4 rounded-full border border-solid border-grey-300",
    indicatorWrapperDisabled: "bg-grey-300",
    indicator: "absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
    text: "font-ui-sans text-[16px] leading-[24px]",
    circle: "size-2 fill-current text-black",
    header: "font-ui-sans text-[16px] font-bold leading-[24px]",
  },
  variants: {
    indicatorBg: {
      true: "bg-black",
      false: "",
    },
  },
});

const {
  root,
  item,
  itemDisabled,
  indicatorWrapper,
  indicatorWrapperDisabled,
  indicator,
  text,
  circle,
  header,
} = radioGroup();

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupPrimitive.RadioGroupProps & { buttonsPerRow?: number; heading?: React.ReactNode }
>(({ className, buttonsPerRow = 2, heading, ...props }, ref) => {
  const gridTemplateColumns = `repeat(${buttonsPerRow}, max-content)`;

  return (
    <div className="flex flex-col gap-4">
      {heading && (
        <div className={typeof heading === "string" ? cn(header()) : undefined}>
          {typeof heading === "string" ? heading : heading}
        </div>
      )}
      <RadioGroupPrimitive.Root
        className={cn(root(), className)}
        style={{ gridTemplateColumns }}
        {...props}
        ref={ref}
      />
    </div>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, "checked"> & {
    label: string;
    disabled?: boolean;
  }
>(({ className, label, disabled, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(item(), disabled && itemDisabled(), className)}
      disabled={disabled}
      {...props}
    >
      <div className={cn(indicatorWrapper(), disabled && indicatorWrapperDisabled(), className)}>
        <RadioGroupPrimitive.Indicator
          className={cn(indicator(), { indicatorBg: true }, className)}
        >
          <Circle className={cn(circle(), className)} />
        </RadioGroupPrimitive.Indicator>
      </div>
      {label && <span className={cn(text(), className)}>{label}</span>}
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
