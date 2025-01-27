"use client";

import { Check, X } from "lucide-react";

import { ProgressModal } from "@/components/ProgressModal";
import { Button } from "@/primitives/Button";
import { Modal } from "@/primitives/Modal";
import { Step } from "@/types";
import { Dialog, DialogHeader, DialogTitle } from "@/ui-shadcn/dialog";

export interface SubmitFinalEvaluationModalProps {
  reviews: Record<string, boolean>;
  steps: Step[];
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  onSave: () => void;
  isReviewing: boolean;
}

export const SubmitFinalEvaluationModal = ({
  reviews,
  steps,
  onOpenChange,
  isOpen,
  onSave,
  isReviewing,
}: SubmitFinalEvaluationModalProps) => {
  const applicationAccepted = Object.values(reviews).filter((review) => review).length;
  const acceptedMessage =
    applicationAccepted === 1
      ? "1 application accepted"
      : `${applicationAccepted} applications accepted`;
  const applicationRejected = Object.values(reviews).filter((review) => !review).length;
  const rejectedMessage =
    applicationRejected === 1
      ? "1 application rejected"
      : `${applicationRejected} applications rejected`;

  return (
    <>
      {!isReviewing ? (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <Modal showCloseButton={false} className="max-w-[414px] p-8">
            <div className="flex flex-col items-start gap-6 text-start">
              <DialogHeader className="flex max-w-[366px]">
                <DialogTitle className="text-[18px]/[28px] font-medium">
                  Submit evaluation results
                </DialogTitle>
              </DialogHeader>
              {applicationAccepted !== 0 && (
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-green-700" />
                  <div className="text-[16px]/[26px]">{acceptedMessage}</div>
                </div>
              )}
              {applicationRejected !== 0 && (
                <div className="flex items-center  gap-2">
                  <X className="size-5 text-red-700" />
                  <div className="text-[16px]/[26px]">{rejectedMessage}</div>
                </div>
              )}
              <div className="text-[14px]/[24px]">
                Your evaluations will be recorded on-chain. Gas fees may vary.
              </div>
              <div className="flex w-full justify-center gap-6">
                <Button
                  value="Cancel"
                  className="w-full bg-red-50 text-red-700"
                  variant="none"
                  onClick={() => onOpenChange(false)}
                />
                <Button
                  value="Save"
                  className="w-full bg-moss-700 text-white"
                  variant="none"
                  onClick={onSave}
                />
              </div>
            </div>
          </Modal>
        </Dialog>
      ) : (
        <ProgressModal isOpen={isOpen} onOpenChange={onOpenChange} steps={steps} />
      )}
    </>
  );
};
