"use client";

import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { FormProvider, useFormContext } from "react-hook-form";

import { useFormWithPersist } from "@/hooks";
import { FormConfig, FormField } from "@/types";

import { buildSchemaFromFields } from "./utils/buildSchemaFromFields";
import { componentRegistry } from "./utils/componentRegistry";

export interface FormProps extends FormConfig {
  dbName: string;
  storeName: string;
}

export const Form = forwardRef(function Form(
  { persistKey, fields, defaultValues, dbName, storeName }: FormProps,
  ref: ForwardedRef<{ isFormValid: () => Promise<boolean> }>,
) {
  const schema = buildSchemaFromFields(fields);

  const form = useFormWithPersist({ schema, defaultValues, persistKey, dbName, storeName });

  useImperativeHandle(ref, () => ({
    isFormValid: async () => {
      try {
        const isValid = await form.trigger(); // Trigger validation on all fields
        if (!isValid) return false;

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
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
function FormControl({ field }: { field: FormField }) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  type FieldOfType = Extract<FormField, { component: typeof field.component }>;
  const { field: fieldProps, ...componentProps } = field as FieldOfType;

  const registryEntry = componentRegistry[field.component];
  const { Component, isControlled } = registryEntry;

  const props = isControlled
    ? { ...componentProps, name: fieldProps.name, control }
    : { ...componentProps, ...register(fieldProps.name) };

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={fieldProps.name} className="block text-[14px]/[20px] font-medium">
          {fieldProps.label}
        </label>
        {fieldProps.validation?.required && (
          <div className="text-[14px]/[16px] text-moss-700">*Required</div>
        )}
      </div>
      <Component {...props} />
      {errors[fieldProps.name]?.message && (
        <p className="text-sm text-red-300">{String(errors[fieldProps.name]?.message)}</p>
      )}
    </div>
  );
}
