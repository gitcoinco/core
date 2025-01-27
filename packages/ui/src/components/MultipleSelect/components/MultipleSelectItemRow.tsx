import { cn } from "@/lib/utils";
import { Icon } from "@/primitives/Icon";

import { MultipleSelectItem } from "../types";

/* -------------------------------------------------------------------------------------------------
   MultipleSelectItemRow: subcomponent for an individual item's label + icon
------------------------------------------------------------------------------------------------- */
export const MultipleSelectItemRow = ({
  item,
  itemIconClasses,
  itemClasses,
}: {
  item: MultipleSelectItem;
  itemIconClasses: string;
  itemClasses: string;
}) => {
  const IconComponent = item.icon;
  const iconType = item.iconType;

  // Icon on the right
  if (item.iconPosition === "right") {
    return (
      <div className={cn(itemClasses, "flex items-center gap-1")}>
        <span className={itemClasses}>{item.label}</span>
        {iconType ? (
          <Icon type={iconType} className={cn(itemIconClasses)} />
        ) : (
          IconComponent && <IconComponent className={cn(itemIconClasses)} />
        )}
      </div>
    );
  }

  // Icon on the left (default)
  return (
    <div className={cn(itemClasses, "flex items-center gap-1")}>
      {iconType ? (
        <Icon type={iconType} className={cn(itemIconClasses)} />
      ) : (
        IconComponent && <IconComponent className={cn(itemIconClasses)} />
      )}
      <span className={itemClasses}>{item.label}</span>
    </div>
  );
};
