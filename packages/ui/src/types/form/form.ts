import { FormField } from "./fieldTypes";

export interface PersistFormConfig {
  persistKey: string;
  fields: FormField[];
  defaultValues?: any;
}

export interface FormConfig {
  fields: FormField[];
  defaultValues?: any;
}

export interface FormWithPersistStep {
  name: string;
  formProps: PersistFormConfig;
  stepProps: {
    formTitle: string;
    formDescription: string;
  };
}

export interface FormStep {
  formProps: FormConfig;
  stepProps: {
    formTitle: string;
    formDescription: string;
  };
}
