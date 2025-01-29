"use client";

import React, { useEffect } from "react";
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
  const { control, watch, setValue } = useFormContext();
  const fieldValue = watch(name);

  const fetchAndCreateFile = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "file");
      setValue(name, file);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    if (fieldValue instanceof File) {
      return;
    } else if (typeof fieldValue === "string" && fieldValue.startsWith("http")) {
      fetchAndCreateFile(fieldValue);
    }
  }, [fieldValue]);

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
