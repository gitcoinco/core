import { Icon, IconType } from "@/index";

/**
 * Helper component to display icon with details
 */
export const IconWithDetails = ({
  icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string;
}) => {
  return (
    <div className="inline-flex items-center gap-2">
      <Icon type={icon} className="size-6" />
      <div className="flex flex-col items-start justify-start text-sm font-medium">
        <div>
          <span className="text-grey-900">{label}</span>
        </div>
        <span className="text-grey-500">{value}</span>
      </div>
    </div>
  );
};
