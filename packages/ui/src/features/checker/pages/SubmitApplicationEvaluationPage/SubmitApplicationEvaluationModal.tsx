"use client";

import { useMemo } from "react";

import { match } from "ts-pattern";

import { Button } from "@/primitives/Button";
import { Modal } from "@/primitives/Modal";
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/ui-shadcn/dialog";

import { EvaluationActionState, EvaluationStatus } from "~checker/types";

import { getButtonConfig } from "./utils";

interface SubmitApplicationEvaluationModalProps {
  evaluationStatus?: EvaluationStatus;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  isSuccess: boolean;
  isEvaluating: boolean;
  isError: boolean;
  onSave: () => void;
}

export const SubmitApplicationEvaluationModal = ({
  evaluationStatus = EvaluationStatus.APPROVED,
  onOpenChange,
  isOpen,
  isSuccess,
  isEvaluating,
  isError,
  onSave,
}: SubmitApplicationEvaluationModalProps) => {
  // Determine the modal title
  const modalTitle = useMemo(() => {
    return match(evaluationStatus)
      .with(EvaluationStatus.APPROVED, () => "Approve Application")
      .with(EvaluationStatus.REJECTED, () => "Reject Application")
      .otherwise(() => "Evaluate Application"); // Fallback title
  }, [evaluationStatus]);

  const modalDescription =
    "Make sure your evaluation is complete before saving. If you want to go back to edit, press cancel.";

  // Determine the current action state
  const actionState: EvaluationActionState = useMemo(() => {
    let status: EvaluationActionState["status"] = "idle";
    if (isEvaluating) {
      status = "evaluating";
    } else if (isError) {
      status = "evaluatingError";
    } else if (isSuccess) {
      status = "success";
    }
    return { status } as const;
  }, [isEvaluating, isError, isSuccess]);

  // Define button configurations based on action state
  const { text: buttonText, disabled: isButtonDisabled } = getButtonConfig(actionState.status);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Modal showCloseButton={false} className="max-w-[414px] p-6">
        <div className="flex flex-col items-center gap-6 text-start">
          <DialogHeader className="flex max-w-[366px] flex-col items-start gap-2 text-start">
            <DialogTitle className="text-[18px]/[28px] font-medium">{modalTitle}</DialogTitle>
            <DialogDescription className="text-[14px]/[20px] text-grey-900">
              {modalDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center gap-6">
            <Button
              value="Cancel"
              className="bg-red-50 text-red-700"
              variant="none"
              onClick={() => onOpenChange(false)}
            />
            <Button
              value={buttonText}
              className="bg-moss-700 text-white"
              variant="none"
              onClick={onSave}
              disabled={isButtonDisabled}
            />
          </div>
        </div>
      </Modal>
    </Dialog>
  );
};
