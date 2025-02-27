import { IDBPDatabase } from "idb";

export type DBValue = unknown;
export type DBKey = string;

export interface DBEntry {
  key: DBKey;
  value: DBValue;
}

export interface IndexedDBOperations {
  getValue: <T = DBValue>(key: DBKey) => Promise<T | undefined>;
  getValues: <T = DBValue>(keys: DBKey[]) => Promise<(T | undefined)[]>;
  setValue: (key: DBKey, value: DBValue) => Promise<void>;
  setValues: (entries: DBEntry[]) => Promise<void>;
  deleteValue: (key: DBKey) => Promise<void>;
  deleteValues: (keys: DBKey[]) => Promise<void>;
  getAllKeys: () => Promise<DBKey[]>;
  getAllValues: <T = DBValue>() => Promise<T[]>;
  clearStore: () => Promise<void>;
}

export interface IndexedDBState {
  error: Error | null;
  isLoading: boolean;
  isReady: boolean;
}

export interface UseIndexedDBProps {
  dbName: string;
  storeName: string;
  version?: number;
  retries?: number;
}

export interface UseIndexedDBReturn extends IndexedDBOperations, IndexedDBState {}

export type DBOperation<T> = (db: IDBPDatabase) => Promise<T>;
