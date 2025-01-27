import { Hex } from "viem";

import { CheckerPoolData, CheckerPoolFetchState } from "../types";

export interface SetInitialStateAction {
  type: "SET_INITIAL_STATE";
  payload: {
    address?: Hex;
    poolId: string;
    chainId: number;
  };
}

export interface GoToReviewApplicationsAction {
  type: "GO_TO_REVIEW_APPLICATIONS";
}

export interface GoToApplicationEvaluationOverviewAction {
  type: "GO_TO_APPLICATION_EVALUATION_OVERVIEW";
  payload: {
    projectId: string;
  };
}

export interface GoToSubmitApplicationEvaluationAction {
  type: "GO_TO_SUBMIT_APPLICATION_EVALUATION";
  payload: {
    projectId: string;
  };
}

export interface GoToSubmitFinalEvaluationAction {
  type: "GO_TO_SUBMIT_FINAL_EVALUATION";
}

export interface SetPoolDataAction {
  type: "SET_POOL_DATA";
  payload: CheckerPoolData;
}

export interface SetPoolFetchStateAction {
  type: "SET_POOL_DATA_FETCH_STATE";
  payload: CheckerPoolFetchState;
}

export type CheckerAction =
  | SetInitialStateAction
  | SetPoolDataAction
  | GoToReviewApplicationsAction
  | GoToApplicationEvaluationOverviewAction
  | GoToSubmitApplicationEvaluationAction
  | GoToSubmitFinalEvaluationAction
  | SetPoolFetchStateAction;
