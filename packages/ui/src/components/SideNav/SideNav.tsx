"use client";

import { tv } from "tailwind-variants";

import { AccordionItem, NavItem, InternalSideNavProps } from "@/components/SideNav";
import { cn } from "@/lib/utils";

/**
 * Tailwind variants for side navigation hover states
 */
export const sideNavVariants = tv({
  variants: {
    hover: {
      white: "hover:bg-white",
      grey: "hover:bg-grey-50",
      black: "hover:bg-black",
    },
  },
  defaultVariants: {
    hover: "white",
  },
});

/**
 * Renders a recursive side navigation component with support for nested items and accordions.
 * @param props InternalSideNavProps
 * @returns React component
 */
export const SideNav = ({
  items,
  className,
  hoverVariant = "grey",
  accordionProps,
  isRecursive = false,
  onClick,
  activeId,
}: InternalSideNavProps) => {
  const hoverVariantClass = sideNavVariants({ hover: hoverVariant });

  return (
    <div className={cn("relative flex flex-col gap-4", className)}>
      {items?.map((item, index) => {
        const isActive = item.id === activeId;

        return (
          <div key={`sidenav-item-${index}`}>
            {item.items && item.items.length > 0 ? (
              <AccordionItem
                item={item}
                onClick={onClick}
                hoverVariant={hoverVariant}
                accordionProps={accordionProps}
                activeId={activeId}
              />
            ) : (
              <NavItem
                item={item}
                isRecursive={isRecursive}
                hoverVariantClass={hoverVariantClass}
                onClick={onClick}
                isActive={isActive}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
