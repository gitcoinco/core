"use client";

import { SideNavItem } from "@/components/SideNav";
import { cn } from "@/lib/utils";
import { Icon } from "@/primitives/Icon";

interface NavItemProps {
  item: SideNavItem;
  isRecursive?: boolean;
  hoverVariantClass: string;
  onClick: (itemLink: string | undefined) => void;
  isActive?: boolean;
}

/**
 * Renders a clickable navigation item
 */
export const NavItem = ({
  item,
  isRecursive,
  hoverVariantClass,
  onClick,
  isActive,
}: NavItemProps) => {
  const baseClasses = cn(
    "cursor-pointer rounded-sm p-2 font-ui-sans text-p",
    hoverVariantClass,
    isActive && hoverVariantClass.replace("hover:", ""),
    item.isSeparator && "cursor-default bg-transparent text-sm font-medium hover:bg-transparent",
  );

  return (
    <div onClick={() => onClick(item.id)}>
      {isRecursive ? (
        <div className={cn(baseClasses, "-ml-6")}>
          <div className="flex items-center gap-2 pl-6">
            {item.iconType ? <Icon type={item.iconType} /> : item.icon}
            {item.content}
          </div>
        </div>
      ) : (
        <div className={cn(baseClasses, "flex items-center gap-2")}>
          {item.iconType ? <Icon type={item.iconType} /> : item.icon}
          {item.content}
        </div>
      )}
    </div>
  );
};
