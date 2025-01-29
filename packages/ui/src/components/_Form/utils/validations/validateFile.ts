// File: utils/validations/validateFile.ts
import { z } from "zod";

import { FileValidationConfig } from "@/types";

/**
 * Builds a Zod schema for file fields.
 * - Enforces optional max size.
 * - Enforces optional allowed mime-types.
 */
export function buildFileSchema(config: FileValidationConfig) {
  let schema = z.instanceof(File);
  const maxSize = config.maxSize;
  if (maxSize) {
    schema = schema.refine(
      (file) => file.size > maxSize,
      config.maxSizeMessage || `File exceeds the maximum size of ${maxSize} bytes`,
    );
  }

  if (config.allowedTypes && config.allowedTypes.length > 0) {
    schema = schema.refine(
      (file) => config.allowedTypes?.includes(file.type),
      config.allowedTypesMessage
        ? config.allowedTypesMessage
        : `Invalid file type. Allowed: ${config.allowedTypes.join(", ")}`,
    );
  }

  return schema;
}
