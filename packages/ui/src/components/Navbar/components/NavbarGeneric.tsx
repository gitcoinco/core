"use client";

import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib";

import { filterAndSortChildren } from "../utils/filterAndSortChildren";

const navbarVariants = tv({
  base: "z-50 flex h-16 w-full items-center justify-between bg-white/5 px-20 py-2.5",
  variants: {
    behavior: {
      static: "",
      sticky: "sticky top-0",
      fixed: "fixed top-0",
    },
    blur: {
      true: "backdrop-blur-[22px]",
      false: "",
    },
    shadow: {
      true: "shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]",
      false: "",
    },
  },
  defaultVariants: {
    behavior: "sticky",
    blur: true,
    shadow: true,
  },
});

export interface NavbarGenericProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {
  /** Children should be NavbarStartSection, NavbarCenterSection, or NavbarEndSection components */
  children?: React.ReactNode;
  /** Position of the navbar: static, sticky, or fixed
   * @default sticky
   */
  behavior?: "static" | "sticky" | "fixed";
  /** Enables a backdrop blur effect behind the navbar. Useful for transparent or semi-transparent navbars.
   * @default true
   */
  blur?: boolean;
  /** Adds a subtle shadow below the navbar to create depth and separation from the content.
   * @default true
   */
  shadow?: boolean;
}

export const NavbarGeneric = React.forwardRef<HTMLDivElement, NavbarGenericProps>(
  ({ className, behavior, children, blur, shadow, ...props }, ref) => {
    const navbarStyle = navbarVariants({ behavior, blur, shadow });
    const filteredChildren = filterAndSortChildren(children);
    return (
      <div ref={ref} className={cn(navbarStyle, className)} {...props}>
        {filteredChildren}
      </div>
    );
  },
);
NavbarGeneric.displayName = "NavbarGeneric";
