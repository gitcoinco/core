import { useContext } from "react";

import { CheckerContext } from "../CheckerContext";

export const useCheckerContext = () => {
  const checkerContext = useContext(CheckerContext);
  if (!checkerContext) {
    throw new Error("useCheckerContext must be used within a CheckerContextProvider");
  }
  return checkerContext;
};
