"use client";

import { tv } from "tailwind-variants";

import { IconLabel } from "@/components/IconLabel";
import { useToast } from "@/hooks";
import { getChainInfo } from "@/lib";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/primitives/Breadcrumb";
import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";
import { PoolStatus, PoolType } from "@/types";

import {
  getApplyLink,
  getPoolLinkOnExplorer,
  getProgramLinkOnManager,
  getManagerUrl,
  getVotingInterfaceLinkOnExplorer,
} from "~checker/utils";

import { PoolBadge } from "../PoolBadge";

const variants = tv({
  variants: {
    default: "bg-grey-50 px-20 py-3",
  },
});

export interface PoolSummaryProps {
  isLoading?: boolean;
  chainId: number;
  poolId: string;
  programId: string;
  name?: string;
  strategyName?: string;
  applicationsStartTime?: string;
  applicationsEndTime?: string;
  donationsStartTime?: string;
  donationsEndTime?: string;
}

export const PoolSummary = (pool: PoolSummaryProps) => {
  const { toast } = useToast();
  const chainInfo = getChainInfo(pool.chainId);

  let poolStatus: PoolStatus;
  const poolType = pool.strategyName as PoolType;

  const managerUrl = getManagerUrl(pool.chainId, poolType);

  const now = new Date();

  const registerStartDate = pool.applicationsStartTime
    ? new Date(pool.applicationsStartTime)
    : new Date();
  const registerEndDate = pool.applicationsEndTime
    ? new Date(pool.applicationsEndTime)
    : new Date();
  const allocationStartDate = pool.donationsStartTime
    ? new Date(pool.donationsStartTime)
    : new Date();
  const allocationEndDate = pool.donationsEndTime ? new Date(pool.donationsEndTime) : new Date();

  if (now >= registerStartDate && now <= registerEndDate) {
    poolStatus = PoolStatus.ApplicationsInProgress;
  } else if (now > registerEndDate && now <= allocationStartDate) {
    poolStatus = PoolStatus.FundingPending;
  } else if (now > allocationStartDate && now <= allocationEndDate) {
    poolStatus = PoolStatus.RoundInProgress;
  } else {
    poolStatus = PoolStatus.PreRound;
  }
  const applyLink = getApplyLink(pool.chainId, pool.poolId, poolType);
  const explorerLink = getPoolLinkOnExplorer(pool.chainId, pool.poolId, poolType);
  const managerProgramLink = getProgramLinkOnManager(pool.chainId, pool.programId, poolType);
  const breadcrumbItems = [
    { label: "My Programs", href: managerUrl },
    {
      label: "Program Details",
      href: managerProgramLink,
    },
    {
      label: "Round Details",
      href: explorerLink,
    },
  ];

  const { registerDateLabel, allocationDateLabel, viewButton } = getInfoBasedOnPoolType(
    poolType,
    pool,
    explorerLink,
  );

  return (
    <div className={cn(variants.variants.default, "grid grid-cols-2 py-6")}>
      <div className="flex flex-col items-start justify-start gap-4">
        <Breadcrumb items={breadcrumbItems} isLoading={pool?.isLoading} />
        <div className="flex flex-col gap-4">
          <div>
            <PoolBadge type="poolType" badge={poolType} isLoading={pool?.isLoading} />
          </div>
          <IconLabel
            textVariant="text-[36px]/[39px]"
            iconVariant="size-6"
            iconType={chainInfo.icon}
            type="default"
            label={pool.name}
            isLoading={pool.isLoading}
            laodingSkeletonClassName="h-10 w-72 rounded-lg"
          />

          <div className="flex flex-col gap-2">
            <IconLabel
              type="roundPeriod"
              startDate={registerStartDate}
              endDate={registerEndDate}
              isLoading={pool.isLoading}
              label={registerDateLabel}
            />
            <IconLabel
              type="roundPeriod"
              startDate={allocationStartDate}
              endDate={allocationEndDate}
              isLoading={pool.isLoading}
              label={allocationDateLabel}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="flex items-end">
          <PoolBadge type="poolStatus" badge={poolStatus} isLoading={pool?.isLoading} />
        </div>
        <div className="flex items-end gap-6">
          <Button
            icon={<Icon type={IconType.LINK} />}
            className="border-grey-100 bg-white text-black shadow-sm"
            value="Round application"
            onClick={() => {
              navigator.clipboard.writeText(applyLink).then(
                () => {
                  toast({
                    status: "success",
                    description: "Successfully copied to clipboard",
                  });
                },
                (err) => {
                  console.error("Failed to copy: ", err);
                },
              );
            }}
          />
          {viewButton}
        </div>
      </div>
    </div>
  );
};

function getInfoBasedOnPoolType(poolType: PoolType, pool: PoolSummaryProps, explorerLink: string) {
  let allocationDateLabel;
  let registerDateLabel;
  let viewButton;

  if (poolType === PoolType.Retrofunding) {
    registerDateLabel = "Applications";
    allocationDateLabel = "Voting";
    viewButton = (
      <Button
        icon={<Icon type={IconType.LINK} />}
        className="border-grey-100 bg-white text-black shadow-sm"
        value="Voting Interface"
        onClick={() =>
          window.open(
            getVotingInterfaceLinkOnExplorer(pool.chainId, pool.poolId, poolType),
            "_blank",
          )
        }
      />
    );
  } else {
    registerDateLabel = "Review";
    allocationDateLabel = "Allocation";
    viewButton = (
      <Button
        icon={<Icon type={IconType.EXPLORER} />}
        className="border-grey-100 bg-white text-black shadow-sm"
        value="View round"
        onClick={() => window.open(explorerLink, "_blank")}
      />
    );
  }
  return { registerDateLabel, allocationDateLabel, viewButton };
}
