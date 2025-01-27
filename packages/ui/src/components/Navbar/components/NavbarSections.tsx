import * as React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib";

const navbarSectionStyle = tv({
  base: "flex items-center gap-4",
  variants: {
    section: {
      start: "",
      center: "hidden md:block",
      end: "",
    },
  },
});

export const NavbarStartSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(navbarSectionStyle({ section: "start" }), className)} {...props} />
));
NavbarStartSection.displayName = "NavbarStartSection";

export const NavbarCenterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(navbarSectionStyle({ section: "center" }), className)} {...props} />
));
NavbarCenterSection.displayName = "NavbarCenterSection";

export const NavbarEndSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(navbarSectionStyle({ section: "end" }), className)} {...props} />
));
NavbarEndSection.displayName = "NavbarEndSection";
