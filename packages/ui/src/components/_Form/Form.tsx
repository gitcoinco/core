"use client";

import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormConfig } from "@/types";

import { FormControl } from "./components";
import { buildSchemaFromFields } from "./utils/buildSchemaFromFields";

export interface FormProps extends FormConfig {}

export const Form_ = forwardRef(function Form(
  { fields, defaultValues }: FormProps,
  ref: ForwardedRef<{ form: UseFormReturn }>,
) {
  const schema = buildSchemaFromFields(fields);
  const form = useForm({ resolver: zodResolver(schema), defaultValues });
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
