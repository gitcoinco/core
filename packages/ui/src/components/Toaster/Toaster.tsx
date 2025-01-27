"use client";

import { match } from "ts-pattern";

import { useToast, ToasterToast } from "@/hooks/useToast";
import { Icon, IconType } from "@/primitives/Icon";
import {
  Toast,
  ToastProvider,
  ToastViewport,
  type viewportVariants,
} from "@/primitives/Toast/Toast";

export const Toaster = () => {
  const { toasts } = useToast();

  // Group toasts by their toastPosition
  const toastsByPosition = toasts.reduce(
    (acc, toast) => {
      const position = (toast.toastPosition || "bottom-right") as string;
      if (!acc[position]) {
        acc[position] = [];
      }
      acc[position].push(toast);
      return acc;
    },
    {} as Record<string, ToasterToast[]>,
  );

  return (
    <ToastProvider>
      {Object.entries(toastsByPosition).map(([position, toasts]) => (
        <ToastViewport
          key={position}
          position={position as keyof typeof viewportVariants.variants.position}
        >
          {toasts.map((toast) => {
            const ToastIcon = match(toast.status)
              .with("success", () => (
                <Icon type={IconType.SOLID_CHECK} className="size-5 rounded-full fill-moss-700" />
              ))
              .with("error", () => (
                <Icon type={IconType.SOLID_X} className="size-5 rounded-full fill-red-700" />
              ))
              .with("info", () => (
                <Icon
                  type={IconType.EXCLAMATION_CIRCLE}
                  className="size-5 rounded-full fill-yellow-300"
                />
              ))
              // .with("warning", () => (
              //   <Icon type={IconType.SOLID_WARNING} className="size-5 rounded-full" />
              // ))
              .otherwise(() => <Icon type={IconType.SOLID_X} className="size-5 rounded-full" />);
            return (
              <Toast
                toast={{
                  ...toast,
                  icon: ToastIcon ?? IconType.SOLID_X,
                }}
              />
            );
          })}
        </ToastViewport>
      ))}
    </ToastProvider>
  );
};
