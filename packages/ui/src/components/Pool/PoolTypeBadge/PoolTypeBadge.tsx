"use client";

import * as React from "react";

import { isPoolType, PoolType } from "@gitcoin/types";
import { cn } from "@gitcoin/utils";
import { tv } from "tailwind-variants";
import { match, P } from "ts-pattern";

import { Badge } from "@/primitives/Badge";

const variants = tv({
  base: "border-transparent",
  variants: {
    value: {
      [PoolType.QuadraticFunding]: "bg-legacy-green-100",
      [PoolType.DirectGrants]: "bg-legacy-yellow-100",
      [PoolType.Retrofunding]: "border border-blue-700 bg-white text-blue-700",
    },
  },
});

export interface PoolTypeBadgeProps {
  value?: PoolType;
  className?: string;
  isLoading?: boolean;
}

const badgeTexts = {
  [PoolType.QuadraticFunding]: "Quadratic Funding",
  [PoolType.DirectGrants]: "Direct Grants",
  [PoolType.Retrofunding]: "Retrofunding",
};

const invalidValueText = "Error: Invalid type";

export const PoolTypeBadge: React.FC<PoolTypeBadgeProps> = ({ value, className, isLoading }) => {
  const variantClass = variants({ value });

  return match({ value, isLoading })
    .with({ isLoading: true }, () => <Badge skeleton className={className} size="md" />)
    .with({ value: P.when(isPoolType) }, ({ value }) => (
      <Badge className={cn(className, variantClass)}>{badgeTexts[value]}</Badge>
    ))
    .otherwise(() => <Badge variant="outlined-error">{invalidValueText}</Badge>);
};
