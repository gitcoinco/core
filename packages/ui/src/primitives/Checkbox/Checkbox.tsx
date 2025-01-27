"use client";

import * as React from "react";

import { CheckIcon } from "@heroicons/react/solid";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const checkboxVariants = tv({
  slots: {
    base: "peer size-4 rounded-sm border border-moss-300 text-center ring-offset-white hover:border-moss-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-moss-500 data-[state=checked]:text-grey-50",
  },
  variants: {
    size: {
      sm: {
        base: "size-4",
      },
      md: {
        base: "size-5",
      },
      lg: {
        base: "size-6",
      },
    },
    color: {
      moss: {
        base: "border-moss-700 hover:border-moss-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-900 focus-visible:ring-offset-2 data-[state=checked]:bg-moss-700 data-[state=unchecked]:bg-transparent data-[state=checked]:text-white data-[state=unchecked]:text-white",
      },
      black: {
        base: "border-grey-300 hover:border-grey-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-500 focus-visible:ring-offset-2 data-[state=checked]:bg-black data-[state=unchecked]:bg-transparent data-[state=checked]:text-grey-50 data-[state=unchecked]:text-grey-50",
      },
      white: {
        base: "border-black hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 data-[state=checked]:bg-white data-[state=unchecked]:bg-transparent data-[state=checked]:text-black data-[state=unchecked]:text-black dark:border-grey-50 dark:hover:border-grey-200 dark:focus-visible:ring-grey-200 dark:data-[state=checked]:bg-grey-50 dark:data-[state=checked]:text-black dark:data-[state=unchecked]:text-grey-50",
      },
      purple: {
        base: "border-purple-700 hover:border-purple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-900 focus-visible:ring-offset-2 data-[state=checked]:bg-purple-700 data-[state=unchecked]:bg-transparent data-[state=checked]:text-grey-50 data-[state=unchecked]:text-white",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "moss",
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxVariants
>(({ className, ...props }, ref) => {
  const { size, color, ...rest } = props;
  const { base } = checkboxVariants({ size, color });

  return (
    <CheckboxPrimitive.Root ref={ref} className={cn(base(), className)} {...rest}>
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
