"use client";

import { IconLabel } from "@/components/IconLabel";
import { getChainInfo } from "@/lib";
import { IconType } from "@/primitives/Icon";
import { PoolData } from "@/types";

import { PoolBadge } from "../PoolBadge";

export interface PoolDataCardProps {
  data: PoolData;
}

export function PoolDataCard({ data }: PoolDataCardProps) {
  const { name, icon } = getChainInfo(data.chainId);
  return (
    <div
      onClick={() =>
        data.onClick?.({
          chainId: data.chainId,
          roundId: data.roundId,
        })
      }
      className="inline-flex h-60 w-full cursor-pointer items-center justify-between rounded-2xl border border-grey-100 p-6"
    >
      <div className="flex items-center justify-start gap-6">
        <img className="relative size-48 rounded-2xl" src={data.logoImg} />
        <div className="inline-flex w-[482px] flex-col items-start justify-start gap-3">
          <div className="self-stretch text-2xl font-medium">{data.roundName}</div>
          <IconLabel
            type="default"
            iconType={IconType.USER_GROUP}
            label={`${data.operatorsCount} operators`}
          />
          <div className="inline-flex items-center justify-start gap-4 text-grey-900">
            <div className="flex items-center justify-start gap-2">
              <IconLabel
                type="period"
                startDate={data.applicationStartDate}
                endDate={data.applicationEndDate}
              />
            </div>
            <div className="text-[16px]/[24px] font-medium leading-7">Applications</div>
          </div>
          <div className="inline-flex items-center justify-start gap-4 text-grey-900">
            <div className="flex items-center justify-start gap-2">
              <IconLabel
                type="period"
                startDate={data.votingStartDate}
                endDate={data.votingEndDate}
              />
            </div>
            <div className="text-[16px]/[24px] font-medium leading-7">Voting</div>
          </div>
          <IconLabel type="default" label={name} iconType={icon} />
        </div>
      </div>
      <PoolBadge badge={data.poolType} type="poolType" />
    </div>
  );
}
