"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useFormContext, useWatch, FieldErrors } from "react-hook-form";

import { cn } from "@gitcoin/utils";
import { UploadIcon, PencilIcon } from "@heroicons/react/solid";

import { Button } from "@/primitives/Button";
import { IconType } from "@/primitives/Icon";
import { Icon } from "@/primitives/Icon";
import { Input } from "@/primitives/Input";
import { TextArea } from "@/primitives/TextArea";

import { CSVImportModal, ManualInputModal } from "./components";

export interface WeightedAllowlistFormControllerProps {
  /** The name of the form field */
  name: string;
}

export const WeightedAllowlistFormController: React.FC<WeightedAllowlistFormControllerProps> = ({
  name,
}) => {
  const { control, setValue, formState, register } = useFormContext();
  const [isCSVImportModalOpen, setIsCSVImportModalOpen] = useState(false);
  const [isManualInputOpen, setIsManualInputOpen] = useState(false);

  useEffect(() => {
    // Register the form values
    register(`${name}.addresses`);
    register(`${name}.isWeighted`);
    register(`${name}.weights`);
  }, [name, register]);

  // Get current values safely
  const { addresses, isWeighted, weights } = useWatch({ control })[name] ?? {
    addresses: [],
    isWeighted: false,
    weights: [],
  };

  const formErrors = formState.errors;

  const handleSave = (addresses: string[], isWeighted: boolean, weights: number[]) => {
    setValue(`${name}.weights`, weights, { shouldValidate: true });
    setValue(`${name}.addresses`, addresses, { shouldValidate: true });
    setValue(`${name}.isWeighted`, isWeighted, { shouldValidate: true });
  };

  const handleWeightChange = (index: number, weight: number) => {
    const newWeights = [...weights];
    newWeights[index] = isNaN(weight) ? 0 : weight;
    setValue(`${name}.weights`, newWeights, { shouldValidate: true });
  };

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setValue(`${name}.addresses`, newAddresses, { shouldValidate: true });
    const newWeights = [...weights];
    newWeights.splice(index, 1);
    setValue(`${name}.weights`, newWeights, { shouldValidate: true });
  };

  const { addressesError, isWeightedError, weightsError } = useMemo(() => {
    const errors = formErrors[name] as FieldErrors<{
      addresses: string[];
      isWeighted: boolean;
      weights: number[];
    }>;

    return {
      addressesError: errors?.addresses?.message ?? null,
      isWeightedError: errors?.isWeighted?.message ?? null,
      weightsError: errors?.weights?.message ?? null,
    } as {
      addressesError: string | null;
      isWeightedError: string | null;
      weightsError: string | null;
    };
  }, [formErrors]);

  return (
    <div className="flex flex-col gap-4">
      <div className={cn("flex justify-center gap-3", addresses?.length > 0 && "justify-start")}>
        <Button
          value="Import CSV"
          className="bg-white text-black"
          icon={<UploadIcon className="size-4 text-grey-900" />}
          onClick={() => setIsCSVImportModalOpen(true)}
        />
        <Button
          value="Manually enter voters"
          className="bg-white text-black"
          icon={<PencilIcon className="size-4 text-grey-900" />}
          onClick={() => setIsManualInputOpen(true)}
        />
      </div>

      {!isWeighted && addresses?.length > 0 ? (
        <div className="flex flex-col gap-4">
          <TextArea
            value={Array.isArray(addresses) ? addresses?.join(",") : ""}
            onChange={(e) => {
              const newAddresses = e.target.value
                .split(",")
                .map((addr) => addr.trim())
                .filter(Boolean);
              setValue(`${name}.addresses`, newAddresses, { shouldValidate: true });
            }}
            placeholder="Enter all the addresses as a comma-separated list here..."
            className="min-h-52 w-full"
          />
          <p className="text-sm text-grey-500">
            Enter all the addresses as a comma-separated list below. Duplicates and invalid
            addresses will automatically be removed.
          </p>
        </div>
      ) : (
        isWeighted &&
        addresses?.length > 0 && (
          <div className="flex flex-col gap-4">
            <span className="font-ui-sans text-xl font-medium">Assign weight</span>
            <span className="font-ui-sans text-sm font-normal">
              You can assign a weight to each voter’s address (1-100, with 100 being the most
              weight). If no weight is assigned, all votes will be set to 100 by default.
            </span>
            {addresses.map((address: string, index: number) => (
              <div key={address} className="flex flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="font-ui-sans text-sm font-normal">Address</span>
                    <div className="inline-flex w-[370px] items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 outline outline-1 outline-offset-[-1px] outline-border-secondary">
                      <div className=" font-ui-sans text-sm font-normal leading-tight">
                        {addresses[index] ?? ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-ui-sans text-sm font-normal">Weight</span>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={weights[index] ?? 100}
                      className="h-[36px] w-[70px] rounded-lg bg-white px-3 py-2 text-sm font-normal outline outline-1  outline-offset-[-1px] outline-border-secondary"
                      onChange={(e) => handleWeightChange(index, parseInt(e.target.value))}
                    />
                  </div>
                  <Icon
                    type={IconType.X}
                    className="cursor-pointer text-red-700"
                    onClick={() => handleRemoveAddress(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {addressesError && <p className="text-sm text-red-500">{addressesError}</p>}
      {isWeightedError && <p className="text-sm text-red-500">{isWeightedError}</p>}
      {weightsError && <p className="text-sm text-red-500">{weightsError}</p>}
      {isCSVImportModalOpen && (
        <CSVImportModal
          isOpen={isCSVImportModalOpen}
          setIsOpen={setIsCSVImportModalOpen}
          onSave={handleSave}
          initialValues={{ addresses, isWeighted, weights }}
        />
      )}

      {isManualInputOpen && (
        <ManualInputModal
          isOpen={isManualInputOpen}
          setIsOpen={setIsManualInputOpen}
          onSave={handleSave}
          initialValues={{ addresses, isWeighted, weights }}
        />
      )}
    </div>
  );
};
