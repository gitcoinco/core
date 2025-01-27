"use client";

import { useEffect } from "react";
import { FormProvider } from "react-hook-form";

import {
  getBallotSchema,
  MetricsBallotProps,
  DB_NAME,
  STORE_NAME,
} from "@/features/retrofunding/types/metricsBallot";
import { useFormWithPersist } from "@/hooks/usePersistForm";

import { MetricsBallotController } from ".";

export const MetricsBallot: React.FC<{
  args: MetricsBallotProps;
}> = ({ args }) => {
  const persistKey = args.name;

  const form = useFormWithPersist({
    schema: getBallotSchema(args.name),
    defaultValues: {},
    persistKey,
    dbName: DB_NAME,
    storeName: STORE_NAME,
  });

  const onSubmit = async () => {
    const valid = await form.trigger();
    if (valid) {
      args.onSubmit(form.getValues());
    }
  };

  const handleFormChange = () => {
    args.onFormChange(form.getValues());
  };

  useEffect(() => {
    handleFormChange();
  }, [form.formState]);

  return (
    <FormProvider {...form}>
      <MetricsBallotController {...args} isReady={form.isReady} onSubmit={onSubmit} />
    </FormProvider>
  );
};
