"use client";

import * as React from "react";

import { cn } from "@gitcoin/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { tv, VariantProps } from "tailwind-variants";

const switchVariants = tv({
  slots: {
    base: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-moss-700 data-[state=unchecked]:bg-grey-100",
    thumb:
      "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  },
  variants: {
    color: {
      moss: {
        base: "data-[state=checked]:bg-moss-700 data-[state=unchecked]:bg-grey-100",
        thumb: "bg-white",
      },
      black: {
        base: "data-[state=checked]:bg-black data-[state=unchecked]:bg-grey-100",
        thumb: "bg-white",
      },
      purple: {
        base: "data-[state=checked]:bg-purple-700 data-[state=unchecked]:bg-grey-100",
        thumb: "bg-white",
      },
      white: {
        base: "data-[state=checked]:bg-white data-[state=unchecked]:bg-grey-100",
        thumb: "bg-black",
      },
    },
  },
  defaultVariants: {
    color: "moss",
  },
});

type SwitchVariants = VariantProps<typeof switchVariants>;

const Switch = ({
  className,
  checked,
  onCheckedChange,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root> & SwitchVariants) => {
  const { color, ...rest } = props;
  const { base, thumb } = switchVariants({ color });

  return (
    <SwitchPrimitives.Root
      className={cn(base(), className)}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...rest}
    >
      <SwitchPrimitives.Thumb className={thumb()} />
    </SwitchPrimitives.Root>
  );
};
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
