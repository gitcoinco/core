import { Icon, IconType } from "@/index";
import { cn } from "@/lib";

/**
 * Helper component to display icon with details
 */
export const IconWithDetails = ({
  icon,
  label,
  value,
  iconClassName,
  labelClassName,
  valueClassName,
}: {
  icon: IconType;
  label: string;
  value: string;
  iconClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}) => {
  return (
    <div className="inline-flex items-center justify-start gap-2">
      <Icon type={icon} className={cn("size-5 items-start", iconClassName)} />
      <div className="flex flex-col">
        <span className={cn("font-ui-mono text-sm font-medium", valueClassName)}>{value}</span>
        <span className={cn("font-ui-mono text-sm font-normal ", labelClassName)}>{label}</span>
      </div>
    </div>
  );
};
