import moment from "moment";
import { match, P } from "ts-pattern";

import { formatDate, DateFormat, cn } from "@/lib";
import { IconType } from "@/primitives/Icon";

import {
  IconWithDetails,
  StakeInput,
  ViewProjectButton,
  ViewTransactionButton,
} from "./components";

// Core props shared by all card variants
interface StakeProjectCardBaseProps {
  id: string; // Unique identifier for the project
  chainId: number; // Chain ID of the project
  roundId: string; // Round ID of the project
  name?: string; // Project name
  description?: string; // Project description
  image?: string; // Project image
  totalStaked?: number; // Total amount staked on the project
  numberOfContributors?: number; // Number of contributors that donated on the project
  totalDonations?: number; // Total donations in USD on the project
  stakedAmount?: number; // Amount staked from a user
  stakedAt?: Date; // Date when staked
}

// Props for staking functionality
interface StakingProps {
  onStakeChange: (id: string, amount: number) => void; // Handler for stake amount changes
  stakeAmount: number; // Amount that is currently staked
  maxStakeAmount: number; // Maximum amount that can be staked
  tokenUsdValue: number; // USD value of one token
  isStakingPeriodOver: boolean; // Whether the staking period is over
}

// Variant-specific props
interface LeaderboardCardProps extends StakeProjectCardBaseProps, StakingProps {
  variant: "leaderboard";
  rank: number; // Project rank in the leaderboard
}

interface StakeCardProps extends StakeProjectCardBaseProps, StakingProps {
  variant: "stake";
}

interface StakedUnclaimedCardProps extends StakeProjectCardBaseProps {
  variant: "staked";
  stakedAmount: number; // Amount staked
  rewardAmount?: number; // Estimated amount of reward
  stakedAt: Date; // Date when staked
  unlockAt: Date; // Date when unlocked
  isClaimable?: boolean; // Whether the project is claimable depends on the merkleAirdrop contract
}

interface ClaimedCardProps extends StakeProjectCardBaseProps {
  variant: "claimed";
  stakedAmount: number; // Amount staked
  rewardAmount?: number; // Amount of reward
  stakedAt: Date; // Date when staked
  unlockAt: Date; // Date when unlocked
  claimedAt: Date; // Date when claimed
  txHash: string; // Transaction hash of the claim
}

// Union type of all card variants
export type StakeProjectCardProps =
  | LeaderboardCardProps
  | StakeCardProps
  | StakedUnclaimedCardProps
  | ClaimedCardProps;

