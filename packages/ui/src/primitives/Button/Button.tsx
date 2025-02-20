import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "grey"
  | "subtle"
  | "error"
  | "success"
  | "outlined-error"
  | "outlined-success"
  | "outlined-primary"
  | "outlined-secondary"
  | "disabled"
  | "outlined-disabled"
  | "outlined-error-filled"
  | "outlined-success-filled"
  | "light-purple"
  | "light-green"
  | undefined;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  disabled?: boolean;
  asChild?: boolean;
  value?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export type ButtonSizes = "default" | "sm" | "md" | "lg" | "icon" | undefined;

// eslint-disable-next-line tailwindcss/no-custom-classname
const buttonVariants = tv({
  base: "inline-flex h-[32px] items-center justify-center gap-2 whitespace-nowrap rounded-[8px] px-[12px] py-[8px] font-ui-mono text-[14px] font-medium leading-[16px] ring-offset-white transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none dark:ring-offset-black",
  variants: {
    variant: {
      primary: "border-moss-700 bg-moss-700 text-white",
      secondary: "border-grey-50 bg-grey-50 text-black",
      grey: "border-grey-100 bg-grey-100 text-black",
      subtle: "bg-grey-50 text-black",
      error: "border-red-50 bg-red-50 text-red-700",
      success: "border-moss-50 bg-moss-50 text-moss-700",
      "outlined-error": "border-2 border-red-700 text-red-900",
      "outlined-success": "border-2 border-moss-500 text-moss-700",
      "outlined-primary": "border-2 border-moss-700 bg-white text-moss-700",
      "outlined-secondary": "border-2 border-grey-500 bg-white text-black",
      disabled: "border-grey-100 bg-grey-100 text-grey-500",
      "outlined-disabled": "border-2 border-grey-500 bg-white text-grey-500",
      "outlined-error-filled": "border-2 border-red-700 bg-red-50 text-red-900",
      "outlined-success-filled": "border-2 border-moss-500 bg-moss-50 text-moss-700",
      "light-purple": "border-purple-100 bg-purple-100 text-text-primary",
      "light-green": "border-moss-100 bg-moss-100 text-text-primary",
    },
    size: {
      sm: "h-[24px] px-[8px] py-[6px]",
      md: "h-[32px] px-[12px] py-[8px]",
      lg: "h-[40px] px-[16px] py-[10px]",
      icon: "size-32 p-0",
      default: "h-[32px] px-[12px] py-[8px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "default",
      disabled,
      asChild = false,
      value,
      icon,
      iconPosition = "left",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const appliedVariant = disabled
      ? variant?.startsWith("outlined")
        ? "outlined-disabled"
        : "disabled"
      : variant;

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: appliedVariant as ButtonVariants,
            size: size as ButtonSizes,
            className,
          }),
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {value && <span className={"font-ui-mono"}>{value}</span>}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
