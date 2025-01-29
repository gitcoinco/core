"use client";

import React, { useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { UploadIcon } from "@heroicons/react/solid";
import Papa from "papaparse";
import { getAddress, isAddress } from "viem";

import { Button } from "@/primitives/Button";
import { TextArea } from "@/primitives/TextArea";

export interface AllowlistFormControllerProps {
  /** The name of the form field */
  name: string;
}

export const AllowlistFormController: React.FC<AllowlistFormControllerProps> = ({ name }) => {
  const { control, setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Handles CSV file upload and extracts valid addresses
   * @param event - The input change event
   */
  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      complete: ({ data }) => {
        const uniqueAddresses = Array.from(
          new Set(
            data
              .flat()
              .filter((item): item is string => typeof item === "string" && isAddress(item.trim())),
          ),
        ).join(",");

        const formattedAddresses = uniqueAddresses.split(",").map((addr) => getAddress(addr));

        setValue(name, formattedAddresses);
      },
      skipEmptyLines: true,
    });

    // Reset the input value to allow re-uploading the same file if needed
    event.target.value = "";
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <Button
          value="Import CSV"
          className="bg-grey-100 text-grey-900"
          icon={<UploadIcon className="size-4 text-grey-900" />}
          onClick={() => fileInputRef.current?.click()}
        />
        <input
          type="file"
          id="csv-upload"
          className="hidden"
          accept=".csv"
          onChange={handleCSVUpload}
          ref={fileInputRef}
        />
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextArea
            value={field.value}
            onChange={(e) => field.onChange(e.target.value.split(","))}
            placeholder="Enter all the addresses as a comma-separated list here..."
            className="min-h-52 w-full"
          />
        )}
      />

      <p className="text-sm text-grey-500">
        Enter all the addresses as a comma-separated list below. Duplicates and invalid addresses
        will automatically be removed.
      </p>
    </div>
  );
};

/**
 * Utility function to validate a list of addresses
 * @param addresses - A comma-separated string of addresses
 * @returns An array of valid, trimmed addresses
 */
export const validateAddresses = (addresses: string): string[] => {
  return addresses
    .split(",")
    .map((addr) => addr.trim())
    .filter((addr) => isAddress(addr));
};
