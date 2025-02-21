import * as React from "react";
import { ComponentsMenu } from "@/components/ComponentsMenu";
import { index as componentsIndex } from "@gitcoin/ui/componentsSSR";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-20 px-6">
      <div className="pt-8">
        <div className="border-gray-200 flex max-h-[75vh] flex-col gap-3 rounded-lg border py-6 pl-6">
          <Link className="font-bold text-grey-500" href="/">
            {"<- Back"}
          </Link>
          <div className="overflow-y-auto pr-6">
            <ComponentsMenu path="components" index={componentsIndex} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
