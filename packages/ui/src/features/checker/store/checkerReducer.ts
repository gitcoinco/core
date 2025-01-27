import { generatePoolUUID } from "~checker/utils/generatePoolUUID";

import { CheckerAction } from "./actions";
import { CheckerContextType, CheckerRoute } from "./types";

export const checkerReducer = (
  state: CheckerContextType,
  action: CheckerAction,
): CheckerContextType => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return { ...state, ...action.payload };
    case "SET_POOL_DATA_FETCH_STATE": {
      const { poolId, chainId } = action.payload;
      const poolUUID = generatePoolUUID(poolId, chainId);
      if (!poolUUID) return state;
      return {
        ...state,
        poolsFetchState: {
          ...state.poolsFetchState,
          [poolUUID]: action.payload,
        },
      };
    }
    case "GO_TO_REVIEW_APPLICATIONS":
      return { ...state, route: { id: CheckerRoute.ReviewApplications } };
    case "GO_TO_APPLICATION_EVALUATION_OVERVIEW":
      return {
        ...state,
        route: {
          id: CheckerRoute.ApplicationEvaluationOverview,
          projectId: action.payload.projectId,
        },
      };
    case "GO_TO_SUBMIT_APPLICATION_EVALUATION":
      return {
        ...state,
        route: {
          id: CheckerRoute.SubmitApplicationEvaluation,
          projectId: action.payload.projectId,
        },
      };
    case "GO_TO_SUBMIT_FINAL_EVALUATION":
      return { ...state, route: { id: CheckerRoute.SubmitFinalEvaluation } };
    case "SET_POOL_DATA": {
      const { poolId, chainId } = action.payload;
      const poolUUID = generatePoolUUID(poolId, chainId);
      if (!poolUUID) return state;

      return {
        ...state,
        poolsData: { ...state.poolsData, [poolUUID]: { ...action.payload } },
      };
    }
    default:
      return state;
  }
};
