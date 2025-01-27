import { TextArea } from "@/primitives/TextArea";
import { Input } from "@/ui-shadcn/input";

import { AllowlistFormController } from "../FormControllers";
import { ApplicationQuestionsFormController } from "../FormControllers";
import { FieldArrayFormController } from "../FormControllers";
import { FileUploadFormController } from "../FormControllers";
import { MarkdownEditorFormController } from "../FormControllers";
import { MetricsFormController } from "../FormControllers";
import { RoundDatesFormController } from "../FormControllers";
import { DisabledProgramInputFormController } from "../FormControllers";
import { SelectFormController } from "../FormControllers";

// Extend or adjust as you add more components.
export const componentRegistry = {
  Input: {
    Component: Input,
    isControlled: false,
  },
  Textarea: {
    Component: TextArea,
    isControlled: false,
  },
  MarkdownEditor: {
    Component: MarkdownEditorFormController,
    isControlled: true,
  },
  FileUpload: {
    Component: FileUploadFormController,
    isControlled: true,
  },
  Select: {
    Component: SelectFormController,
    isControlled: true,
  },
  FieldArray: {
    Component: FieldArrayFormController,
    isControlled: true,
  },
  RoundDates: {
    Component: RoundDatesFormController,
    isControlled: true,
  },
  Metrics: {
    Component: MetricsFormController,
    isControlled: true,
  },
  ApplicationQuestions: {
    Component: ApplicationQuestionsFormController,
    isControlled: true,
  },
  Allowlist: {
    Component: AllowlistFormController,
    isControlled: true,
  },
  DisabledProgramInput: {
    Component: DisabledProgramInputFormController,
    isControlled: true,
  },
};

export type ComponentName = keyof typeof componentRegistry;
