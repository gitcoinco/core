import { IconType, Icon } from "@/primitives/Icon";

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
    <div className="inline-flex items-center justify-between gap-2">
      <Icon type={icon} />
      <div className="flex flex-col items-start justify-start text-sm font-medium">
        <div>
          <span className="text-grey-900">{label}</span>
        </div>
        <span className="text-grey-500">{value}</span>
      </div>
    </div>
  );
};
