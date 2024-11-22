import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

import { Evaluation } from "~checker/services/checker";

import { ReviewDropdown } from "../ReviewDropdown";

const reviewDropdownListVariants = tv({
  slots: {
    container: "flex flex-col gap-6",
  },
  defaultVariants: {
    // You can define default variants if needed
  },
});

export type ReviewDropdownListVariants = VariantProps<typeof reviewDropdownListVariants>;

interface ReviewDropdownListProps {
  evaluations: Evaluation[];
}

export const ReviewDropdownList: React.FC<ReviewDropdownListProps> = ({ evaluations }) => {
  const { container } = reviewDropdownListVariants();

  return (
    <div className={cn(container())}>
      {evaluations
        .sort((a, b) => {
          if (a.evaluatorType === "HUMAN" && b.evaluatorType !== "HUMAN") return -1;
          if (a.evaluatorType !== "HUMAN" && b.evaluatorType === "HUMAN") return 1;
          return 0;
        })
        .map((evaluation, index) => (
          <ReviewDropdown
            key={index}
            evaluation={evaluation}
            index={index + 1}
            isOpen={index === 0}
          />
        ))}
    </div>
  );
};
