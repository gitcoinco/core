"use client";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse bg-grey-100 dark:bg-black", className)} {...props} />;
}

export { Skeleton };
