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
    <div className="inline-flex h-[38px] items-center justify-start gap-2">
      <Icon type={icon} className={cn("size-5", iconClassName)} />
      <div className="inline-flex flex-col items-start justify-start self-stretch ">
        <span
          className={cn(
            "text-start font-ui-mono text-sm font-normal leading-[14px]",
            labelClassName,
          )}
        >
          {label}
        </span>
        <span className={cn("text-start font-ui-mono text-sm font-medium", valueClassName)}>
          {value}
        </span>
      </div>
    </div>
  );
};
