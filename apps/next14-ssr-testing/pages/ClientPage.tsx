"use client";

import * as React from "react";
import { TestCaseCard } from "@/components/TestCaseCard";
import { SSRComponentType, getSSRComponentData } from "@/utils/getSSRComponentData";

export const ClientPage = ({ type, component }: { type: SSRComponentType; component: string }) => {
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
