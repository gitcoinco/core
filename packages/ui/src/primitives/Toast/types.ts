import {
  viewportVariants,
  type toastDescriptionVariants,
  type toastVariants,
  type toastCloseVariants,
} from "@/primitives/Toast/Toast";

export type ToastStatus = "success" | "error" | "info" | "warning";

export interface ToastProps {
  status: ToastStatus;
  description: string;
  timeout?: number;
  toastPosition?: keyof typeof viewportVariants.variants.position;
  descriptionSize?: keyof typeof toastDescriptionVariants.variants.size;
  toastSize?: keyof typeof toastVariants.variants.size;
  toastCloseVariant?: keyof typeof toastCloseVariants.variants.variant;
}
