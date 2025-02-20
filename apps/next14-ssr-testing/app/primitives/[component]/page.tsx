import primitivesSSR from "@gitcoin/ui/primitivesSSR";
import * as React from "react";

export default function Page({ params }: { params: { component: string } }) {
  if (!primitivesSSR.components[params.component]) {
    return <div>Component not found</div>;
  }

  const { component: Component, cases } = primitivesSSR.components[params.component];

  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      {cases.map(({ label, props }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-bold">{label}</h2>
          <div className="flex max-h-[70vh] flex-col items-center gap-2 overflow-y-auto rounded-lg border border-gray-200 p-6">
            {props.map(([key, props]) => (
              <Component key={key} {...props} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
