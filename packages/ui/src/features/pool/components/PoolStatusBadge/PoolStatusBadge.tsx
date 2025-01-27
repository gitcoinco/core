"use client";

import * as React from "react";

import { tv } from "tailwind-variants";
import { match, P } from "ts-pattern";

import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/Badge";
import { isPoolStatus, PoolStatus } from "@/types";

const variants = tv({
  variants: {
    value: {
      [PoolStatus.PreRound]: "border border-legacy-green-400 bg-white text-legacy-green-400",
      [PoolStatus.RoundInProgress]: "bg-legacy-green-200 text-black",
      [PoolStatus.ApplicationsInProgress]: "bg-blue-100",
      [PoolStatus.FundingPending]:
        "border border-legacy-orange-400 bg-white text-legacy-orange-400",
    },
  },
});

const badgeTexts = {
  [PoolStatus.PreRound]: "Pre round",
  [PoolStatus.RoundInProgress]: "Round in progress",
  [PoolStatus.ApplicationsInProgress]: "Applications in progress",
  [PoolStatus.FundingPending]: "Funding pending",
};

const invalidValueText = "Error: Invalid status";

export interface PoolStatusBadgeProps {
  value?: PoolStatus;
  className?: string;
  isLoading?: boolean;
}

export const PoolStatusBadge: React.FC<PoolStatusBadgeProps> = ({
  value,
  className,
  isLoading,
}) => {
  const variantClass = variants({ value });

  return match({ value, isLoading })
    .with({ isLoading: true }, () => <Badge skeleton className={className} size="md" />)
    .with({ value: P.when(isPoolStatus) }, ({ value }) => (
      <Badge className={cn(className, variantClass)}>{badgeTexts[value]}</Badge>
    ))
    .otherwise(() => <Badge variant="outlined-error">{invalidValueText}</Badge>);
};
