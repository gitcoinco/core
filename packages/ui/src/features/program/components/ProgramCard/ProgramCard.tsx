"use client";

import { UseQueryResult } from "@tanstack/react-query";
import { match, P } from "ts-pattern";

import { IconLabel } from "@/components/IconLabel";
import { getChainInfo } from "@/lib";
import { Badge } from "@/primitives/Badge";
import { IconType } from "@/primitives/Icon";
import { Skeleton } from "@/primitives/Skeleton";
import { Card, CardContent } from "@/ui-shadcn/card";

export interface ProgramCardProps {
  id: string;
  chainId: number;
  title: string;
  operatorsCount: number;
  roundsCount: number;
  createdAtBlock: number;
  onClick?: (program?: { chainId: number; programId: string }) => void;
}
export interface ProgramCardQueryProps {
  queryResult: UseQueryResult<ProgramCardProps, Error>;
}

export function ProgramCard(props: ProgramCardProps | ProgramCardQueryProps) {
  return match(props)
    .with({ queryResult: P.not(P.nullish) }, ({ queryResult }) =>
      match(queryResult)
        .with({ status: "error", error: P.select() }, (error) => <ProgramErrorCard error={error} />)
        .with({ status: "pending" }, () => <LoadingCard />)
        .with({ status: "success", data: P.select() }, (data) => <ProgramDataCard data={data} />)
        .otherwise(() => <ProgramErrorCard />),
    )
    .otherwise(() => <ProgramDataCard data={props as ProgramCardProps} />);
}

export interface ProgramDataCardProps {
  data: ProgramCardProps;
}

export function ProgramDataCard({ data }: ProgramDataCardProps) {
  const { name, icon } = getChainInfo(data.chainId);
  return (
    <Card
      className="block w-[304px] cursor-pointer overflow-hidden border-grey-300 bg-grey-50"
      onClick={() => data.onClick?.({ chainId: data.chainId, programId: data.id })}
    >
      <CardContent className="flex flex-col gap-3 p-6">
        <h2 className="truncate font-ui-sans text-2xl font-bold">{data.title}</h2>
        <IconLabel
          type="default"
          iconType={IconType.USER_GROUP}
          label={`${data.operatorsCount} operators`}
        />
        <div>
          <Badge className="bg-purple-100 font-medium text-purple-700">
            {data.roundsCount} rounds
          </Badge>
        </div>
        <IconLabel type="default" label={name} iconType={icon} />
      </CardContent>
    </Card>
  );
}

export function LoadingCard() {
  return (
    <Card className="flex h-[189px] w-[304px] flex-col  overflow-hidden" role="presentation">
      <CardContent className="flex flex-col gap-3 p-6">
        <Skeleton className="h-[32px] w-full rounded-md" />
        <Skeleton className="h-6 w-1/2 rounded-md" />
        <Skeleton className="h-6 w-1/3 rounded-md" />
        <Skeleton className="h-6 w-1/2 rounded-md" />
      </CardContent>
    </Card>
  );
}

export function ProgramErrorCard({ error }: { error?: Error }) {
  return <></>;
}
