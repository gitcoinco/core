import * as React from "react";
import { MainLayout } from "@/layouts/MainLayout";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout type="components">{children}</MainLayout>;
}
