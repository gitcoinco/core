"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { MarkdownEditor } from "@/primitives/MarkdownEditor";

export interface MarkdownEditorFormControllerProps {
  name: string;
}

export const MarkdownEditorFormController: React.FC<MarkdownEditorFormControllerProps> = ({
  name,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <MarkdownEditor value={field.value} onChange={field.onChange} />}
    />
  );
};
