import * as React from "react";

import { match, P } from "ts-pattern";

import { Badge } from "@/primitives/Badge";
import { isPoolStatus, isPoolType, PoolStatus, PoolType } from "@/types";

import { PoolStatusBadge } from "../PoolStatusBadge";
import { PoolTypeBadge } from "../PoolTypeBadge";

export interface PoolBadgeProps {
  type: "poolStatus" | "poolType";
  badge?: PoolStatus | PoolType;
  className?: string;
  isLoading?: boolean;
}

export const PoolBadge: React.FC<PoolBadgeProps> = ({ type, badge, className, isLoading }) => {
  return match({ type, badge, isLoading })
    .with({ type: "poolStatus", badge: P.optional(P.when(isPoolStatus)) }, () => (
      <PoolStatusBadge className={className} value={badge as PoolStatus} isLoading={isLoading} />
    ))
    .with({ type: "poolType", badge: P.optional(P.when(isPoolType)) }, () => (
      <PoolTypeBadge className={className} value={badge as PoolType} isLoading={isLoading} />
    ))
    .otherwise(() => <Badge variant="outlined-error">Error: Invalid badge type</Badge>);
};
