"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useInterval } from "react-use";

import { compareObjects } from "@gitcoin/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

import { useIndexedDB } from "./useIndexedDB";

/**
 * Use the form with persist
 * @param form - The form instance
 * @param persistKey - The key of the value to retrieve
 * @param dbName - The name of the database
 * @param storeName - The name of the store
 */
export const usePersistForm = (
  form: ReturnType<typeof useForm>,
  persistKey: string,
  dbName: string,
  storeName: string,
) => {
  const config = useMemo(() => {
    return { dbName, storeName };
  }, [dbName, storeName]);

  const [initialized, setInitialized] = useState(false);

  const { getValue, setValue, isReady } = useIndexedDB(config);

  useEffect(() => {
    if (!isReady || !persistKey) return;

    const initializeForm = async () => {
      try {
        const draft = await getValue(persistKey);
        if (draft) {
          form.reset(draft);
        }
        setInitialized(true);
      } catch (err) {
        console.error("Error initializing form:", err);
      }
    };

    initializeForm();
  }, [form, persistKey, getValue, isReady]);

  useInterval(() => {
    if (!isReady || !persistKey) return;

    (async () => {
      try {
        const current_values = form.getValues();
        const form_values = await getValue(persistKey);
        const isEqual = compareObjects(current_values, form_values);
        if (!isEqual && Object.keys(current_values).length > 0) {
          await setValue(persistKey, current_values);
          return;
        }
      } catch (err) {
        console.error("Error saving to IndexedDB:", err);
      }
    })();
  }, 500);
  return initialized;
};

/**
 * Use the form with persist
 * @param schema - The schema of the form
 * @param defaultValues - The default values of the form
 * @param persistKey - The key of the value to retrieve
 * @param dbName - The name of the database
 * @param storeName - The name of the store
 */
export const useFormWithPersist = ({
  schema,
  defaultValues,
  persistKey,
  dbName,
  storeName,
}: {
  schema: ZodSchema;
  defaultValues: any;
  persistKey: string;
  dbName: string;
  storeName: string;
}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });
  const isReady = usePersistForm(form, persistKey, dbName, storeName);
  return { ...form, isReady };
};
