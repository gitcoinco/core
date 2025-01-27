import { cn } from "@/lib/utils";

export interface LabelProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
  iconPosition?: "left" | "right";
}

export const Label = ({ icon, label, className, iconPosition }: LabelProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {icon && iconPosition === "left" && icon}
      <p className={className}>{label}</p>
      {icon && iconPosition === "right" && icon}
    </div>
  );
};
