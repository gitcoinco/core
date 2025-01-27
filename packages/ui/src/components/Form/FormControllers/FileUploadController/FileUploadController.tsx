"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FileUpload, FileUploadProps } from "@/primitives/FileUpload";

export interface FileUploadFormControllerProps extends Omit<FileUploadProps, "onChange" | "value"> {
  name: string;
}

export const FileUploadFormController: React.FC<FileUploadFormControllerProps> = ({
  name,
  mimeTypes,
  className,
}) => {
  const { control, watch } = useFormContext();
  const fieldValue = watch(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FileUpload
          onChange={async (file) => {
            if (file) {
              field.onChange(file);
            }
          }}
          value={fieldValue}
          mimeTypes={mimeTypes}
          className={className}
        />
      )}
    />
  );
};
