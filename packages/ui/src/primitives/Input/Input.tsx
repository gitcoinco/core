import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-grey-100 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-black placeholder:text-grey-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-black dark:bg-black dark:ring-offset-black dark:file:text-grey-50 dark:placeholder:text-grey-500 dark:focus-visible:ring-grey-100",
          disabled &&
            "flex cursor-not-allowed gap-2 rounded-md bg-grey-100 px-3 py-2 font-normal text-grey-500",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
