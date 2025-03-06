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
    <div className="inline-flex items-center gap-2">
      <Icon type={icon} className={cn("size-5", iconClassName)} />
      <div className="flex flex-col items-start justify-start text-sm font-medium">
        <span className={cn("font-ui-mono text-sm font-medium", valueClassName)}>{value}</span>
        <span className={cn("font-ui-mono text-sm font-normal leading-[14px]", labelClassName)}>
          {label}
        </span>
      </div>
    </div>
  );
};
