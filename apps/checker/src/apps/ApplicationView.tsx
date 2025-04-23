"use client";

import {
  ViewApplicationEvaluationsPage,
  ViewApplicationEvaluationsPageProps,
} from "@/pages";
import { CheckerProvider } from "@/store";

export const ApplicationView: React.FC<ViewApplicationEvaluationsPageProps> = (props) => {
  return (
    <CheckerProvider>
      <ViewApplicationEvaluationsPage {...props} />
    </CheckerProvider>
  );
};
