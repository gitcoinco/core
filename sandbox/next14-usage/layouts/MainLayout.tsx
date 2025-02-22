import * as React from "react";
import { SSRComponentType } from "@/utils/getSSRComponentData";
import Link from "next/link";
import { ComponentsMenuWrapper } from "@/components/ComponentsMenuWrapper";

export const MainLayout = ({
  type,
  children,
}: Readonly<{ type: SSRComponentType; children: React.ReactNode }>) => {
  return (
    <div className="flex gap-20 px-6">
      <div className="border-gray-200 flex h-[calc(100vh-100px)] max-h-[75vh] flex-col gap-3 rounded-lg border py-6 pl-6">
        <Link className="font-bold text-grey-500" href="/">
          {"<- Back"}
        </Link>
        <ComponentsMenuWrapper type={type} />
      </div>
      {children}
    </div>
  );
};
