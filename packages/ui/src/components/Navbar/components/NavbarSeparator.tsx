import * as React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib";

const separatorStyle = tv({
  base: "h-4 w-0 border-1.5 border-grey-900 bg-grey-900",
});

interface NavbarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const NavbarSeparator = ({ className, ...props }: NavbarSeparatorProps) => (
  <div className={cn(separatorStyle(), className)} {...props} />
);
NavbarSeparator.displayName = "NavbarSeparator";

export { NavbarSeparator };
