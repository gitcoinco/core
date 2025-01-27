"use client";

import { useRef } from "react";

import { CheckIcon } from "@heroicons/react/solid";

import { Form } from "@/components/Form";
import { useIndexedDB } from "@/hooks";
import { Button } from "@/primitives/Button";
import { ProgressBar } from "@/primitives/ProgressBar";
import { FormStep } from "@/types";

import { useFormProgress } from "./hooks/useFormProgress";

export interface GenericProgressFormProps {
  name: string;
  steps: FormStep[];
  onSubmit: (values: any) => Promise<void>;
  dbName: string;
  storeName: string;
}

export const GenericProgressForm = ({
  name,
  steps,
  onSubmit,
  dbName,
  storeName,
}: GenericProgressFormProps) => {
  const { currentStep, updateStep } = useFormProgress(name);
  const { getValues } = useIndexedDB({ dbName, storeName });
  const formRef = useRef<{ isFormValid: () => Promise<boolean> }>(null);

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

  const handleSubmit = async () => {
    const persistKeys = steps.map((step) => step.formProps.persistKey).filter(Boolean) as string[];

    const persistedValues = await getValues<Record<string, unknown>>(persistKeys);

    let FinalValues = {};
    for (const stepValues of persistedValues) {
      FinalValues = { ...FinalValues, ...stepValues };
    }
    // Do something with the values here
    await onSubmit(FinalValues);
  };

  const currentStepProps = steps[currentStep];
  const progressValue = (currentStep / steps.length) * 100;

  return (
    <div className="inset-0 flex justify-center gap-24 px-20 pt-16">
      <div className="relative flex flex-col gap-6">
        <div>{name}</div>
        <ProgressBar value={progressValue} variant="green-md" withLabel />
        {steps.map((step, index) => (
          <div key={index} className="flex h-6 items-center justify-start gap-2">
            <div className="flex items-center gap-2">
              <div className="flex size-5 shrink-0 items-center justify-center">
                {currentStep > index ? (
                  <CheckIcon className="size-5 text-moss-700" />
                ) : (
                  <span className="inline-flex items-center justify-center text-black">•</span>
                )}
              </div>
              <div className="font-ui-sans text-[16px]/[28px] font-normal text-grey-900">
                {step.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[956px]">
        <div className="flex flex-col gap-6 rounded-2xl bg-grey-50 p-6">
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
          <Form
            ref={formRef}
            key={currentStep}
            {...currentStepProps.formProps}
            dbName={dbName}
            storeName={storeName}
          />
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
                  if (currentStep === steps.length - 1) {
                    await handleSubmit();
                  } else {
                    const isValid = await formRef.current?.isFormValid();
                    if (isValid) {
                      handleNextStep();
                    }
                  }
                }}
                value={currentStep === steps.length - 1 ? "Publish" : "Next"}
                type="button"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
