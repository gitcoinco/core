import * as React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { SSRComponentType } from "@/utils/getSSRComponentData";

interface Props {
  children: React.ReactNode;
  params: Promise<{ section: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { section } = await params;
  return <MainLayout type={section as SSRComponentType}>{children}</MainLayout>;
}
