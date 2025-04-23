import { StakeProjectCardProps } from "~project";

export interface StakePoolDataCardProps {
  roundName: string;
  roundDescription: string;
  chainId: number;
  roundId: string;
  votingStartDate: Date;
  votingEndDate: Date;
  totalProjects: number;
  totalStaked: number;
  matchingPoolAmount: number;
  matchingPoolTokenTicker: string;
  stakedAmount?: number;
  lastStakeDate?: Date;
  isClaimable?: boolean;
  claimed?: boolean;
  isLoading?: boolean;
  stakedProjects?: StakeProjectCardProps[];
  onClick?: (pool: { chainId: number; roundId: string }) => void;
}
