import { DefaultLogo } from "@/assets";
import { getChainInfo } from "@/lib";
import { Badge } from "@/primitives/Badge";

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
  logoImg,
  votingStartDate,
  votingEndDate,
  totalProjects,
  totalStaked,
  matchingPoolAmount,
  stakedAmount,
  lastStakeDate,
  claimed,
  onClaim,
  onClick,
}: StakePoolDataCardProps) => {
  const { icon } = getChainInfo(chainId);
  const today = new Date();

  // Resolve logo image with fallback
  const image = logoImg && !logoImg.endsWith("undefined") ? logoImg : DefaultLogo;

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

  // Handle claim
  const handleClaim = () => {
    onClaim?.({
      chainId,
      roundId,
    });
  };

  return (
    <div className="inline-flex h-60 w-full items-center rounded-2xl border border-grey-100 p-6">
      <div className="flex w-full items-center justify-between gap-6">
        <img
          className="relative size-48 cursor-pointer rounded-2xl"
          src={image}
          alt={`${roundName} logo`}
          onClick={handleCardClick}
        />
        <div className="flex w-full flex-col items-start justify-between gap-6">
          <div
            className="flex w-full cursor-pointer flex-col items-start justify-start gap-2"
            onClick={handleCardClick}
          >
            <div className="flex w-full items-center justify-between">
              <div className="self-stretch text-2xl font-medium">{roundName}</div>
              {!hasStaked && (
                <Badge className={`${roundStatus.className}`}>{roundStatus.text}</Badge>
              )}
            </div>
            <div className="h-5 font-ui-sans text-sm font-normal leading-normal text-black">
              {roundDescription}
            </div>
          </div>

          {hasStaked ? (
            <StakedSection
              isUnlocked={isUnlocked}
              stakeAmount={stakedAmount}
              lastStakeDate={lastStakeDate}
              claimed={claimed}
              unlockMessage={unlockMessage}
              onClaim={handleClaim}
            />
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
      className: "bg-purple-100 text-purple-900",
    };
  if (votingEndDate > today)
    return {
      text: "Active",
      className: "bg-green-100 text-green-900",
    };
  return {
    text: "Ended",
    className: "bg-grey-100 text-grey-900",
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
