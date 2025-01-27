"use client";

import {
  ViewApplicationEvaluationsPage,
  ViewApplicationEvaluationsPageProps,
} from "~checker/pages";
import { CheckerProvider } from "~checker/store";

export const ApplicationView: React.FC<ViewApplicationEvaluationsPageProps> = (props) => {
  return (
    <CheckerProvider>
      <ViewApplicationEvaluationsPage {...props} />
    </CheckerProvider>
  );
};
