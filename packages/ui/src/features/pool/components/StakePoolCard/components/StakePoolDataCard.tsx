import { useState } from "react";

import { StakeProjectCard } from "@/features/project/components/StakeProjectCard/StakeProjectCard";
import { cn, getChainInfo } from "@/lib";
import { Badge } from "@/primitives/Badge";
import { Button } from "@/primitives/Button";
import { IconType } from "@/primitives/Icon";
import { Icon } from "@/primitives/Icon";

import { StakePoolDataCardProps } from "../types";
import { PoolMetricsSection } from "./PoolMetricsSection";
import { StakedSection } from "./StakedSection";
import { StakingPeriodSection } from "./StakingPeriodSection";

/**
 * Component to display stake pool data in a card format
 */
export const StakePoolDataCard = ({
  roundName,
  roundDescription,
  chainId,
  roundId,
  votingStartDate,
  votingEndDate,
  totalProjects,
  totalStaked,
  matchingPoolAmount,
  stakedAmount,
  lastStakeDate,
  claimed,
  onClick,
  stakedProjects,
}: StakePoolDataCardProps) => {
  const { icon } = getChainInfo(chainId);
  const today = new Date();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate unlock timing
  const unlocksIn = votingEndDate.getTime() - today.getTime();
  const isUnlocked = today.getTime() >= votingEndDate.getTime();
  const unlocksInMonths = Math.abs(unlocksIn) / (1000 * 60 * 60 * 24 * 30);
  const unlocksInDays = Math.abs(unlocksIn) / (1000 * 60 * 60 * 24);

  // Determine round status
  const roundStatus = getRoundStatus(votingStartDate, votingEndDate, today);

  // Check if user has already staked
  const hasStaked = Boolean(stakedAmount && stakedAmount > 0);

  // Format unlock message
  const unlockMessage = formatUnlockMessage(isUnlocked, unlocksInMonths, unlocksInDays);

  // Handle card click
  const handleCardClick = () => {
    onClick?.({
      chainId,
      roundId,
    });
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="inline-flex h-60 w-full items-center rounded-2xl border border-grey-100 p-6">
        <div className="flex w-full flex-col items-start justify-between gap-6">
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <div className="flex w-full justify-between">
              <div className="flex cursor-pointer flex-col  gap-2" onClick={handleCardClick}>
                <div className="self-stretch text-2xl font-medium">{roundName}</div>
                <div className="line-clamp-2 font-ui-sans text-sm font-normal leading-normal text-black">
                  {roundDescription}
                </div>
              </div>
              {!hasStaked && (
                <Badge className={`${roundStatus.className}`}>{roundStatus.text}</Badge>
              )}

              {hasStaked && (
                <div className="flex flex-col gap-2">
                  <Button
                    size="small"
                    value={!isUnlocked ? "Pending" : claimed ? "Claimed" : "Ready to claim"}
                    icon={
                      <Icon
                        type={IconType.CHEVRON_DOWN}
                        className={cn("size-4", { "rotate-180": isOpen })}
                      />
                    }
                    iconPosition="right"
                    className="bg-moss-100 text-black"
                    onClick={toggleAccordion}
                  />
                  {!claimed && (
                    <div className="font-ui-sans text-sm font-normal leading-tight text-black">
                      {unlockMessage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {hasStaked ? (
            <StakedSection stakeAmount={stakedAmount} lastStakeDate={lastStakeDate} />
          ) : (
            <StakingPeriodSection votingStartDate={votingStartDate} votingEndDate={votingEndDate} />
          )}

          <PoolMetricsSection
            matchingPoolAmount={matchingPoolAmount}
            totalProjects={totalProjects}
            totalStaked={totalStaked}
            chainIcon={icon}
          />
        </div>
      </div>
      <div
        className={cn("relative", "transition-all duration-300", {
          "h-0 overflow-hidden opacity-0": !isOpen,
          "h-auto opacity-100": isOpen,
        })}
      >
        <div className="mt-2 flex flex-col gap-2 p-2">
          {stakedProjects?.map((project) => <StakeProjectCard key={project.id} {...project} />)}
        </div>
      </div>
    </div>
  );
};

/**
 * Helper function to determine round status
 */
const getRoundStatus = (
  votingStartDate: Date,
  votingEndDate: Date,
  today: Date,
): {
  text: string;
  className: string;
} => {
  if (votingStartDate > today)
    return {
      text: "Upcoming",
      className: "bg-purple-100 text-purple-900 h-6",
    };
  if (votingEndDate > today)
    return {
      text: "Active",
      className: "bg-green-100 text-green-900 h-6",
    };
  return {
    text: "Ended",
    className: "bg-grey-100 text-grey-900 h-6",
  };
};

/**
 * Helper function to format unlock message
 */
const formatUnlockMessage = (
  isUnlocked: boolean,
  unlocksInMonths: number,
  unlocksInDays: number,
): string => {
  if (isUnlocked) {
    return `Unlocked ${
      unlocksInMonths === 1
        ? `${unlocksInMonths} month`
        : unlocksInMonths > 1
          ? `${Math.ceil(unlocksInMonths)} months`
          : unlocksInDays === 1
            ? `${unlocksInDays} day`
            : unlocksInDays > 1
              ? `${Math.ceil(unlocksInDays)} days`
              : "< 1 day"
    } ago`;
  }
  return `Unlocks in ${
    unlocksInMonths === 1
      ? `${unlocksInMonths} month`
      : unlocksInMonths > 1
        ? `${Math.ceil(unlocksInMonths)} months`
        : unlocksInDays === 1
          ? `${unlocksInDays} day`
          : unlocksInDays > 1
            ? `${Math.ceil(unlocksInDays)} days`
            : "< 1 day"
  }`;
};
