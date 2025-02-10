"use client";

import { useRef } from "react";
import { UseFormReturn } from "react-hook-form";

import { tv, VariantProps } from "tailwind-variants";

import { FormWithPersist_ } from "@/components/_Form";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/Button";
import { FormWithPersistStep } from "@/types";

const formVariants = tv({
  slots: {
    container: "flex flex-col gap-6 rounded-2xl bg-grey-50 p-6",
    title: "font-ui-sans text-[24px]/[32px] font-medium",
    description: "font-ui-sans text-[18px]/[28px] font-normal text-grey-900",
    button: "flex items-center justify-between",
  },
  variants: {
    size: {
      default: {
        container: "w-full",
      },
      sm: {
        container: "max-w-[600px]",
      },
      md: {
        container: "max-w-[956px]",
      },
    },
    align: {
      left: {
        button: "justify-start",
      },
      center: {
        button: "justify-center",
      },
      right: {
        button: "justify-end",
      },
    },
  },
});

export interface FormWithPersistProps {
  step: FormWithPersistStep;
  onSubmit: (values: any) => Promise<void>;
  submitButtonLabel?: string;
  dbName: string;
  storeName: string;
  align?: VariantProps<typeof formVariants>["align"];
  size?: VariantProps<typeof formVariants>["size"];
  className?: string;
}
export const FormWithPersist = ({
  step,
  onSubmit,
  dbName,
  storeName,
  submitButtonLabel = "Save",
  align = "right",
  size = "default",
  className,
}: FormWithPersistProps) => {
  const formRef = useRef<{ form: UseFormReturn }>(null);

  const { container, title, description, button } = formVariants({
    align,
    size,
  });

  const handleSubmit = async () => {
    await onSubmit(formRef.current?.form?.getValues());
  };

  const stepProps = step.stepProps;
  return (
    <div className={cn(container(), className)}>
      {stepProps && (
        <div className="flex flex-col gap-3">
          {/* Form Title */}
          <div className={title()}>{stepProps.formTitle}</div>
          {/* Form Description */}
          <div className={description()}>{stepProps.formDescription}</div>
        </div>
      )}
      <FormWithPersist_ ref={formRef} {...step.formProps} dbName={dbName} storeName={storeName} />
      <div className={button()}>
        <Button
          variant="primary"
          onClick={async () => {
            const isValid = await formRef.current?.form.trigger();
            if (isValid) {
              await handleSubmit();
            }
          }}
          value={submitButtonLabel}
          type="button"
        />
      </div>
    </div>
  );
};
