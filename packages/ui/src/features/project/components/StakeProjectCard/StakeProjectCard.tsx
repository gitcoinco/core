import moment from "moment";
import { match, P } from "ts-pattern";

import { formatDate, DateFormat, cn } from "@/lib";
import { Button } from "@/primitives";
import { IconType, Icon } from "@/primitives/Icon";

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
  totalStaked?: number; // Total amount staked on the project
}

// Props for staking functionality
interface StakingProps {
  onStakeChange: (id: string, amount: number) => void; // Handler for stake amount changes
  maxStakeAmount: number; // Maximum amount that can be staked
  tokenUsdValue: number; // USD value of one token
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
  amount: number; // Amount staked
  stakedAt: Date; // Date when staked
  unlockAt: Date; // Date when unlocked
  onClaim?: () => void; // Handler for claiming
}

interface ClaimedCardProps extends StakeProjectCardBaseProps {
  variant: "claimed";
  amount: number; // Amount staked
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
    <div className="flex w-full justify-between gap-6 rounded-lg bg-grey-100 p-6">
      {/* Project Information Section - Common to all variants */}
      <div className="flex flex-col justify-start gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {match(props)
              .with({ variant: "leaderboard" }, (leaderboard) => {
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
                        getRankColor(leaderboard.rank),
                      )}
                    >
                      {leaderboard.rank}
                    </span>
                    <span className="font-ui-sans text-base font-bold">
                      {leaderboard.name || "Project Name"}
                    </span>
                  </>
                );
              })
              .otherwise(() => null)}
            <span className="font-ui-sans text-base font-bold">{props.name || "Project Name"}</span>
          </div>
          <span className="line-clamp-1 max-h-[20px] max-w-[513px] font-ui-sans text-sm font-normal">
            {props.description || "Project Description"}
          </span>
        </div>

        {/* Show total staked only for stake and leaderboard variants */}
        {match(props)
          .with({ variant: P.union("leaderboard", "stake") }, (data) => (
            <IconWithDetails
              icon={IconType.UP_TREND}
              label="Total staked"
              value={`${data.totalStaked} GTC`}
            />
          ))
          .otherwise(() => null)}
      </div>

      {/* Right side content - varies by variant */}
      {match(props)
        .with({ variant: P.union("leaderboard", "stake") }, (data) => (
          <div className="flex flex-col items-end justify-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-ui-sans text-sm font-normal">Amount (GTC)</span>
              <StakeInput
                project={{ id: data.id }}
                maxAmount={data.maxStakeAmount}
                tokenUsdValue={data.tokenUsdValue}
                onChange={(id, amount) => {
                  data.onStakeChange(id, amount);
                }}
              />
            </div>
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

          const unlockMessage = isUnlocked
            ? Math.abs(months) > 0
              ? `Unlocked ${Math.abs(months)} months ago`
              : `Unlocked ${Math.abs(days)} days ago`
            : months > 0
              ? `Unlocks in ${months} months`
              : `Unlocks in ${days} days`;

          return (
            <div className="flex items-center justify-end gap-8">
              <IconWithDetails
                icon={IconType.LIGHTNING_BOLT}
                label={`Staked ${staked.amount} GTC`}
                value={`on ${formatDate(staked.stakedAt, DateFormat.ShortMonthDayYear)}`}
              />

              <div className="flex flex-col items-center gap-2">
                {match(staked)
                  .with({ variant: "staked" }, (unclaimed) => (
                    <>
                      {isUnlocked && (
                        <Button
                          value="Claim reward"
                          icon={<Icon type={IconType.ARROW_RIGHT} className="size-4" />}
                          onClick={unclaimed.onClaim}
                          iconPosition="right"
                          className="bg-moss-100 text-black"
                        />
                      )}
                      <span className="text-sm font-normal text-black">{unlockMessage}</span>
                    </>
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
