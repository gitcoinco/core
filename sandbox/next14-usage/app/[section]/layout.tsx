import * as React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { SSRComponentType } from "@/utils/getSSRComponentData";

export default function Layout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { section: string } }>) {
  return <MainLayout type={params.section as SSRComponentType}>{children}</MainLayout>;
}
