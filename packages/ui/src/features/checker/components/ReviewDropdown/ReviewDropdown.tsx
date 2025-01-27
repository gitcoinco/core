"use client";

import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { cn, formatLocalDate, getAddressLabel, capitalizeWord } from "@/lib/utils";
import { Accordion } from "@/primitives/Accordion";
import { Badge } from "@/primitives/Badge";
import { Icon, IconType } from "@/primitives/Icon";

import { Evaluation } from "../../types";

const ReviewDropdownVariants = tv({
  slots: {
    header: "flex w-full items-center justify-between gap-4 py-4 pr-2",
    headerLeft: "flex flex-1 items-center gap-4",
    headerRight: "flex items-center justify-end gap-4",
    content: "flex w-full flex-col gap-6 px-12 py-4",
    textRow: "space-x-1 text-left",
    status: "text-grey-500",
    reviewTitle: "font-ui-sans text-xl text-black",
    evaluatorTitle: "absolute my-1 font-ui-sans text-sm font-normal text-grey-900",
    reviewDate: "text-base font-normal text-black",
  },
  defaultVariants: {},
});

const evaluationSummaryVariants = tv({
  base: "flex items-center gap-2 self-stretch rounded-lg p-4",
  variants: {
    background: {
      default: "bg-grey-50",
      light: "bg-white",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

type ReviewDropdownVariants = VariantProps<typeof ReviewDropdownVariants>;

export interface ReviewDropdownContentProps {
  evaluation: Evaluation;
  index?: number;
  isOpen?: boolean;
}

// Main Component
export const ReviewDropdown: React.FC<ReviewDropdownContentProps> = ({
  evaluation,
  index,
  isOpen = true,
}) => {
  const accordionVariant = evaluation.evaluatorType === "HUMAN" ? "light" : "blue";
  return (
    <Accordion
      border="md"
      paddingX="lg"
      variant={accordionVariant}
      header={<ReviewDropdownHeader evaluation={evaluation} index={index} />}
      content={<ReviewDropdownContent evaluation={evaluation} />}
      isOpen={isOpen}
    />
  );
};

// Header Component
const ReviewDropdownHeader: React.FC<ReviewDropdownContentProps> = ({ evaluation, index }) => {
  let reviewTitle = "";
  let evaluatorTitle = "";
  let evaluatorIconType;

  if (evaluation.evaluatorType === "HUMAN") {
    reviewTitle = `Review ${index ?? ""}`;
    evaluatorIconType = IconType.USER;
    evaluatorTitle = `by ${getAddressLabel(undefined, evaluation.evaluator)}`;
  } else {
    reviewTitle = "AI Powered";
    evaluatorIconType = IconType.SHINE;
    evaluatorTitle = "BETA";
  }

  const rating = evaluation.evaluationAnswers.filter((answer) => answer.answer === "YES").length;

  const reviewStatusBadgeVariant =
    evaluation.evaluationStatus === "APPROVED"
      ? "success-strong"
      : evaluation.evaluationStatus === "REJECTED"
        ? "error-strong"
        : "info-strong";

  const {
    header,
    headerLeft,
    headerRight,
    textRow,
    status,
    reviewTitle: reviewTitleClass,
    evaluatorTitle: evaluatorTitleClass,
    reviewDate,
  } = ReviewDropdownVariants({
    variant: "default",
  });

  return (
    <div className={cn(header())}>
      <div className={cn(headerLeft())}>
        <Icon type={evaluatorIconType} />
        <div>
          <p className={cn(textRow())}>
            <span className={cn(reviewTitleClass())}>{reviewTitle}</span>
            <span className={cn(evaluatorTitleClass())}> {evaluatorTitle}</span>
          </p>
          <p className={cn(textRow(), reviewDate())}>
            Reviewed on {formatLocalDate(evaluation.lastUpdatedAt)}
          </p>
        </div>
      </div>
      <div className={cn(headerRight())}>
        <div className="flex gap-2">
          {getIcon(evaluation.evaluationStatus)}
          <p className={cn(status())}>
            {rating}/{evaluation.evaluationAnswers.length}
          </p>
        </div>
        <Badge variant={reviewStatusBadgeVariant}>
          {capitalizeWord(evaluation.evaluationStatus)}
        </Badge>
      </div>
    </div>
  );
};

// Content Component
const ReviewDropdownContent: React.FC<ReviewDropdownContentProps> = ({ evaluation }) => {
  const { content } = ReviewDropdownVariants({ variant: "default" });

  return (
    <div className={cn(content())}>
      <EvaluationSummary evaluation={evaluation} />
      <EvaluationAnswers evaluation={evaluation} />
    </div>
  );
};

// Evaluation Summary Component
const EvaluationSummary: React.FC<ReviewDropdownContentProps> = ({ evaluation }) => {
  const backgroundClass = evaluationSummaryVariants({
    background: evaluation.evaluatorType === "HUMAN" ? "default" : "light",
  });

  return (
    <div className={cn(backgroundClass)}>
      <p>{evaluation.summary}</p>
    </div>
  );
};

// Evaluation Answers Component
const EvaluationAnswers: React.FC<ReviewDropdownContentProps> = ({ evaluation }) => {
  return (
    <div className="flex flex-col gap-6">
      {evaluation.evaluationAnswers.map((evaluation, index) => (
        <div
          key={index}
          className="flex items-start gap-2 font-ui-sans text-base font-normal leading-7 text-black"
        >
          <span className="mt-0.5 shrink-0">{getIcon(evaluation.answer)}</span>
          <p className="grow">{evaluation.evaluationQuestion?.question}</p>
        </div>
      ))}
    </div>
  );
};

const getIcon = (value: string) => {
  const iconMap = {
    APPROVED: [IconType.SOLID_CHECK, "fill-moss-700"],
    REJECTED: [IconType.SOLID_X, "fill-red-900"],
    YES: [IconType.SOLID_CHECK, "fill-moss-700"],
    NO: [IconType.SOLID_X, "fill-red-900"],
    UNCERTAIN: [IconType.SOLID_QUESTION_MARK_CIRCLE, "fill-yellow-300"],
  };

  const [iconType, iconColor] = Object.keys(iconMap).includes(value)
    ? iconMap[value as keyof typeof iconMap]
    : [IconType.SOLID_QUESTION_MARK_CIRCLE, "fill-yellow-300"];

  return <Icon className={`my-0.5 ${iconColor}`} type={iconType as IconType} />;
};
