"use client";

import "lucide-react";

import { cn } from "@/lib/utils";
import { Icon, IconType } from "@/primitives/Icon";

import { variants } from "./variants";

const { container } = variants();

export const IconLabelContainer = ({
  type,
  iconVariant,
  iconType,
  className,
  children,
}: React.PropsWithChildren<{
  type: any;
  className?: string;
  iconType?: IconType;
  iconVariant?: string;
}>) => (
  <div className={cn(container({ type }), className)}>
    {iconType && iconVariant && <Icon type={iconType} className={iconVariant} />}
    {children}
  </div>
);
