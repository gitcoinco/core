import { useMemo } from "react";

import { match } from "ts-pattern";

import { Button } from "@/primitives/Button";
import { Modal } from "@/primitives/Modal";
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/ui-shadcn/dialog";

import { EVALUATION_STATUS } from "~checker/services/checker/api";

import { getButtonConfig } from "./utils";

type SubmitApplicationEvaluationModalProps = {
  evaluationStatus?: EVALUATION_STATUS;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  isSigning: boolean;
  isErrorSigning: boolean;
  isSuccess: boolean;
  isEvaluating: boolean;
  isError: boolean;
  onSave: () => void;
};

type ActionState =
  | { status: "idle" }
  | { status: "signing" }
  | { status: "signingError" }
  | { status: "evaluating" }
  | { status: "evaluatingError" }
  | { status: "success" };

export const SubmitApplicationEvaluationModal = ({
  evaluationStatus = EVALUATION_STATUS.APPROVED,
  onOpenChange,
  isOpen,
  isSigning,
  isErrorSigning,
  isSuccess,
  isEvaluating,
  isError,
  onSave,
}: SubmitApplicationEvaluationModalProps) => {
  // Determine the modal title
  const modalTitle = useMemo(() => {
    return match(evaluationStatus)
      .with(EVALUATION_STATUS.APPROVED, () => "Approve Application")
      .with(EVALUATION_STATUS.REJECTED, () => "Reject Application")
      .otherwise(() => "Evaluate Application"); // Fallback title
  }, [evaluationStatus]);

  const modalDescription =
    "Make sure your evaluation is complete before saving. If you want to go back to edit, press cancel.";

  // Determine the current action state
  const actionState: ActionState = useMemo(() => {
    let status: ActionState["status"] = "idle";
    if (isSigning) {
      status = "signing";
    } else if (isErrorSigning) {
      status = "signingError";
    } else if (isEvaluating) {
      status = "evaluating";
    } else if (isError) {
      status = "evaluatingError";
    } else if (isSuccess) {
      status = "success";
    }
    return { status } as const;
  }, [isSigning, isErrorSigning, isEvaluating, isError, isSuccess]);

  // Define button configurations based on action state
  const { text: buttonText, disabled: isButtonDisabled } = getButtonConfig(actionState.status);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Modal showCloseButton={false} className="max-w-[414px] p-6">
        <div className="flex flex-col items-center gap-6 text-start">
          <DialogHeader className="flex max-w-[366px] flex-col gap-2">
            <DialogTitle className="text-[18px]/[28px] font-medium">{modalTitle}</DialogTitle>
            <DialogDescription className="text-[14px]/[20px] text-grey-900">
              {modalDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-6">
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
