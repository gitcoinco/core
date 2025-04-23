import { CheckerApplication } from "./application";
import { CheckerApiEvaluationQuestion } from "./checkerApi";

export interface PoolInfo {
  roundName: string;
  roundMetadata: {
    name: string;
  };
  project: {
    id: string;
    projectRoles: {
      address: string;
    }[];
  };
  strategyAddress: string;
  strategyName: string;
  applicationsStartTime: string;
  applicationsEndTime: string;
  donationsEndTime: string;
  donationsStartTime: string;
  programId: string;
}

export interface CheckerPoolData extends PoolInfo {
  chainId: number;
  poolId: string;
  applications: Record<string, CheckerApplication>;
  evaluationQuestions: CheckerApiEvaluationQuestion[];
  isPoolManager: boolean;
}

export enum PoolType {
  QuadraticFunding = "allov2.DonationVotingMerkleDistributionDirectTransferStrategy",
  DirectGrants = "allov2.DirectGrantsLiteStrategy",
  Retrofunding = "allov2.EasyRetroFundingStrategy",
}

export enum PoolStatus {
  PreRound = "PreRound",
  RoundInProgress = "RoundInProgress",
  ApplicationsInProgress = "ApplicationsInProgress",
  FundingPending = "FundingPending",
  Ended = "Ended",
}

export interface PoolData {
  roundName: string;
  roundId: string;
  chainId: number;
  poolType: PoolType;
  applicationStartDate: Date;
  applicationEndDate: Date;
  votingStartDate: Date;
  votingEndDate: Date;
  poolStatus: PoolStatus;
  operatorsCount: number;
  createdAtBlock: number;
  logoImg?: string;
  onClick?: (pool?: { chainId: number; roundId: string }) => void;
}

// Type guard for PoolStatus
export const isPoolStatus = (value: string): value is PoolStatus =>
  Object.values(PoolStatus).includes(value as PoolStatus);

// Type guard for PoolType
export const isPoolType = (value: string): value is PoolType =>
  Object.values(PoolType).includes(value as PoolType);

// Type guard for PoolData
export const isPoolData = (value: any): value is PoolData =>
  typeof value === "object" &&
  typeof value.roundName === "string" &&
  typeof value.roundId === "string" &&
  typeof value.chainId === "number" &&
  isPoolType(value.poolType) &&
  isPoolStatus(value.poolStatus) &&
  value.startDate instanceof Date &&
  value.endDate instanceof Date;

export enum PoolCategory {
  QuadraticFunding,
  Direct,
  Retrofunding,
}
