"use client";

import { CheckCircle2Icon } from "lucide-react";

import { Label } from "@/ui-shadcn/label";

interface TimelineRowProps {
  label: string;
  isSelected: boolean;
  lineColor?: string;
  lineHeight?: string;
  showLine?: boolean;
  error?: string;
  children: React.ReactNode;
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  label,
  isSelected,
  lineColor = "bg-grey-300",
  lineHeight,
  showLine = false,
  error,
  children,
}) => {
  return (
    <div className="relative">
      <div className="flex gap-6">
        <div className="relative flex flex-col items-center">
          {isSelected ? (
            <CheckCircle2Icon className={`size-4 ${error ? "text-red-500" : "text-moss-500"}`} />
          ) : (
            <div
              className={`size-4 rounded-full border ${
                error ? "border-red-500" : "border-grey-300"
              }`}
            />
          )}
          {showLine && (
            <div className={`absolute bottom-0 top-[15px] ${lineHeight} w-px ${lineColor}`} />
          )}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <Label className="text-sm font-normal">{label}</Label>
          {children}
        </div>
      </div>
    </div>
  );
};
