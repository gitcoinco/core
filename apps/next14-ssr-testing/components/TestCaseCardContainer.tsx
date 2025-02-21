import * as React from "react";

export const TestCaseCardContainer = ({
  label,
  children,
}: React.PropsWithChildren<{ label?: string }>) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-lg font-bold">{label}</h2>
      <div className="border-gray-200 flex max-h-[80vh] flex-col items-center gap-2 overflow-y-auto rounded-lg border p-6">
        {children}
      </div>
    </div>
  );
};
