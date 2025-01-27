import { PropsWithChildren, useReducer } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/Toaster";

import {
  CheckerContext,
  CheckerDispatchContext,
  initialState,
} from "~checker/store/CheckerContext";
import { checkerReducer } from "~checker/store/checkerReducer";

const queryClient = new QueryClient();

export const CheckerProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(checkerReducer, initialState);
  return (
    <QueryClientProvider client={queryClient}>
      <CheckerContext.Provider value={state}>
        <CheckerDispatchContext.Provider value={dispatch}>
          <Toaster />
          {children}
        </CheckerDispatchContext.Provider>
      </CheckerContext.Provider>
    </QueryClientProvider>
  );
};
