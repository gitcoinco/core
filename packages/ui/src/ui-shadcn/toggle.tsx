import * as React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const toggleVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-grey-100 hover:text-grey-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grey-100 data-[state=on]:text-black dark:ring-offset-black dark:hover:bg-black dark:hover:text-grey-500 dark:focus-visible:ring-grey-100 dark:data-[state=on]:bg-black dark:data-[state=on]:text-grey-50",
  variants: {
    variant: {
      default: "bg-transparent",
      outline:
        "border border-grey-100 bg-transparent hover:bg-grey-100 hover:text-black dark:border-black dark:hover:bg-black dark:hover:text-grey-50",
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
