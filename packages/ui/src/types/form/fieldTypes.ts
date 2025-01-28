import { FieldArrayProps, MetricsProps } from "@/components/Form";
import { FileUploadProps } from "@/primitives/FileUpload";
import { SelectProps } from "@/primitives/Select";
import { InputProps } from "@/ui-shadcn/input";

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
  itemType?: "string" | "address";
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

export interface ValidationConfig extends BaseValidation {
  fileValidation?: FileValidationConfig;
  arrayValidation?: ArrayValidationConfig;
  stringValidation?: StringValidationConfig;
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

export interface RoundDates {
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

export interface Allowlist {
  field: BaseField;
  component: "Allowlist";
}

export interface DisabledProgramInput {
  field: BaseField;
  component: "DisabledProgramInput";
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
  | DisabledProgramInput;
