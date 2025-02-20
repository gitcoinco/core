import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

import { Skeleton } from "../Skeleton";

export type BadgeVariants =
  | "info"
  | "success"
  | "warning"
  | "success-strong"
  | "warning-strong"
  | "error-strong"
  | "info-strong"
  | "outlined-info"
  | "outlined-success"
  | "outlined-warning"
  | "outlined-success-strong"
  | "outlined-warning-strong"
  | "outlined-info-strong"
  | undefined;

const badgeVariants = tv({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] px-[12px] py-[2px] font-ui-mono text-[12px] font-normal leading-[18px] text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none dark:ring-offset-black",
  variants: {
    variant: {
      info: "border-transparent bg-yellow-100",
      success: "border-transparent bg-green-100",
      warning: "border-transparent bg-red-100",
      // error: "border-transparent bg-red-300",
      "success-strong": "border-transparent bg-green-300",
      "warning-strong": "border-transparent bg-red-300",
      "error-strong": "border-transparent bg-red-500",
      "info-strong": "border-transparent bg-yellow-300",
      "outlined-info": "border-2 border-yellow-100 bg-white",
      "outlined-success": "border-2 border-green-100 bg-white",
      "outlined-warning": "border-2 border-red-100 bg-white",
      "outlined-error": "border border-red-900 bg-white text-red-900",
      "outlined-success-strong": "border-2 border-green-300 bg-white",
      "outlined-warning-strong": "border-2 border-red-300 bg-white",
      "outlined-info-strong": "border-2 border-yellow-300 bg-white",
      skeleton: "h-[22px] border-transparent bg-grey-100",
    },
    size: {
      xs: "min-w-[68px]",
      sm: "min-w-[82px]",
      md: "min-w-[112px]",
      lg: "min-w-[142px]",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  size?: keyof typeof badgeVariants.variants.size;
  skeleton?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "info", size = "sm", skeleton = false, ...props }, ref) => {
    return skeleton ? (
      <Skeleton
        className={cn(badgeVariants({ variant: "skeleton", size }), className)}
        {...props}
      />
    ) : (
      <div className={cn(badgeVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
