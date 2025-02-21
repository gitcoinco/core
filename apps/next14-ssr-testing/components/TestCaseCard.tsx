import * as React from "react";
import { SSRComponentsCase } from "@gitcoin/ui/types";
import { TestCaseCardContainer } from "./TestCaseCardContainer";

export const TestCaseCard = ({
  testCase,
  Component,
}: {
  testCase: SSRComponentsCase;
  Component: React.ComponentType<unknown>;
}) => {
  const { label, props, groupProps } = testCase;
  return (
    <TestCaseCardContainer label={label}>
      {groupProps &&
        Object.entries(groupProps).map(([key, props]) => <Component key={key} {...props} />)}
      {props && <Component {...props} />}
    </TestCaseCardContainer>
  );
};
