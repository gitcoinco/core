"use client";

import React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/ui-shadcn/tooltip";

import { ReviewIconGroup, ReviewIconGroupProps } from "./components/ReviewIconGroup";

const variants = tv({
  slots: {
    container: "flex items-center gap-2",
    text: "truncate text-[16px]/[24px]",
  },
});

export interface ReviewsCounterLabelProps extends ReviewIconGroupProps {
  className?: string;
}

export const ReviewsCounterLabel: React.FC<ReviewsCounterLabelProps> = ({
  positiveReviews = 0,
  negativeReviews = 0,
  maxNIcons,
  className,
}) => {
  const { text, container } = variants();

  const totalReviews = Math.max(0, positiveReviews) + Math.max(0, negativeReviews);

  return (
    <div className={cn(container(), className)}>
      <ReviewIconGroup
        positiveReviews={positiveReviews}
        negativeReviews={negativeReviews}
        maxNIcons={maxNIcons}
      />
      <span className={text()}>
        {totalReviews ? `${totalReviews} Review${totalReviews > 1 ? "s" : ""}` : "Needs review"}
      </span>
    </div>
  );
};

export const ReviewsCounterLabelWithTooltip: React.FC<ReviewsCounterLabelProps> = ({
  positiveReviews = 0,
  negativeReviews = 0,
  maxNIcons = 0,
  className,
}) => {
  const { text, container } = variants();

  const totalReviews = Math.max(0, positiveReviews) + Math.max(0, negativeReviews);

  const tooltipContent =
    totalReviews === 0
      ? "No reviews"
      : totalReviews === 1
        ? `${totalReviews} review`
        : `${totalReviews} reviews`;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div className={cn(container(), className)}>
            <ReviewIconGroup
              positiveReviews={positiveReviews}
              negativeReviews={negativeReviews}
              maxNIcons={maxNIcons}
            />
            {totalReviews === 0 && <span className={text()}>Needs review</span>}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="start" className={text()}>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
