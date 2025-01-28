/*
 * This is a deep comparison function that compares two objects and returns true if they are equal.
 * It is used to compare the values of the form and the values stored in the IndexedDB.
 * It is used in the usePersistForm hook.
 *
 * @param a - The first object to compare
 * @param b - The second object to compare
 * @param visited - A WeakMap to keep track of visited objects to avoid infinite loops
 * @returns true if the objects are equal, false otherwise
 */

export const compare = (a: any, b: any, visited = new WeakMap()): boolean => {
  // Handle primitive types
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return a === b; // Strict equality for primitives and null
  }

  // Check if objects have already been visited
  if (visited.has(a) && visited.has(b)) {
    return visited.get(a) === visited.get(b);
  }

  // Mark objects as visited
  visited.set(a, b);
  visited.set(b, a);

  // Handle File objects
  if (a instanceof File && b instanceof File) {
    return a.name === b.name && a.size === b.size && a.type === b.type;
  }

  // Handle Blob objects
  if (a instanceof Blob && b instanceof Blob) {
    return a.size === b.size && a.type === b.type;
  }

  // Handle ArrayBuffer objects
  if (a instanceof ArrayBuffer && b instanceof ArrayBuffer) {
    if (a.byteLength !== b.byteLength) return false;
    const viewA = new Uint8Array(a);
    const viewB = new Uint8Array(b);
    for (let i = 0; i < a.byteLength; i++) {
      if (viewA[i] !== viewB[i]) return false;
    }
    return true;
  }

  // Handle Date objects
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle RegExp objects
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }

  // Handle Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!compare(a[i], b[i], visited)) return false;
    }
    return true;
  }

  // Handle Maps
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a) {
      if (!b.has(key) || !compare(value, b.get(key), visited)) return false;
    }
    return true;
  }

  // Handle Sets
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const value of a) {
      if (!b.has(value)) return false;
    }
    return true;
  }

  // Handle plain objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    if (!keysB.includes(key) || !compare(a[key], b[key], visited)) {
      return false;
    }
  }
  return true;
};
