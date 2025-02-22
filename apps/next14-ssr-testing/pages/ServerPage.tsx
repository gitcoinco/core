import { SSRComponentType, getSSRComponentData } from "@/utils/getSSRComponentData";
import { TestCaseCard } from "@/components/TestCaseCard";
import * as React from "react";

export const ServerPage = ({ component, type }: { component: string; type: SSRComponentType }) => {
  const componentData = getSSRComponentData({ component, type });
  if (!componentData) {
    return <div>Component not found</div>;
  }
  const { component: Component, cases } = componentData;
  return (
    <div className="flex max-h-[80vh] flex-wrap justify-center gap-4 overflow-y-auto">
      {cases?.map((testCase) => (
        <TestCaseCard key={testCase.label} testCase={testCase} Component={Component} />
      ))}
    </div>
  );
};
