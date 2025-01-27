"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { CloudUpload, Image } from "lucide-react";

import { cn } from "@/lib";

export interface FileUploadProps {
  value?: Blob | null;
  onChange?: (file: File | null) => void;
  className?: string;
  mimeTypes?: string[];
}

export const FileUpload: React.FC<FileUploadProps> = ({
  value,
  onChange,
  className,
  mimeTypes = [],
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const base64 = useMemo(() => (value ? URL.createObjectURL(value) : null), [value]);
  const [preview, setPreview] = useState<string | null>(base64);

  useEffect(() => {
    setPreview(base64);
  }, [base64]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
    onChange?.(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "flex h-[134px] flex-col items-center justify-center rounded-lg border border-dashed border-grey-300 bg-white",
        preview ? "" : "px-4 py-6",
        className,
      )}
    >
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        id="file-upload"
        accept={mimeTypes.join(",")}
      />
      {preview ? (
        <div className="group relative w-full max-w-[906px] items-center justify-center">
          <div
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "132px",
            }}
            aria-label="Preview"
          />
          <div
            onClick={triggerFileInput}
            className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-white p-3">
              <Image className="text-black" />
            </div>
          </div>
        </div>
      ) : (
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          <div className="flex flex-col items-center gap-2">
            <span role="img" aria-label="upload">
              <CloudUpload />
            </span>
            <div className="flex">
              <a className="cursor-pointer text-moss-700 hover:underline">{"Upload a file"}</a>
              &nbsp;
              <span>{"or drag and drop"}</span>
            </div>
          </div>
          {/* TODO different file types message */}
          <div>PNG, JPG (Recommended: 1500x1500px)</div>
        </label>
      )}
    </div>
  );
};
