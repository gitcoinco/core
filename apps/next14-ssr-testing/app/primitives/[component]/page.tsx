import { getSSRComponentData } from "@/app/utils/getSSRComponentData";
import { TestCaseCard } from "@/components/TestCaseCard";
import * as React from "react";

export default function Page({ params }: { params: { component: string } }) {
  const componentData = getSSRComponentData({ component: params.component, type: "primitives" });
  if (!componentData) {
    return <div>Component not found</div>;
  }
  const { component: Component, cases } = componentData;
  return (
    <div className="flex max-h-[80vh] w-full flex-wrap justify-center gap-4 overflow-y-auto">
      {cases?.map((testCase) => (
        <TestCaseCard key={testCase.label} testCase={testCase} Component={Component} />
      ))}
    </div>
  );
}
