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

interface NavbarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const NavbarStartSection = ({ className, ...props }: NavbarSectionProps) => (
  <div className={cn(navbarSectionStyle({ section: "start" }), className)} {...props} />
);
NavbarStartSection.displayName = "NavbarStartSection";

export const NavbarCenterSection = ({ className, ...props }: NavbarSectionProps) => (
  <div className={cn(navbarSectionStyle({ section: "center" }), className)} {...props} />
);
NavbarCenterSection.displayName = "NavbarCenterSection";

export const NavbarEndSection = ({ className, ...props }: NavbarSectionProps) => (
  <div className={cn(navbarSectionStyle({ section: "end" }), className)} {...props} />
);
NavbarEndSection.displayName = "NavbarEndSection";
