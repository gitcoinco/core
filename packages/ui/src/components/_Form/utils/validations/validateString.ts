// File: utils/validations/validateString.ts
import { z } from "zod";

import { StringValidationConfig } from "@/types";

/**
 * Builds a Zod string schema.
 * Handles optional minLength, maxLength, regex pattern, etc.
 */
export function buildStringSchema(
  label: string,
  isRequired?: boolean | string,
  stringValidation?: StringValidationConfig,
) {
  let schema = z.string();

  if (isRequired) {
    const requiredMessage = typeof isRequired === "string" ? isRequired : `${label} is required`;
    schema = schema.min(1, requiredMessage);
  }

  if (stringValidation?.minLength !== undefined) {
    const { minLength, minLengthMessage } = stringValidation;
    const msg = minLengthMessage || `${label} must have at least ${minLength} characters`;
    schema = schema.min(minLength, msg);
  }

  if (stringValidation?.maxLength !== undefined) {
    const { maxLength, maxLengthMessage } = stringValidation;
    const msg = maxLengthMessage || `${label} must have at most ${maxLength} characters`;
    schema = schema.max(maxLength, msg);
  }

  if (stringValidation?.pattern) {
    const { pattern, patternMessage } = stringValidation;
    let regex: RegExp;
    let msg: string;

    // pattern can be a string or a RegExp
    if (typeof pattern === "string") {
      regex = new RegExp(pattern);
      msg = patternMessage || `${label} is invalid`;
    } else {
      regex = pattern;
      msg = patternMessage || `${label} is invalid`;
    }
    schema = schema.regex(regex, msg);
  }

  return schema;
}
