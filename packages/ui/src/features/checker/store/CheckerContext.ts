import { createContext } from "react";

import { CheckerAction, CheckerContextType, CheckerRoute } from "@gitcoin/types/checker";

export const initialState: CheckerContextType = {
  poolsData: {},
  route: { id: CheckerRoute.ReviewApplications },
  poolsFetchState: {},
};

export const CheckerContext = createContext<CheckerContextType>(initialState);
export const CheckerDispatchContext = createContext<React.Dispatch<CheckerAction> | null>(null);
