import { setupDB } from "./setupDB";

/**
 * Delete values from IndexedDB
 * @param keys - The keys of the values to delete
 * @param dbName - The name of the database
 * @param storeName - The name of the store
 */
export const deleteDBValues = async (keys: string[], dbName: string, storeName: string) => {
  try {
    const db = await setupDB(dbName, storeName);
    for (const key of keys) {
      await db.delete(storeName, key);
    }
  } catch (error) {
    console.error("Error deleting values from IndexedDB:", error);
  }
};
