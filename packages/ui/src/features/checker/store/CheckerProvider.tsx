import { PropsWithChildren, useReducer } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/Toaster";

import { CheckerConfig, defaultConfig, InitChecker } from "~checker/init/InitChecker";
import {
  CheckerContext,
  CheckerDispatchContext,
  initialState,
} from "~checker/store/CheckerContext";
import { checkerReducer } from "~checker/store/checkerReducer";

const queryClient = new QueryClient();

export const CheckerProvider = ({
  children,
  config,
}: PropsWithChildren<{ config?: CheckerConfig }>) => {
  const [state, dispatch] = useReducer(checkerReducer, initialState);
  return (
    <QueryClientProvider client={queryClient}>
      <CheckerContext.Provider value={state}>
        <CheckerDispatchContext.Provider value={dispatch}>
          <InitChecker config={config ?? defaultConfig}>
            <Toaster />
            {children}
          </InitChecker>
        </CheckerDispatchContext.Provider>
      </CheckerContext.Provider>
    </QueryClientProvider>
  );
};
