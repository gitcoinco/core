import { PropsWithChildren, useReducer } from "react";

import { Toaster } from "@gitcoin/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CheckerContext, CheckerDispatchContext, initialState } from "@/store/CheckerContext";
import { checkerReducer } from "@/store/checkerReducer";

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
