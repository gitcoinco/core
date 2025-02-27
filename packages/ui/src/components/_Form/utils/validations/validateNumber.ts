// File: utils/validations/validateString.ts
import { z } from "zod";

import { NumberValidationConfig } from "@/types";

/**
 * Builds a Zod string schema.
 * Handles optional minLength, maxLength, regex pattern, etc.
 */
export function buildNumberSchema(
  label: string,
  isRequired?: boolean | string,
  numberValidation?: NumberValidationConfig,
) {
  const baseSchema = z.preprocess((val) => {
    // Handle empty string case
    if (val === "" || isNaN(Number(val))) return "";

    return Number(val);
  }, z.number());

  const schema = baseSchema.superRefine((val, ctx) => {
    // Then check number constraints
    if (typeof val === "number") {
      if (numberValidation?.min !== undefined) {
        const { min, minMessage } = numberValidation;
        const msg = minMessage || `${label} must be at least ${min}`;
        if (val < min) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: msg,
          });
        }
      }
      if (numberValidation?.max !== undefined) {
        const { max, maxMessage } = numberValidation;
        const msg = maxMessage || `${label} must be at most ${max}`;
        if (val > max) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: msg,
          });
        }
      }
    }
  });

  return isRequired ? schema : schema.optional();
}
