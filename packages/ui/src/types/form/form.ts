import { FormField } from "./fieldTypes";

export interface FormConfig {
  persistKey: string;
  fields: FormField[];
  defaultValues?: any;
}

export interface FormStep {
  name: string;
  formProps: FormConfig;
  stepProps: {
    formTitle: string;
    formDescription: string;
  };
}
