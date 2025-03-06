import { StakeProjectCardProps } from "@/features/project/components/StakeProjectCard/StakeProjectCard";

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
  stakedAmount?: number;
  lastStakeDate?: Date;
  claimed?: boolean;
  isLoading?: boolean;
  onClaim?: (pool: { chainId: number; roundId: string }) => void;
  onClick?: (pool: { chainId: number; roundId: string }) => void;
  stakedProjects?: StakeProjectCardProps[];
}
