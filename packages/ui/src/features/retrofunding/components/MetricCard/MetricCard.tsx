"use client";

import * as React from "react";

import { tv } from "tailwind-variants";
import { match } from "ts-pattern";

import { cn } from "@/lib";
import { Button } from "@/primitives/Button";
import { Icon, IconType } from "@/primitives/Icon";
import { Skeleton } from "@/primitives/Skeleton";

const metricCardVariants = tv({
  slots: {
    base: "flex w-[720px] flex-col items-start justify-center gap-6 rounded-lg border border-grey-200 px-10 py-6",
    content: "flex w-full items-start justify-between",
    leftSection: "flex w-2/3 flex-col gap-4",
    heading: "font-ui-sans text-lg font-bold text-text-primary",
    paragraph:
      "line-clamp-3 h-20 font-ui-sans text-base font-normal leading-relaxed text-text-secondary",
    buttonContainer: "flex justify-end",
    bottomLeftSection:
      "flex w-full cursor-pointer items-center font-sans text-sm font-normal text-text-secondary hover:opacity-85",
  },
  variants: {
    variant: {
      metric: "bg-white",
      ballot: "bg-background-secondary",
    },
  },
});

export interface MetricCardProps {
  title: string;
  identifier: string;
  description: string;
  variant?: "metric" | "ballot";
  isAdded?: boolean;
  onClick: () => void;
  onReadMore: () => void;
  customButton?: React.ReactNode;
  hideButton?: boolean;
  isLoading?: boolean;
  className?: string;
}

const MetricCardLoading: React.FC<{ hideButton: boolean }> = ({ hideButton }) => {
  const {
    base,
    content,
    leftSection,
    heading: headingClass,
    paragraph: paragraphClass,
    buttonContainer,
    bottomLeftSection,
  } = metricCardVariants();

  return (
    <div className={cn(base())}>
      <div className={content()}>
        <div className={cn(leftSection(), hideButton && "w-full")}>
          <h3 className={headingClass()}>
            <Skeleton className="h-6 w-1/3 rounded-md" />
          </h3>
          <div className={cn(paragraphClass(), "mt-2 flex flex-col gap-3")}>
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
        </div>
        {!hideButton && (
          <div className={cn(buttonContainer(), "w-1/3")}>
            <Skeleton className="h-8 w-2/3 rounded-md" />
          </div>
        )}
      </div>
      <div className={bottomLeftSection()}>
        <Skeleton className="h-3 w-1/6 rounded-md" />
      </div>
    </div>
  );
};

const MetricCardState: React.FC<MetricCardProps> = ({
  title,
  description,
  variant = "metric",
  isAdded = false,
  onClick,
  onReadMore,
  customButton,
  hideButton = false,
  className,
}) => {
  const {
    base,
    content,
    leftSection,
    heading: headingClass,
    paragraph: paragraphClass,
    buttonContainer,
    bottomLeftSection,
  } = metricCardVariants();

  const background = metricCardVariants.variants.variant[variant];

  const renderButton = () => {
    if (customButton) {
      return customButton;
    }

    const buttonIcon = isAdded ? (
      <Icon className="size-4" type={IconType.CHECK} />
    ) : (
      <Icon className="size-4" type={IconType.PLUS} />
    );

    const buttonText = isAdded
      ? variant === "metric"
        ? "Metric added"
        : "Added to ballot"
      : variant === "metric"
        ? "Add metric"
        : "Add to ballot";

    const buttonVariant = isAdded
      ? "light-green"
      : variant === "metric"
        ? "secondary"
        : "light-purple";

    return (
      <Button
        icon={buttonIcon}
        iconPosition="left"
        variant={buttonVariant}
        value={buttonText}
        onClick={onClick}
      />
    );
  };

  return (
    <div className={cn(base(), background, className)}>
      <div className={content()}>
        <div className={cn(leftSection(), hideButton && "w-full")}>
          <h3 className={headingClass()}>{title}</h3>
          <div className={paragraphClass()}>{description}</div>
        </div>
        {!hideButton && <div className={buttonContainer()}>{renderButton()}</div>}
      </div>
      <div className={bottomLeftSection()} onClick={onReadMore}>
        Read more
      </div>
    </div>
  );
};

export const MetricCard: React.FC<MetricCardProps> = (props: MetricCardProps) => {
  return match(props)
    .with({ isLoading: true }, ({ hideButton }) => (
      <MetricCardLoading hideButton={hideButton ?? false} />
    ))
    .otherwise((props) => <MetricCardState {...props} />);
};
