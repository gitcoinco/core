import { z } from "zod";

import { FormField } from "@/types";

import { buildArraySchema } from "./validations/validateArray";
import { buildFileSchema } from "./validations/validateFile";
import { getRoundDatesSchema } from "./validations/validateRoundDates";
import { buildStringSchema } from "./validations/validateString";

/**
 * Builds a Zod schema object from an array of FormFields.
 * Each field can have different validation rules, which we
 * delegate to separate utility functions for clarity.
 */
export function buildSchemaFromFields(fields: FormField[]): z.ZodObject<any> {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const { field } of fields) {
    const { validation, name, label } = field;
    let fieldSchema: z.ZodTypeAny;

    // 1) File validation
    if (validation?.fileValidation) {
      fieldSchema = buildFileSchema(validation.fileValidation);
      shape[name] = fieldSchema;
      continue;
    }

    // 2) isObject
    if (validation?.isObject) {
      // Example: for "ApplicationQuestions" or any arbitrary object.
      // You might want to expand this if you have a known shape.
      shape[name] = z.object({});
      continue;
    }

    // 3) arrayValidation
    if (validation?.arrayValidation) {
      fieldSchema = buildArraySchema(validation.arrayValidation);
      shape[name] = fieldSchema;
      continue;
    }

    // 4) isRoundDates
    if (validation?.isRoundDates) {
      shape[name] = getRoundDatesSchema();
      continue;
    }

    // 5) isStringValidation
    if (validation?.stringValidation) {
      fieldSchema = buildStringSchema(label, validation?.required, validation?.stringValidation);
      shape[name] = fieldSchema;
      continue;
    }

    // 6) Otherwise, default to string-based validation
    shape[name] = z.string();
  }

  // Return a Zod object with the constructed shape
  return z.object(shape);
}
