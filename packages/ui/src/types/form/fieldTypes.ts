import {
  AllowlistProps,
  FieldArrayProps,
  MetricsProps,
  RoundDatesFormProps,
  ObjectValidationConfig,
} from "@/components/_Form";
import { FileUploadProps } from "@/primitives/FileUpload";
import { InputProps } from "@/primitives/Input";
import { SelectProps } from "@/primitives/Select";

import { Markdown } from "../markdown";

export interface BaseValidation {
  required?: boolean | string;
  isObject?: boolean;
  isRoundDates?: boolean;
  // ...
}

export interface FileValidationConfig {
  maxSize?: number;
  maxSizeMessage?: string;
  allowedTypes?: string[];
  allowedTypesMessage?: string;
}

export interface ArrayValidationConfig {
  itemType?: "string" | "address" | "number";
  minItems?: number;
  minItemsMessage?: string;
  maxItems?: number;
  maxItemsMessage?: string;
}

export interface StringValidationConfig {
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  pattern?: string | RegExp;
  patternMessage?: string;
}

export interface NumberValidationConfig {
  min?: number;
  minMessage?: string;
  max?: number;
  maxMessage?: string;
}
export interface ValidationConfig extends BaseValidation {
  fileValidation?: FileValidationConfig;
  arrayValidation?: ArrayValidationConfig;
  stringValidation?: StringValidationConfig;
  numberValidation?: NumberValidationConfig;
  objectValidation?: ObjectValidationConfig;
  // any other custom validations
}

export interface BaseField {
  name: string;
  label: string;
  validation?: ValidationConfig;
  className?: string;
}

export interface InputField extends InputProps {
  field: BaseField;
  component: "Input";
  type?: string;
  placeholder?: string;
}

export interface TextareaField {
  field: BaseField;
  component: "Textarea";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  heading?: string;
  placeholder?: string;
}

export interface MarkdownEditorField extends Markdown {
  field: BaseField;
  component: "MarkdownEditor";
}

export interface FileUploadField extends FileUploadProps {
  field: BaseField;
  component: "FileUpload";
}

export interface SelectField extends SelectProps {
  field: BaseField;
  component: "Select";
}

export interface FieldArray extends FieldArrayProps {
  field: BaseField;
  component: "FieldArray";
}

export interface RoundDates extends RoundDatesFormProps {
  field: BaseField;
  component: "RoundDates";
}

export interface Metrics extends MetricsProps {
  field: BaseField;
  component: "Metrics";
}

export interface ApplicationQuestions {
  field: BaseField;
  component: "ApplicationQuestions";
}

export interface Allowlist extends AllowlistProps {
  field: BaseField;
  component: "Allowlist";
}

export interface DisabledProgramInput {
  field: BaseField;
  component: "DisabledProgramInput";
}

export interface WeightedAllowlist {
  field: BaseField;
  component: "WeightedAllowlist";
}

export type FormField =
  | InputField
  | TextareaField
  | MarkdownEditorField
  | FileUploadField
  | SelectField
  | FieldArray
  | RoundDates
  | Metrics
  | ApplicationQuestions
  | Allowlist
  | DisabledProgramInput
  | WeightedAllowlist;
