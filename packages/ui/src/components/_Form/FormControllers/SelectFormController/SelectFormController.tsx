"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Select, SelectProps } from "@/primitives/Select";

export interface SelectFormControllerProps extends SelectProps {
  name: string;
}

export const SelectFormController: React.FC<SelectFormControllerProps> = ({
  name,
  options,
  defaultValue,
  placeholder,
  className,
  size,
  variant,
  disabled,
  align,
  side,
  position,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          options={options}
          defaultValue={defaultValue}
          value={field.value}
          onValueChange={field.onChange}
          placeholder={placeholder}
          className={className}
          size={size}
          variant={variant}
          disabled={disabled}
          align={align}
          side={side}
          position={position}
        />
      )}
    />
  );
};
