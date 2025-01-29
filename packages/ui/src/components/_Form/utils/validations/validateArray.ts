// File: utils/validations/validateArray.ts
import { isAddress } from "viem";
import { z } from "zod";

import { ArrayValidationConfig } from "@/types";

/**
 * Builds a Zod array schema, optionally:
 * - limiting min/max items
 * - validating each item as an address
 */
export function buildArraySchema(config: ArrayValidationConfig) {
  let schema = z.array(z.string());

  if (config.minItems) {
    schema = schema.min(config.minItems, config.minItemsMessage);
  }
  if (config.maxItems) {
    schema = schema.max(config.maxItems, config.maxItemsMessage);
  }

  if (config.itemType === "address") {
    return schema.superRefine((arr, ctx) => {
      arr.forEach((item, idx) => {
        if (!isAddress(item.trim())) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Invalid address at index ${idx}`,
          });
        }
      });
    });
  }

  return schema;
}
