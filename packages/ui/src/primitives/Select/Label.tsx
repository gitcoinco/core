import { match, P } from "ts-pattern";

import { stringToBlobUrl } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface LabelProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
  iconPosition?: "left" | "right";
  iconClassName?: string;
}

export const Label = ({
  icon,
  label,
  className,
  iconPosition = "left",
  iconClassName,
}: LabelProps) => {
  const iconElement = match(icon)
    .with(P.string, (strIcon) => (
      <img src={stringToBlobUrl(strIcon)} className={cn("shrink-0 rounded-full", iconClassName)} />
    ))
    .with(P.not(P.nullish), (reactNode) => reactNode)
    .otherwise(() => null);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {iconPosition === "left" && iconElement}
      <p className={className}>{label}</p>
      {iconPosition === "right" && iconElement}
    </div>
  );
};
