"use client";

import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";

import { PlusIcon, TrashIcon, XIcon } from "@heroicons/react/outline";

import { Button } from "@/primitives/Button";
import { Input } from "@/ui-shadcn/input";
import { Label } from "@/ui-shadcn/label";

export interface FieldArrayProps {
  itemName: string;
  placeholder?: string;
  addButtonLabel?: string;
  removeIconType?: "x" | "trash";
  buttonJustify?: "start" | "center" | "end";
}

export interface FieldArrayFormControllerProps extends FieldArrayProps {
  name: string;
}

export const FieldArrayFormController: React.FC<FieldArrayFormControllerProps> = ({
  name,
  itemName,
  placeholder,
  addButtonLabel,
  removeIconType = "x",
  buttonJustify = "end",
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  const renderRemoveIcon = (index: number) => {
    return removeIconType === "x" ? (
      <Button
        className="bg-transparent"
        onClick={() => remove(index)}
        aria-label="Remove field X"
        icon={<XIcon className="size-5 text-red-500" />}
      />
    ) : (
      <Button
        className="bg-transparent"
        onClick={() => remove(index)}
        aria-label="Remove field Trash"
        icon={<TrashIcon className="size-5 text-red-500" />}
      />
    );
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 flex items-center gap-2">
          <Controller
            name={`${name}.${index}`}
            control={control}
            render={({ field }) => (
              <div className="flex w-full flex-col gap-2">
                <Label htmlFor={`${field.name}-${index}`}>{`${itemName} ${index + 1}`}</Label>
                <div className="flex items-center gap-2">
                  <Input {...field} placeholder={placeholder} />
                  {renderRemoveIcon(index)}
                </div>
              </div>
            )}
          />
        </div>
      ))}
      <div className={`flex justify-${buttonJustify}`}>
        <Button
          type="button"
          onClick={() => append("")}
          className="bg-green-100 text-green-700"
          value={addButtonLabel}
          icon={<PlusIcon className="size-4 text-green-700" />}
          aria-label="Add field"
        />
      </div>
    </div>
  );
};
