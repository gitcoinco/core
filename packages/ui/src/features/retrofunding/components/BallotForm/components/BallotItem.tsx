import { cn } from "@/lib/utils";

import { BallotValues } from "../types";
import { BallotInput } from "./BallotInput";

interface BallotItemProps {
  className?: string;
  metric: { title: string; description: string; metricId: string };
  item: BallotValues;
  disabled: boolean;
  onChange: (metricId: string, value: BallotValues) => void;
  isAllowed: (metricId: string, amount: number) => boolean;
}

export const BallotItem = ({
  metric,
  item,
  className,
  disabled,
  onChange,
  isAllowed,
}: BallotItemProps) => {
  const { title, metricId, description } = metric;
  return (
    <div
      key={metricId}
      className={cn("flex items-center justify-between border-grey-300 py-4", className)}
    >
      <div className="flex w-[410px] flex-col gap-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="line-clamp-3 text-base/[28px] font-normal text-grey-900">{description}</p>
      </div>
      <BallotInput item={item} disabled={disabled} isAllowed={isAllowed} onChange={onChange} />
    </div>
  );
};
