"use client";

import { useRef } from "react";
import { UseFormReturn } from "react-hook-form";

import { cn } from "@gitcoin/utils";
import { CheckIcon } from "@heroicons/react/solid";

import { FormWithPersist_ } from "@/components/_Form";
import { useIndexedDB } from "@/hooks";
import { Button } from "@/primitives/Button";
import { ProgressBar } from "@/primitives/ProgressBar";
import { FormWithPersistStep } from "@/types";

import { useFormProgress } from "./hooks/useFormProgress";

export interface ProgressFormProps {
  name: string;
  steps: FormWithPersistStep[];
  onSubmit: (values: any) => Promise<void>;
  dbName: string;
  storeName: string;
  stepsPersistKey: string;
  lastStepFormSummary?: React.FC<{ getValues: () => Promise<Record<string, any>> }>;
}

export const ProgressForm = ({
  name,
  steps,
  onSubmit,
  dbName,
  storeName,
  stepsPersistKey,
  lastStepFormSummary,
}: ProgressFormProps) => {
  const { currentStep, updateStep, progressedTill } = useFormProgress(stepsPersistKey);
  const { getValues, isReady } = useIndexedDB({ dbName, storeName });
  const formRef = useRef<{ form: UseFormReturn }>(null);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      updateStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      updateStep(currentStep - 1);
    }
  };

  const getFinalValues = async () => {
    const persistKeys = steps.map((step) => step.formProps.persistKey).filter(Boolean) as string[];

    const persistedValues = await getValues<Record<string, unknown>>(persistKeys);

    let FinalValues = {};
    for (const stepValues of persistedValues) {
      FinalValues = { ...FinalValues, ...stepValues };
    }
    return FinalValues;
  };

  const validateForm = async () => {
    return await formRef.current?.form.trigger();
  };

  const handleSubmit = async () => {
    const FinalValues = await getFinalValues();
    await onSubmit(FinalValues);
  };

  const currentStepProps = steps[currentStep];
  const progressValue = (currentStep / steps.length) * 100;

  if (!isReady) return null;

  const isLastStep = currentStep === steps.length - 1;
  const LastStepFormSummary = lastStepFormSummary;

  return (
    <div className="inset-0 flex justify-center gap-24 px-20 pt-16">
      <div className="relative flex w-[228px] flex-col gap-6">
        <div>{name}</div>
        <ProgressBar value={progressValue} variant="green-md" withLabel />
        {steps.map((step, index) => {
          const isSelected = index === currentStep;
          return (
            <div
              key={index}
              className={cn(
                index <= progressedTill ? "cursor-pointer" : "cursor-default",
                isSelected && "cursor-default",
              )}
              onClick={async () => {
                if (index <= progressedTill || isLastStep) {
                  if (index <= currentStep) {
                    updateStep(index);
                  } else {
                    const isValid = await validateForm();
                    if (isValid) {
                      updateStep(index);
                    }
                  }
                }
              }}
            >
              <div className="flex items-start gap-2">
                <div className="flex size-5 shrink-0 justify-center">
                  {index < currentStep ? (
                    <CheckIcon className="mt-1 size-5 text-moss-700" />
                  ) : (
                    <span className="mt-0.5  text-black">•</span>
                  )}
                </div>
                <span
                  className={cn(
                    "font-ui-sans text-p font-normal leading-7 text-black",
                    isSelected && "font-medium",
                  )}
                >
                  {step.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full max-w-[956px]">
        <div className="flex flex-col gap-6 rounded-2xl bg-grey-50 p-6">
          {currentStepProps.stepProps && (
            <div className="flex flex-col gap-3">
              {/* Form Title */}
              <div className="font-ui-sans text-[24px]/[32px] font-medium">
                {currentStepProps.stepProps.formTitle}
              </div>
              {/* Form Description */}
              <div className="font-ui-sans text-[18px]/[28px] font-normal text-grey-900">
                {currentStepProps.stepProps.formDescription}
              </div>
            </div>
          )}
          {!isLastStep && (
            <FormWithPersist_
              ref={formRef}
              key={currentStep}
              {...currentStepProps.formProps}
              dbName={dbName}
              storeName={storeName}
            />
          )}
          {isLastStep && LastStepFormSummary && <LastStepFormSummary getValues={getFinalValues} />}
          <div className="flex items-center justify-between">
            <Button
              variant="outlined-secondary"
              onClick={handlePreviousStep}
              value={"Back"}
              type="button"
              className="border-transparent"
            />

            {steps.length && (
              <Button
                variant="primary"
                onClick={async () => {
                  if (isLastStep) {
                    await handleSubmit();
                  } else {
                    const isValid = await validateForm();
                    if (isValid) {
                      handleNextStep();
                    }
                  }
                }}
                value={isLastStep ? "Publish" : "Next"}
                type="button"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
