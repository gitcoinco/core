"use client";

import { Controller, useFormContext } from "react-hook-form";

import { getChainInfo } from "@/lib";
import { Icon } from "@/primitives/Icon";

export interface DisabledProgramInputFormControllerProps {
  name: string;
}

export const DisabledProgramInputFormController = ({
  name,
}: DisabledProgramInputFormControllerProps) => {
  const { control, watch } = useFormContext();

  const value = watch(name);

  if (!value) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <Controller name={name} control={control} render={() => renderDisabledProgramInput(value)} />
    </div>
  );
};

export const renderDisabledProgramInput = (value: {
  chainId: number;
  programId: string;
  programName: string;
}) => {
  const { chainId, programName } = value;
  const chainInfo = getChainInfo(chainId);
  return (
    <div className="flex cursor-not-allowed items-center gap-2 rounded-md bg-grey-100 px-3 py-2 font-normal text-grey-500">
      <Icon type={chainInfo.icon} />
      <div>{programName}</div>
    </div>
  );
};
