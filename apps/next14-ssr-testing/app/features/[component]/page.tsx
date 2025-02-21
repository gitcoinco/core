import featuresSSR from "@gitcoin/ui/featuresSSR";
import * as React from "react";

export default function Page({ params }: { params: { component: string } }) {
  if (!featuresSSR.components[params.component]) {
    return <div>Component not found</div>;
  }

  const { component: Component, cases } = featuresSSR.components[params.component];

  return (
    <div className="flex max-h-[80vh] w-full flex-wrap justify-center gap-4 overflow-y-auto">
      {cases?.map(({ label, props, groupProps }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-bold">{label}</h2>
          <div className="border-gray-200 flex max-h-[80vh] flex-col items-center gap-2 overflow-y-auto rounded-lg border p-6">
            {groupProps &&
              Object.entries(groupProps).map(([key, props]) => <Component key={key} {...props} />)}
            {props && <Component {...props} />}
          </div>
        </div>
      ))}
    </div>
  );
}
