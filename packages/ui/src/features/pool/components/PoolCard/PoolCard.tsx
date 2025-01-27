"use client";

import { UseQueryResult } from "@tanstack/react-query";
import { match, P } from "ts-pattern";

import { Badge } from "@/primitives/Badge";
import { Skeleton } from "@/primitives/Skeleton";
import { PoolData } from "@/types";

import { PoolDataCard } from "./PoolDataCard";

export interface PoolCardQueryProps {
  queryResult: UseQueryResult<PoolData, Error>;
}

export type PoolCardProps = PoolData;

export function PoolCard(props: PoolCardProps | PoolCardQueryProps) {
  return match(props)
    .with({ queryResult: P.not(P.nullish) }, ({ queryResult }) =>
      match(queryResult)
        .with({ status: "error", error: P.select() }, (error) => <PoolErrorCard error={error} />)
        .with({ status: "pending" }, () => <LoadingCard />)
        .with({ status: "success", data: P.select() }, (data) => <PoolDataCard data={data} />)
        .otherwise(() => <PoolErrorCard />),
    )
    .otherwise(() => <PoolDataCard data={props as PoolData} />);
}

function LoadingCard() {
  return (
    <div className="inline-flex h-60 items-center justify-between rounded-2xl border border-grey-100 p-6">
      <div className="flex items-center justify-start gap-6">
        <Skeleton className="relative h-40 w-[184px] rounded-2xl" />
        <div className="inline-flex w-[620px] flex-col items-start justify-start gap-3">
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-1/4 rounded-md" />
        </div>
      </div>
      <Badge skeleton size="md" />
    </div>
  );
}

export function PoolErrorCard({ error }: { error?: Error | null }) {
  return <>{error ? <div>Error: {error.message}</div> : <div>Unknown Error</div>}</>;
}
