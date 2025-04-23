import {
  GoToSubmitApplicationEvaluationAction,
  GoToApplicationEvaluationOverviewAction,
  GoToReviewApplicationsAction,
  GoToSubmitFinalEvaluationAction,
  SetInitialStateAction,
  SetPoolDataAction,
  SetPoolFetchStateAction,
} from "./types";

export const setInitialStateAction = (
  payload: SetInitialStateAction["payload"],
): SetInitialStateAction => ({
  type: "SET_INITIAL_STATE",
  payload,
});

export const goToReviewApplicationsAction = (): GoToReviewApplicationsAction => ({
  type: "GO_TO_REVIEW_APPLICATIONS",
});

export const goToApplicationEvaluationOverviewAction = (
  payload: GoToApplicationEvaluationOverviewAction["payload"],
): GoToApplicationEvaluationOverviewAction => ({
  type: "GO_TO_APPLICATION_EVALUATION_OVERVIEW",
  payload,
});

export const goToSubmitApplicationEvaluationAction = (
  payload: GoToSubmitApplicationEvaluationAction["payload"],
): GoToSubmitApplicationEvaluationAction => ({
  type: "GO_TO_SUBMIT_APPLICATION_EVALUATION",
  payload,
});

export const goToSubmitFinalEvaluationAction = (): GoToSubmitFinalEvaluationAction => ({
  type: "GO_TO_SUBMIT_FINAL_EVALUATION",
});

export const setPoolDataAction = (payload: SetPoolDataAction["payload"]): SetPoolDataAction => ({
  type: "SET_POOL_DATA",
  payload,
});

export const setPoolFetchStateAction = (
  payload: SetPoolFetchStateAction["payload"],
): SetPoolFetchStateAction => ({
  type: "SET_POOL_DATA_FETCH_STATE",
  payload,
});
