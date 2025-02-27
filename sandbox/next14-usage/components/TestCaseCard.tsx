import * as React from "react";
import { SSRComponentsCase } from "@gitcoin/ui/types";
import { TestCaseCardContainer } from "./TestCaseCardContainer";

export const TestCaseCard = <T,>({
  testCase,
  Component,
}: {
  testCase: SSRComponentsCase<T>;
  Component: React.ComponentType<T>;
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
