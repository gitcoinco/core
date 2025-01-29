"use client";

import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

import { useFormWithPersist } from "@/hooks";
import { PersistFormConfig } from "@/types";

import { FormControl } from "./components";
import { buildSchemaFromFields } from "./utils/buildSchemaFromFields";

export interface FormWithPersistProps extends PersistFormConfig {
  dbName: string;
  storeName: string;
}

export const FormWithPersist_ = forwardRef(function FormWithPersist(
  { persistKey, fields, defaultValues, dbName, storeName }: FormWithPersistProps,
  ref: ForwardedRef<{ form: UseFormReturn }>,
) {
  const schema = buildSchemaFromFields(fields);

  const form = useFormWithPersist({ schema, defaultValues, persistKey, dbName, storeName });

  useImperativeHandle(ref, () => ({
    form,
  }));

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(() => void 0)} className="flex flex-col gap-4">
        {fields.map((field) => (
          <FormControl key={field.field.name} field={field} />
        ))}
      </form>
    </FormProvider>
  );
});
