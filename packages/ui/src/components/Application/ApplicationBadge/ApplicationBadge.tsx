"use client";

import * as React from "react";

import { tv } from "tailwind-variants";
import { match } from "ts-pattern";

import { Badge } from "@/primitives/Badge";

export enum ApplicationBadgeStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

const ApplicationBadgeVariants = tv({
  variants: {
    variant: {
      pending: "border-transparent bg-yellow-100 text-black",
      approved: "border-transparent bg-green-100 text-black",
      rejected: "border-transparent bg-red-100 text-black",
    },
  },
});

export interface ApplicationBadgeProps {
  status: ApplicationBadgeStatus;
}

export const ApplicationBadge: React.FC<ApplicationBadgeProps> = (props) => {
  const { variant, text } = match(props)
    .with({ status: ApplicationBadgeStatus.Pending }, () => ({
      variant: ApplicationBadgeVariants({ variant: "pending" }),
      text: "Pending",
    }))
    .with({ status: ApplicationBadgeStatus.Approved }, () => ({
      variant: ApplicationBadgeVariants({ variant: "approved" }),
      text: "Approved",
    }))
    .with({ status: ApplicationBadgeStatus.Rejected }, () => ({
      variant: ApplicationBadgeVariants({ variant: "rejected" }),
      text: "Rejected",
    }))

    .otherwise(() => ({
      variant: "border border-red-900 bg-white text-red-900",
      text: "Error: Invalid Application Status",
    }));

  return <Badge className={variant}>{text}</Badge>;
};
