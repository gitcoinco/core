import { useContext } from "react";

import { CheckerDispatchContext } from "../CheckerContext";

export const useCheckerDispatchContext = () => {
  const checkerDispatchContext = useContext(CheckerDispatchContext);
  if (!checkerDispatchContext) {
    throw new Error(
      "useCheckerDispatchContext must be used within a CheckerDispatchContextProvider",
    );
  }
  return checkerDispatchContext;
};
