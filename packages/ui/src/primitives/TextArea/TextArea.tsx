"use client";

import * as React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const textareaVariants = tv({
  base: "flex w-full rounded-md border border-grey-100 bg-white text-sm placeholder:text-grey-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grey-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      xs: "min-h-[60px] px-2 py-1",
      sm: "min-h-[80px] px-3 py-2",
      md: "min-h-[120px] px-3 py-2",
      lg: "min-h-[150px] px-4 py-3",
      xl: "min-h-[200px] px-5 py-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  heading?: React.ReactNode; // New heading prop
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, heading, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {heading && (
          <div className="font-ui-sans text-[16px] font-bold leading-[24px]">{heading}</div>
        )}
        <textarea className={cn(textareaVariants({ size }), className)} ref={ref} {...props} />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
