"use client";

import { useState, useEffect } from "react";

import { openDB } from "idb";

const DB_NAME = "formProgressDB";
const STORE_NAME = "formProgress";

export const useFormProgress = (formKey: string) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const initDB = async () => {
      const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        },
      });

      // Load saved progress
      const savedStep = await db.get(STORE_NAME, formKey);
      if (savedStep !== undefined) {
        setCurrentStep(savedStep);
      }
    };

    initDB();
  }, [formKey]);

  const updateStep = async (step: number) => {
    setCurrentStep(step);
    const db = await openDB(DB_NAME, 1);
    await db.put(STORE_NAME, step, formKey);
  };

  const resetProgress = async () => {
    const db = await openDB(DB_NAME, 1);
    await db.delete(STORE_NAME, formKey);
    setCurrentStep(0);
  };

  return {
    currentStep,
    updateStep,
    resetProgress,
  };
};
