import { tv, VariantProps } from "tailwind-variants";

import { SpinnerIcon } from "@/assets";
import { cn } from "@/lib";

const variants = tv({
  base: "shrink-0 animate-spin fill-black dark:fill-white",
  variants: {
    size: {
      sm: "size-4",
      md: "size-8",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface SpinnerProps extends VariantProps<typeof variants> {
  className?: string;
}

export const Spinner = ({ className, size = "sm" }: SpinnerProps) => {
  const classes = variants({ size });
  return <SpinnerIcon className={cn(classes, className)} />;
};
