import { setupDB } from "@/lib/indexDB";

/**
 * Retrieve values from IndexedDB
 * @param key - The key of the value to retrieve
 * @param dbName - The name of the database
 * @param storeName - The name of the store
 * @returns The value retrieved from IndexedDB
 */
export const retrieveDBValuesFromKey = async (
  persistKey: string,
  dbName: string,
  storeName: string,
) => {
  try {
    const db = await setupDB(dbName, storeName);
    const values = await db.get(storeName, persistKey);
    return values;
  } catch (error) {
    console.error("Error retrieving values from IndexedDB:", error);
    return null;
  }
};

/**
 * Retrieve values from IndexedDB
 * @param keys - The keys of the values to retrieve
 * @param dbName - The name of the database
 * @param storeName - The name of the store
 * @returns The values retrieved from IndexedDB
 */
export const retrieveDBValuesFromKeys = async (
  persistKeys: string[],
  dbName: string,
  storeName: string,
) => {
  const values = [];
  for (const key of persistKeys) {
    const value = await retrieveDBValuesFromKey(key, dbName, storeName);
    values.push(value);
  }
  return values;
};
