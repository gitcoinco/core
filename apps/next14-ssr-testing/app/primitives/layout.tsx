import * as React from "react";
import { PrimitivesMenu } from "@/components/PrimitivesMenu";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-20 px-6">
      <div className="pt-8">
        <div className="flex max-h-[80vh] flex-col gap-3 overflow-y-auto rounded-lg border border-gray-200 p-6">
          <Link className="text-grey-500 font-bold" href="/">
            {"<- Back"}
          </Link>
          <PrimitivesMenu />
        </div>
      </div>
      {children}
    </div>
  );
}
