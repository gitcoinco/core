import { useFormContext } from "react-hook-form";

import { FormField } from "@/types";

import { componentRegistry } from "../utils";

export const FormControl = ({ field }: { field: FormField }) => {
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
};
