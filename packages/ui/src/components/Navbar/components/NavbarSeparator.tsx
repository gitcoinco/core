import * as React from "react";

import { cn } from "@gitcoin/utils";
import { tv } from "tailwind-variants";

const separatorStyle = tv({
  base: "h-4 w-0 border-1.5 border-grey-900 bg-grey-900",
});

const NavbarSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(separatorStyle(), className)} {...props} />
  ),
);
NavbarSeparator.displayName = "NavbarSeparator";

export { NavbarSeparator };
