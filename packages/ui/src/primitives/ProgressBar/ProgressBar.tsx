"use client";

import * as React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { tv } from "tailwind-variants";

export interface ProgressBarProps {
  value: number;
  className?: string;
  variant?: ProgressVariants;
  withLabel?: boolean;
}

export type ProgressVariants = "default" | "green" | "green-md";

const progressVariants = tv({
  slots: {
    root: "relative h-4 w-full overflow-hidden rounded-full",
    indicator: "size-full flex-1 transition-all",
  },
  variants: {
    variant: {
      default: {
        root: "bg-grey-100 dark:bg-black",
        indicator: "bg-black dark:bg-grey-50",
      },
      green: {
        root: " bg-grey-100",
        indicator: "bg-moss-700",
      },
      "green-md": {
        root: "w-[228px] bg-grey-100",
        indicator: "bg-moss-700",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "default" | "green" | "green-md";
    withLabel?: boolean;
  }
>(({ className, value, variant = "default", withLabel = false, ...props }, ref) => {
  const { root, indicator } = progressVariants({ variant });

  return (
    <div className="flex flex-col gap-2">
      <ProgressPrimitive.Root ref={ref} className={`${root()} ${className}`} {...props}>
        <ProgressPrimitive.Indicator
          className={indicator()}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {withLabel && value !== undefined && value !== null && (
        <p className="text-sm">{value.toFixed(0)}% complete</p>
      )}
    </div>
  );
});

ProgressBar.displayName = ProgressPrimitive.Root.displayName;
