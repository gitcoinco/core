"use client";

import {
  ViewApplicationEvaluationsPage,
  ViewApplicationEvaluationsPageProps,
} from "~checker/pages";
import { CheckerProvider } from "~checker/store";

export const ApplicationView: React.FC<ViewApplicationEvaluationsPageProps> = (props) => {
  return (
    <CheckerProvider
      config={{
        checkerEndpoint: "https://checker-api-production.up.railway.app",
        gsIndexerEndpoint: "https://hasura-production-3454.up.railway.app/v1/graphql",
      }}
    >
      <ViewApplicationEvaluationsPage {...props} />
    </CheckerProvider>
  );
};
