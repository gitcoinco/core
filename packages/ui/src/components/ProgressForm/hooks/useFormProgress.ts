"use client";

import { useState, useEffect } from "react";

import { openDB } from "idb";

const DB_NAME = "formProgressDB";
const STORE_NAME = "formProgress";

export const useFormProgress = (formKey: string) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progressedTill, setProgressedTill] = useState<number>(0);

  useEffect(() => {
    const initDB = async () => {
      const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        },
      });

      // Retrieve saved current progress from the original key.
      const savedCurrentStep = await db.get(STORE_NAME, formKey);
      if (savedCurrentStep !== undefined) {
        setCurrentStep(savedCurrentStep);
      }

      // Retrieve the max step from the new persist key.
      const savedMaxStep = await db.get(STORE_NAME, `${formKey}_max`);
      if (savedMaxStep !== undefined) {
        setProgressedTill(savedMaxStep);
      }
    };

    initDB();
  }, [formKey]);

  const updateStep = async (step: number) => {
    setCurrentStep(step);
    const db = await openDB(DB_NAME, 1);
    await db.put(STORE_NAME, step, formKey);

    // Update the max progress if the new step is greater than the existing max.
    if (step > progressedTill) {
      setProgressedTill(step);
      await db.put(STORE_NAME, step, `${formKey}_max`);
    }
  };

  const resetProgress = async () => {
    const db = await openDB(DB_NAME, 1);
    await db.delete(STORE_NAME, formKey);
    await db.delete(STORE_NAME, `${formKey}_max`);
    setCurrentStep(0);
    setProgressedTill(0);
  };

  return {
    currentStep,
    progressedTill,
    updateStep,
    resetProgress,
  };
};
