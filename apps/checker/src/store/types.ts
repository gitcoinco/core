import { CheckerPoolData } from "@gitcoin/types";
import { Hex } from "viem";

export enum CheckerRoute {
  ReviewApplications = "review-applications",
  ApplicationEvaluationOverview = "application-evaluation-overview",
  SubmitApplicationEvaluation = "submit-application-evaluation",
  SubmitFinalEvaluation = "submit-final-evaluation",
  ApplicationEvaluation = "application-evaluation",
}

export interface CheckerPoolFetchState {
  chainId: number;
  poolId: string;
  lastFetchedAt: Date;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
}

export interface CheckerContextType {
  poolsData: Record<string, CheckerPoolData>;
  poolsFetchState: Record<string, CheckerPoolFetchState>;
  poolId?: string;
  chainId?: number;
  address?: Hex;
  route:
    | { id: CheckerRoute.SubmitFinalEvaluation }
    | { id: CheckerRoute.ReviewApplications }
    | {
        id: CheckerRoute.ApplicationEvaluationOverview | CheckerRoute.SubmitApplicationEvaluation;
        projectId: string;
      }
    | {
        id: CheckerRoute.ApplicationEvaluation;
        projectId: string;
      };
}
