import { tv } from "tailwind-variants";
import { match } from "ts-pattern";

import { EvaluationAction, ProjectStatus } from "~checker/types";

const commonButtonStyles = "h-[36px] w-[111px] text-[14px]/[20px]";
// TODO instead of ts-pattern, use a more readable approach with tailwind compound variants
export const variants = tv({
  slots: {
    approvePending: `${commonButtonStyles} border border-moss-500 bg-white text-black`,
    rejectPending: `${commonButtonStyles} border border-red-700 bg-white text-black`,
    disabled: `${commonButtonStyles} bg-grey-100 text-grey-500`,
    reject: `${commonButtonStyles} border border-red-700 bg-red-50 text-red-700`,
    approve: `${commonButtonStyles} border border-moss-500 bg-moss-50 text-moss-500`,
  },
});

// Utility function to get button properties based on status and action
export const getButtonProps = (
  currentStatus: ProjectStatus,
  action: "approve" | "reject",
  disabled?: boolean,
) =>
  match({ status: currentStatus, action, disabled })
    .with({ disabled: true }, () => ({
      className: variants.slots.disabled,
      iconFillClass: "fill-grey-500",
    }))
    .with({ status: "pending", action: "approve" }, () => ({
      className: variants.slots.approvePending,
      iconFillClass: "fill-moss-500",
    }))
    .with({ status: "pending", action: "reject" }, () => ({
      className: variants.slots.rejectPending,
      iconFillClass: "fill-red-700",
    }))
    .with({ status: "approved", action: "approve" }, () => ({
      className: variants.slots.approve,
      iconFillClass: "fill-moss-500",
    }))
    .with({ status: "approved", action: "reject" }, () => ({
      className: variants.slots.disabled,
      iconFillClass: "fill-grey-500",
    }))
    .with({ status: "rejected", action: "approve" }, () => ({
      className: variants.slots.disabled,
      iconFillClass: "fill-grey-500",
    }))
    .with({ status: "rejected", action: "reject" }, () => ({
      className: variants.slots.reject,
      iconFillClass: "fill-red-700",
    }))
    .otherwise(() => ({
      className: variants.slots.disabled,
      iconFillClass: "fill-grey-500",
    }));

// Utility function to handle evaluation logic using ts-pattern
export const evaluateProject = (
  currentStatus: ProjectStatus,
  action: EvaluationAction,
  setCurrentStatus: (status: ProjectStatus) => void,
  onEvaluate: (projectId: string, action: EvaluationAction) => void,
  projectId: string,
) => {
  const { newStatus, newAction } = match({ currentStatus, action })
    .with({ currentStatus: "approved", action: "approve" }, () => ({
      newStatus: "pending",
      newAction: "skip",
    }))
    .with({ currentStatus: "rejected", action: "reject" }, () => ({
      newStatus: "pending",
      newAction: "skip",
    }))
    .otherwise(() => ({
      newStatus: action === "approve" ? "approved" : "rejected",
      newAction: action,
    }));

  setCurrentStatus(newStatus as ProjectStatus);
  onEvaluate(projectId, newAction as EvaluationAction);
};
