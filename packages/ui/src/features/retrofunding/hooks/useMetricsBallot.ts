"use client";

import { useState, useEffect } from "react";

import { openDB } from "idb";

import { TabType } from "@/features/retrofunding/types/metricsBallot";

const DB_VERSION = 1;

/**
 * A custom hook to persist and manage metrics ballot active tab state:
 *   - activeTab
 */
export const useMetricsBallot = (formKey: string, dbName: string, storeName: string) => {
  const [activeTab, setActiveTab] = useState<TabType>("ballot");

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      try {
        // Open (or create) the IndexedDB
        const db = await openDB(dbName, DB_VERSION, {
          upgrade(database) {
            if (!database.objectStoreNames.contains(storeName)) {
              database.createObjectStore(storeName);
            }
          },
        });

        // If we unmounted before DB ready, stop
        if (isCancelled) return;

        // Load the saved tab (if any)
        const savedTab = await db.get(storeName, `tab-${formKey}`);
        if (typeof savedTab === "string") {
          setActiveTab(savedTab as TabType);
        }
      } catch (err) {
        console.error("Failed to initialize ballot DB:", err);
      }
    })();

    // Cleanup to avoid setting state after unmount
    return () => {
      isCancelled = true;
    };
  }, [formKey]);

  const updateActiveTab = async (tab: TabType) => {
    setActiveTab(tab);
    try {
      const db = await openDB(dbName, DB_VERSION);
      await db.put(storeName, tab, `tab-${formKey}`);
    } catch (error) {
      console.error("Failed to update tab in IDB:", error);
    }
  };

  return {
    activeTab,
    updateActiveTab,
  };
};
