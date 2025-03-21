import { z } from "zod";

import { ArrayValidationConfig, StringValidationConfig, NumberValidationConfig } from "@/types";

import { buildArraySchema } from "./validateArray";
import { buildNumberSchema } from "./validateNumber";
import { buildStringSchema } from "./validateString";

/**
 * Defines the validation configuration for a single object property
 */
export interface ObjectPropertyConfig {
  type: "string" | "array" | "number" | "boolean" | "file";
  label: string;
  isRequired?: boolean | string;

  // Reuse existing validation configs
  stringValidation?: StringValidationConfig;
  arrayValidation?: ArrayValidationConfig;
  numberValidation?: NumberValidationConfig;
  fileValidation?: {
    maxSizeMB?: number;
    maxSizeMessage?: string;
    allowedTypes?: string[];
    allowedTypesMessage?: string;
  };
}

/**
 * Defines the validation configuration for an object
 */
export interface ObjectValidationConfig {
  properties: Record<string, ObjectPropertyConfig>;
  strict?: boolean;
  strictMessage?: string;
}

/**
 * Builds a Zod schema for validating objects
 * @param config Object validation configuration
 * @returns Zod object schema
 */
export function buildObjectSchema(config: ObjectValidationConfig) {
  const shape: Record<string, z.ZodTypeAny> = {};

  Object.entries(config.properties).forEach(([key, propConfig]) => {
    let propSchema: z.ZodTypeAny;

    switch (propConfig.type) {
      case "string":
        propSchema = buildStringSchema(
          propConfig.label,
          propConfig.isRequired,
          propConfig.stringValidation,
        );
        break;

      case "array":
        if (propConfig.arrayValidation) {
          propSchema = buildArraySchema(propConfig.arrayValidation);
        } else {
          // Default array schema if no validation provided
          propSchema = z.array(z.string());
        }
        break;

      case "number":
        propSchema = buildNumberSchema(
          propConfig.label,
          propConfig.isRequired,
          propConfig.numberValidation,
        );
        break;

      case "boolean":
        propSchema = z.boolean();

        // Handle required boolean
        if (propConfig.isRequired) {
          const message =
            typeof propConfig.isRequired === "string"
              ? propConfig.isRequired
              : `${propConfig.label} is required`;

          propSchema = propSchema.refine((val) => val === true, { message });
        }
        break;

      case "file":
        // Implement file validation or import from validateFile if needed
        propSchema = z.any();
        // Could be extended to use your existing file validation
        break;

      default:
        propSchema = z.any();
    }

    // Make non-required fields optional
    if (!propConfig.isRequired) {
      propSchema = propSchema.optional();
    }

    shape[key] = propSchema;
  });

  const schema = z.object(shape);

  return schema
}

/**
 * Example usage:
 *
 * const schema = buildObjectSchema({
 *   properties: {
 *     addresses: {
 *       type: "array",
 *       label: "Addresses",
 *       isRequired: true,
 *       arrayValidation: {
 *         minItems: 1,
 *         minItemsMessage: "At least one address is required",
 *         itemType: "address"
 *       }
 *     },
 *     isWeighted: {
 *       type: "boolean",
 *       label: "Weighted Voting"
 *     },
 *     weights: {
 *       type: "array",
 *       label: "Weights",
 *       arrayValidation: {
 *         itemType: "string"
 *       }
 *     }
 *   }
 * });
 */
