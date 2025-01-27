"use client";

import { useState, useCallback, useEffect, useRef } from "react";

import { openDB, IDBPDatabase } from "idb";

import {
  UseIndexedDBProps,
  UseIndexedDBReturn,
  DBOperation,
  DBKey,
  DBValue,
  DBEntry,
} from "@/types/indexedDB";

export const useIndexedDB = ({
  dbName,
  storeName,
  version = 1,
  retries = 1,
}: UseIndexedDBProps): UseIndexedDBReturn => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const dbRef = useRef<IDBPDatabase | null>(null);

  useEffect(() => {
    const initDB = async () => {
      if (typeof window === "undefined" || !window.indexedDB) {
        const error = new Error("IndexedDB is not available in this environment");
        setError(error);
        setIsReady(false);
        console.error(error);
        return;
      }

      try {
        dbRef.current = await openDB(dbName, version, {
          upgrade(db) {
            if (!db.objectStoreNames.contains(storeName)) {
              db.createObjectStore(storeName);
            }
          },
          blocked() {
            console.warn("Database blocked: another version is open");
          },
          blocking() {
            console.warn("Database blocking: closing older version");
          },
        });
        setIsReady(true);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Failed to initialize IndexedDB");
        setError(error);
        console.error("Failed to initialize IndexedDB:", error);
      }
    };

    initDB();

    return () => {
      if (dbRef.current) {
        dbRef.current.close();
        dbRef.current = null;
      }
    };
  }, [dbName, storeName]);

  const handleOperation = useCallback(
    async <T>(operation: DBOperation<T>): Promise<T | null> => {
      if (!dbRef.current) return null;

      setIsLoading(true);
      setError(null);

      for (let attempt = 0; attempt < retries; attempt++) {
        try {
          const result = await operation(dbRef.current);
          setIsLoading(false);
          return result;
        } catch (err) {
          if (attempt === retries - 1) {
            const error = err instanceof Error ? err : new Error("IndexedDB operation failed");
            setError(error);
            console.error("IndexedDB operation failed:", error);
            setIsLoading(false);
            return null;
          }
          // Exponential backoff
          await new Promise((resolve) => setTimeout(resolve, 100 * Math.pow(2, attempt)));
        }
      }

      setIsLoading(false);
      return null;
    },
    [retries],
  );

  const getValue = useCallback(
    async <T = DBValue>(key: DBKey): Promise<T | undefined> => {
      const result = await handleOperation(async (db) => {
        return db.get(storeName, key);
      });
      return result as T | undefined;
    },
    [handleOperation, storeName],
  );

  const getValues = useCallback(
    async <T = DBValue>(keys: DBKey[]): Promise<(T | undefined)[]> => {
      const result = await handleOperation(async (db) => {
        return Promise.all(keys.map((key) => db.get(storeName, key)));
      });
      return (result || []) as (T | undefined)[];
    },
    [handleOperation, storeName],
  );

  const setValue = useCallback(
    async (key: DBKey, value: DBValue): Promise<void> => {
      await handleOperation(async (db) => {
        await db.put(storeName, value, key);
      });
    },
    [handleOperation, storeName],
  );

  const setValues = useCallback(
    async (entries: DBEntry[]): Promise<void> => {
      await handleOperation(async (db) => {
        await Promise.all(entries.map(({ key, value }) => db.put(storeName, value, key)));
      });
    },
    [handleOperation, storeName],
  );

  const deleteValue = useCallback(
    async (key: DBKey): Promise<void> => {
      await handleOperation(async (db) => {
        await db.delete(storeName, key);
      });
    },
    [handleOperation, storeName],
  );

  const deleteValues = useCallback(
    async (keys: DBKey[]): Promise<void> => {
      await handleOperation(async (db) => {
        await Promise.all(keys.map((key) => db.delete(storeName, key)));
      });
    },
    [handleOperation, storeName],
  );

  const getAllKeys = useCallback(async (): Promise<DBKey[]> => {
    const result = await handleOperation(async (db) => {
      return db.getAllKeys(storeName);
    });
    return (result || []) as DBKey[];
  }, [handleOperation, storeName]);

  const getAllValues = useCallback(async <T = DBValue>(): Promise<T[]> => {
    const result = await handleOperation(async (db) => {
      return db.getAll(storeName);
    });
    return (result || []) as T[];
  }, [handleOperation, storeName]);

  const clearStore = useCallback(async (): Promise<void> => {
    await handleOperation(async (db) => {
      await db.clear(storeName);
    });
  }, [handleOperation, storeName]);

  return {
    getValue,
    getValues,
    setValue,
    setValues,
    deleteValue,
    deleteValues,
    getAllKeys,
    getAllValues,
    clearStore,
    error,
    isLoading,
    isReady,
  };
};
