"use client";

import { useEffect } from "react";
import { FormProvider } from "react-hook-form";

import { getBallotSchema, DB_NAME, STORE_NAME } from "@gitcoin/types";

import { useFormWithPersist } from "@/hooks/usePersistForm";

import { MetricsBallotController, MetricsBallotControllerProps } from "./components/BallotForm";

export interface MetricsBallotProps
  extends Omit<MetricsBallotControllerProps, "onSubmit" | "isReady"> {
  onSubmit: (values: any) => void;
  onFormChange: (values: any) => void;
}

export const MetricsBallot: React.FC<MetricsBallotProps> = (props) => {
  const { name, onSubmit, onFormChange } = props;
  const persistKey = name;

  const form = useFormWithPersist({
    schema: getBallotSchema(name),
    defaultValues: {},
    persistKey,
    dbName: DB_NAME,
    storeName: STORE_NAME,
  });

  const handleSubmit = async () => {
    const valid = await form.trigger();
    if (valid) {
      onSubmit(form.getValues());
    }
  };

  const handleFormChange = () => {
    onFormChange(form.getValues());
  };

  useEffect(() => {
    handleFormChange();
  }, [form.formState]);

  return (
    <FormProvider {...form}>
      <MetricsBallotController {...props} isReady={form.isReady} onSubmit={handleSubmit} />
    </FormProvider>
  );
};
