import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const alertVariants = tv({
  base: "relative w-full rounded-lg border border-grey-100 p-4 dark:border-black [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-black dark:[&>svg]:text-grey-50 [&>svg~*]:pl-7",
  variants: {
    variant: {
      default: "bg-white text-black dark:bg-black dark:text-grey-50",
      destructive:
        "border-red-700/50 text-red-700 dark:border-red-500 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) => (
  <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);
Alert.displayName = "Alert";

const AlertTitle = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({ className, ...props }: React.ComponentProps<"p">) => (
  <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
