"use client";

import React from "react";
import { useEffect } from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";

import { PlusIcon } from "@heroicons/react/outline";
import { X } from "lucide-react";

import { Button } from "@/primitives/Button";
import { Checkbox } from "@/primitives/Checkbox";
import { Switch } from "@/primitives/Switch";
import { Input } from "@/ui-shadcn/input";
import { Label } from "@/ui-shadcn/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/ui-shadcn/select";

import { inputTypes } from "./utils";

export interface ApplicationQuestionsFormControllerProps {
  name: string;
}

export const ApplicationQuestionsFormController: React.FC<
  ApplicationQuestionsFormControllerProps
> = ({ name }) => {
  const { control, watch, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: `${name}.questions` });

  const twitterRequired = watch(`${name}.requirements.twitter.required`);
  const githubRequired = watch(`${name}.requirements.github.required`);

  useEffect(() => {
    if (!twitterRequired || !githubRequired) {
      setValue(`${name}.requirements.twitter.verification`, false);
      setValue(`${name}.requirements.github.verification`, false);
    }
  }, [twitterRequired, githubRequired]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Label className="text-[16px]/[24px] font-medium">Project socials</Label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Controller
              name={`${name}.requirements.twitter.required`}
              control={control}
              render={({ field }) => (
                <div className="flex w-64 items-center justify-between ">
                  <Label className="text-sm font-normal">Project X</Label>
                  <div className="flex items-center gap-2">
                    <Label className="text-sm font-normal">
                      {field.value ? "Required" : "Optional"}
                    </Label>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                </div>
              )}
            />
          </div>
          {watch(`${name}.requirements.twitter.required`) && (
            <div className="flex items-center gap-4">
              <Controller
                name={`${name}.requirements.twitter.verification`}
                control={control}
                render={({ field }) => (
                  <div className="flex w-64 items-center justify-between">
                    <Label className="text-sm font-normal">Account Verification</Label>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-normal">
                        {field.value ? "Required" : "Optional"}
                      </Label>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </div>
                )}
              />
            </div>
          )}
          <div className="flex items-center gap-4">
            <Controller
              name={`${name}.requirements.github.required`}
              control={control}
              render={({ field }) => (
                <div className="flex w-64 items-center justify-between">
                  <Label className="text-sm font-normal">Project Github</Label>
                  <div className="flex items-center gap-2">
                    <Label className="text-sm font-normal">
                      {field.value ? "Required" : "Optional"}
                    </Label>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                </div>
              )}
            />
          </div>
          {watch(`${name}.requirements.github.required`) && (
            <div className="flex items-center gap-4">
              <Controller
                name={`${name}.requirements.github.verification`}
                control={control}
                render={({ field }) => (
                  <div className="flex w-64 items-center justify-between">
                    <Label className="text-sm font-normal">Account Verification</Label>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-normal">
                        {field.value ? "Required" : "Optional"}
                      </Label>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <Label className="text-[16px]/[24px] font-medium">Application questions</Label>
      </div>

      {fields.map((field, index) => {
        const typeField = `${name}.questions.${index}.type`;
        const titleField = `${name}.questions.${index}.title`;
        const requiredField = `${name}.questions.${index}.required`;
        const hiddenField = `${name}.questions.${index}.hidden`;
        const encryptedField = `${name}.questions.${index}.encrypted`;
        const choicesField = `${name}.questions.${index}.choices`;
        const selectedType = watch(typeField);

        return (
          <div key={field.id} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Controller
                name={typeField}
                control={control}
                render={({ field }) => (
                  <div className="flex w-1/4 flex-col gap-2">
                    <Label>Question Type</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>{field.value || "Select question type"}</SelectTrigger>
                      <SelectContent>
                        {inputTypes.map((inputType) => (
                          <SelectItem key={inputType.value} value={inputType.value}>
                            {inputType.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />

              <Controller
                name={titleField}
                control={control}
                render={({ field }) => (
                  <div className="flex w-3/4 flex-col gap-2">
                    <Label>Question Title</Label>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-6">
                        <div className="flex w-full flex-col gap-2">
                          <div className="flex gap-6">
                            <Input {...field} placeholder="Enter your question title" />
                            <div className="flex items-center">
                              <Button
                                type="button"
                                className="bg-transparent p-0"
                                icon={<X className="size-5 text-red-700" />}
                                aria-label="Remove question"
                                onClick={() => remove(index)}
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4">
                            <Controller
                              name={requiredField}
                              control={control}
                              render={({ field }) => (
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                  <Label>Required</Label>
                                </div>
                              )}
                            />

                            <Controller
                              name={hiddenField}
                              control={control}
                              render={({ field }) => (
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                  <Label>Hidden</Label>
                                </div>
                              )}
                            />

                            <Controller
                              name={encryptedField}
                              control={control}
                              render={({ field }) => (
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                  <Label>Encrypted</Label>
                                </div>
                              )}
                            />
                          </div>
                          {selectedType === "multiple-choice" ||
                          selectedType === "checkbox" ||
                          selectedType === "dropdown" ? (
                            <Controller
                              name={choicesField}
                              control={control}
                              render={({ field }) => (
                                <div className="flex flex-col gap-2 pr-10">
                                  {field.value?.map((choice: string, choiceIndex: number) => (
                                    <div
                                      key={choiceIndex}
                                      className="flex items-center justify-between gap-2"
                                    >
                                      <span className="w-20 font-ui-sans text-sm font-normal">{`Option ${
                                        choiceIndex + 1
                                      }`}</span>
                                      <Input
                                        value={choice}
                                        onChange={(e) => {
                                          const updatedChoices = [...field.value];
                                          updatedChoices[choiceIndex] = e.target.value;
                                          field.onChange(updatedChoices);
                                        }}
                                        placeholder="Enter answer"
                                        className="w-full"
                                      />
                                      <Button
                                        type="button"
                                        className="bg-transparent p-0"
                                        onClick={() => {
                                          const updatedChoices = [...field.value];
                                          updatedChoices.splice(choiceIndex, 1);
                                          field.onChange(updatedChoices);
                                        }}
                                        icon={<X className="size-5 text-red-700" />}
                                        aria-label="Remove option"
                                      />
                                    </div>
                                  ))}
                                  <div className="flex justify-start">
                                    <Button
                                      type="button"
                                      onClick={() => field.onChange([...(field.value || []), ""])}
                                      className="bg-white font-ui-mono text-sm font-medium text-black"
                                      icon={<PlusIcon className="size-4 text-black" />}
                                      aria-label="Add option"
                                      value="Add option"
                                    />
                                  </div>
                                </div>
                              )}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        );
      })}
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={() =>
            append({
              id: fields.length + 1,
              title: "",
              type: "short-answer",
              required: false,
              hidden: false,
              encrypted: false,
              choices: [],
            })
          }
          className="bg-green-100 font-ui-mono text-sm font-medium text-black"
          icon={<PlusIcon className="size-4 text-black" />}
          aria-label="Add question"
          value="Add question"
        />
      </div>
    </div>
  );
};
