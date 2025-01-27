"use client";

import * as React from "react";

import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/ui-shadcn/breadcrumb";

export interface BreadcrumbProps {
  items: { label: string; href: string }[];
  isLoading?: boolean; // Add isLoading prop
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, isLoading = false }) => {
  return (
    <ShadcnBreadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={isLoading ? undefined : item.href} // Disable link when loading
                className={`${isLoading ? "animate-pulse " : ""}`} // Apply styles when loading
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator
                className={`${isLoading ? "animate-pulse" : "fill-black"}`} // Apply styles when loading
              />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
};
