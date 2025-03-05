import { useState } from "react";

import { formatDate, DateFormat } from "@gitcoin/utils";
import moment from "moment";

import { Button, Input } from "@/primitives";
import { IconType, Icon } from "@/primitives/Icon";

interface StakeProjectCardProps {
  projectName?: string;
  projectDescription?: string;
  projectRank?: number;
  stakeAmount?: number;
  stakeDate?: Date;
  unlockDate?: Date;
  claimedDate?: Date;
  claimTransactionHash?: string;

  onClaim?: () => void;
}

export const StakeProjectCard = ({
  projectName = "Project Name",
  projectDescription = "Project Description",
  projectRank,
  stakeAmount,
  stakeDate,
  unlockDate,
  claimedDate,
  claimTransactionHash,
  onClaim,
}: StakeProjectCardProps) => {
  const isUnlocked = unlockDate && unlockDate < new Date();
  const diff = moment.duration(moment().diff(unlockDate));
  const days = diff.days();
  const months = diff.months();

  const message =
    days < 0
      ? Math.abs(months) > 0
        ? `Unloked ${Math.abs(months)} months ago`
        : `Unloked ${Math.abs(days)} days ago`
      : months > 0
        ? `Unlocks in ${months} months`
        : `Unlocks in ${days} days`;

  const isClaimed = claimedDate && claimTransactionHash;

  const claimedDateDiff = moment.duration(moment().diff(claimedDate));
  const claimedDays = claimedDateDiff.days();
  const claimedMonths = claimedDateDiff.months();
  const claimedMessage = isClaimed
    ? claimedMonths > 0
      ? `Claimed ${Math.abs(claimedMonths)} months ago`
      : `Claimed ${Math.abs(claimedDays)} days ago`
    : "Not claimed";

  const hasStacked = stakeDate && stakeAmount && stakeAmount > 0;

  const [_stakeAmount, setStakeAmount] = useState(0);

  return (
    <div className="flex w-full justify-between gap-6 rounded-lg bg-grey-100 p-6">
      <div className="flex flex-col justify-start gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {projectRank && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 font-ui-sans text-sm font-normal text-white">
                {projectRank}
              </span>
            )}
            <span className="font-ui-sans text-base font-bold">{projectName}</span>
          </div>
          <span className=" line-clamp-1 max-h-[20px] max-w-[513px] font-ui-sans text-sm font-normal">
            {projectDescription}
          </span>
        </div>
        {!hasStacked && (
          <IconWithDetails
            icon={IconType.UP_TREND}
            label="Total staked"
            value={`${stakeAmount ?? 10} GTC`}
          />
        )}
      </div>
      {hasStacked ? (
        <div className="flex items-center justify-end gap-8">
          <IconWithDetails
            icon={IconType.LIGHTNING_BOLT}
            label={`Staked ${stakeAmount} GTC`}
            value={`on ${formatDate(stakeDate, DateFormat.ShortMonthDayYear)}`}
          />

          <div className="flex flex-col items-center gap-2">
            {isUnlocked && !isClaimed && (
              <Button
                value="Claim reward"
                icon={<Icon type={IconType.ARROW_RIGHT} className="size-4" />}
                onClick={onClaim}
                iconPosition="right"
                className="bg-moss-100 text-black"
              />
            )}
            <span className="text-sm font-normal text-black">
              {!isClaimed ? message : claimedMessage}
            </span>
            {isClaimed && (
              <Button
                value="View transaction"
                icon={<Icon type={IconType.EXTERNAL_LINK} className="size-4" />}
                onClick={() => {
                  window.open(`https://etherscan.io/tx/${claimTransactionHash}`, "_blank");
                }}
                iconPosition="right"
                variant="ghost"
                className="bg-white text-black"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-end justify-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-ui-sans text-sm font-normal">Amount (GTC)</span>
            <div className="flex items-center gap-2">
              <Input
                value={stakeAmount}
                onChange={(e) => {
                  setStakeAmount(Number(e.target.value));
                }}
                className="h-9"
              />
              <span className="shrink-0 font-ui-sans text-sm font-normal text-grey-500">
                ~100 usd
              </span>
            </div>
          </div>
          <Button className="justify-end" value="View Project" />
        </div>
      )}
    </div>
  );
};

/**
 * Helper component to display icon with details
 */
export const IconWithDetails = ({
  icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string;
}) => {
  return (
    <div className="inline-flex items-center justify-between gap-2">
      <Icon type={icon} className="size-6" />
      <div className="flex flex-col items-start justify-start text-sm font-medium">
        <div>
          <span className="text-grey-900">{label}</span>
        </div>
        <span className="text-grey-500">{value}</span>
      </div>
    </div>
  );
};