export const StakeProjectCard = (props: StakeProjectCardProps) => {
  return (
    <div className="flex w-full justify-between gap-6 rounded-lg bg-grey-50 p-6">
      {/* Project Information Section - Common to all variants */}
      <div className="flex flex-col justify-start gap-6">
        <div className="flex items-center gap-4">
          {match(props)
            .with({ variant: "leaderboard" }, (props) => {
              const getRankColor = (rank: number) => {
                if (rank === 1) return "bg-green-500";
                if (rank === 2) return "bg-green-300";
                if (rank === 3) return "bg-green-100";
                return "bg-grey-300";
              };
              return (
                <>
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full font-ui-sans text-sm font-normal",
                      getRankColor(props.rank),
                    )}
                  >
                    {props.rank}
                  </span>
                </>
              );
            })
            .otherwise(() => null)}
          <img
            src={props.image}
            alt={props.name || "Project Image"}
            className="size-12 rounded-sm"
          />
          <div className="flex flex-col gap-2">
            <span className="font-ui-sans text-base font-bold">{props.name || "Project Name"}</span>
            <span className="line-clamp-1 max-h-[20px] max-w-[513px] font-ui-sans text-sm font-normal">
              {props.description || "Project Description"}
            </span>
          </div>
        </div>

        {/* Show total staked only for stake and leaderboard variants */}
        {match(props)
          .with({ variant: P.union("leaderboard", "stake") }, (data) => (
            <div className="flex items-center gap-4">
              <IconWithDetails
                icon={IconType.UP_TREND}
                label="Total staked"
                value={`${data.totalStaked} GTC`}
              />
              <IconWithDetails
                icon={IconType.BADGE_CHECK}
                iconClassName="fill-blue-500"
                label="Total donations"
                value={`$${data.totalDonations} USD`}
              />
              <IconWithDetails
                icon={IconType.USERS}
                iconClassName="fill-red-500"
                label="Total contributors"
                value={`${data.numberOfContributors}`}
              />
              {data.stakedAmount && data.stakedAt && (
                <IconWithDetails
                  icon={IconType.LIGHTNING_BOLT}
                  iconClassName="size-6 fill-purple-500"
                  label={`on ${formatDate(data.stakedAt, DateFormat.ShortMonthDayYear)}`}
                  value={`Staked ${data.stakedAmount} GTC`}
                  labelClassName="font-ui-sans text-sm font-normal"
                  valueClassName="font-ui-sans text-base font-bold"
                />
              )}
            </div>
          ))
          .otherwise(() => null)}
      </div>
      {/* Right side content - varies by variant */}
      {match(props)
        .with({ variant: P.union("leaderboard", "stake") }, (data) => (
          <div className="flex flex-col items-end justify-end gap-6">
            {!data.isStakingPeriodOver && (
              <div className="flex flex-col gap-2">
                <span className="font-ui-sans text-sm font-normal">Amount (GTC)</span>
                <StakeInput
                  project={{ id: data.id }}
                  maxAmount={data.maxStakeAmount}
                  stakeAmount={data.stakeAmount}
                  tokenUsdValue={data.tokenUsdValue}
                  onChange={(id, amount) => {
                    data.onStakeChange(id, amount);
                  }}
                />
              </div>
            )}
            <ViewProjectButton
              chainId={data.chainId}
              roundId={data.roundId}
              applicationId={data.id}
            />
          </div>
        ))
        .with({ variant: P.union("staked", "claimed") }, (staked) => {
          // Calculate time-related information for staked projects
          const isUnlocked = staked.unlockAt < new Date();
          const diff = moment.duration(moment().diff(staked.unlockAt));
          const days = diff.days();
          const months = diff.months();
          const isClaimable = staked.variant === "staked" && staked.isClaimable;

          const unlockMessage =
            isUnlocked && isClaimable
              ? Math.abs(months) > 0
                ? `Unlocked ${Math.abs(months)} months ago`
                : Math.abs(days) > 0
                  ? `Unlocked ${Math.abs(days)} days ago`
                  : `Unlocked < 1 day ago`
              : isUnlocked && !isClaimable
                ? "Finalizing the claim process"
                : months > 0
                  ? `Unlocks in ${months} months`
                  : Math.abs(days) > 0
                    ? `Unlocks in ${days} days`
                    : `Unlocks in < 1 day`;

          return (
            <div className="flex items-center justify-end gap-8">
              <IconWithDetails
                icon={IconType.LIGHTNING_BOLT}
                iconClassName="size-6 fill-purple-500"
                label={`on ${formatDate(staked.stakedAt, DateFormat.ShortMonthDayYear)}`}
                value={`Staked ${staked.stakedAmount} GTC`}
                labelClassName="font-ui-sans text-sm font-normal"
                valueClassName="font-ui-sans text-base font-bold"
              />
              {isUnlocked && staked.rewardAmount && staked.variant === "staked" ? (
                <IconWithDetails
                  icon={IconType.LIGHTNING_BOLT}
                  iconClassName="size-6 fill-green-500 stroke-green-500"
                  label={`Stake Reward`}
                  value={`~${staked.rewardAmount} USD`}
                  labelClassName="font-ui-sans text-sm font-normal"
                  valueClassName="font-ui-sans text-base font-bold"
                />
              ) : (
                staked.rewardAmount &&
                staked.variant === "claimed" && (
                  <IconWithDetails
                    icon={IconType.LIGHTNING_BOLT}
                    iconClassName="size-6 fill-purple-500 stroke-purple-500"
                    label="Claimed reward"
                    value={`${staked.rewardAmount} USD`}
                    labelClassName="font-ui-sans text-sm font-normal"
                    valueClassName="font-ui-sans text-base font-bold"
                  />
                )
              )}

              <div className="flex flex-col items-center gap-2">
                {match(staked)
                  .with({ variant: "staked" }, () => (
                    <span className="text-sm font-normal text-black">{unlockMessage}</span>
                  ))
                  .with({ variant: "claimed" }, (props) => {
                    const claimedDateDiff = moment.duration(moment().diff(props.claimedAt));
                    const claimedDays = claimedDateDiff.days();
                    const claimedMonths = claimedDateDiff.months();
                    const claimedMessage =
                      claimedMonths > 0
                        ? `Claimed ${Math.abs(claimedMonths)} months ago`
                        : `Claimed ${Math.abs(claimedDays)} days ago`;

                    return (
                      <>
                        <span className="text-sm font-normal text-black">{claimedMessage}</span>
                        <ViewTransactionButton chainId={props.chainId} txHash={props.txHash} />
                      </>
                    );
                  })
                  .otherwise(() => null)}
              </div>
            </div>
          );
        })
        .otherwise(() => null)}
    </div>
  );
};
