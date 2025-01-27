"use client";

import * as React from "react";

import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

import { ToasterToast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import { Icon, IconType } from "@/primitives/Icon";

// Define variant styles for the Toast viewport
export const viewportVariants = tv({
  base: "fixed z-100 flex flex-col space-y-2 p-4 sm:max-w-105 md:max-w-md",
  variants: {
    position: {
      "top-left": "left-0 top-0",
      "top-center": "left-1/2 top-0 -translate-x-1/2 transform",
      "top-right": "right-0 top-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 transform",
      "bottom-right": "bottom-[31px] right-[180px]",
    },
  },
  defaultVariants: {
    position: "top-right",
  },
});

const ToastProvider = ToastPrimitives.Provider;

// ToastViewport component with positioning variants
interface ToastViewportProps
  extends VariantProps<typeof viewportVariants>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, position, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(viewportVariants({ position }), className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export const toastVariants = tv({
  base: "pointer-events-auto  flex items-center overflow-hidden rounded-3xl p-6 shadow-lg transition-all  data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full dark:border-black data-[state=open]:sm:slide-in-from-bottom-full",
  variants: {
    variant: {
      default:
        "border-grey-100 bg-white text-black shadow-toast dark:border-black dark:bg-black dark:text-grey-50",
      destructive: "border-red-500 bg-red-500 text-grey-50 dark:border-red-900 dark:bg-red-900",
    },
    size: {
      small: "h-18 w-96 gap-6 p-2 text-sm",
      medium: "min-h-18 w-102 gap-2 p-6 ",
      large: "h-24 w-96 gap-6 p-6 text-lg",
    },
    align: {
      start: "flex-row",
      center: "flex items-center justify-center",
      end: "flex-row-reverse",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
    align: "center",
  },
});

// Toast component with size and alignment variants
interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {}

const ToastRoot = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, ToastProps>(
  ({ className, variant, size, align, ...props }, ref) => {
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={cn(toastVariants({ variant, size, align }), className)}
        {...props}
      />
    );
  },
);
ToastRoot.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-grey-100 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-grey-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-grey-50 group-[.destructive]:focus:ring-red-500 dark:border-black dark:ring-offset-black dark:hover:bg-black dark:focus:ring-grey-100 dark:group-[.destructive]:border-black/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-grey-50 dark:group-[.destructive]:focus:ring-red-900",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export const toastCloseVariants = tv({
  base: "flex-shrink-0 ",
  variants: {
    variant: {
      default:
        "group-[.destructive]:focus:ring-offset-red-600 absolute right-2 top-2 rounded-md p-1 text-black/50 opacity-0 transition-opacity hover:text-black focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-900 dark:text-grey-50/50 dark:hover:text-grey-50",
      alwaysVisible: "opacity-100",
      destructive: "text-red-300 hover:text-red-50 focus:text-red-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// ToastClose component with variants
interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>,
    VariantProps<typeof toastCloseVariants> {}

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, children, variant, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(toastCloseVariants({ variant }), className)}
    {...props}
  >
    {children ? children : <X className="size-5" />}
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

// Defines variant styles for the ToastDescription

interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>,
    VariantProps<typeof toastDescriptionVariants> {}

export const toastDescriptionVariants = tv({
  base: "w-[288px] font-ui-mono text-base font-normal leading-6",
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  ToastDescriptionProps
>(({ className, size, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(toastDescriptionVariants({ size }), className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// Export all components and types
type ToastActionElement = React.ReactElement<typeof ToastAction>;
type ToastPropsType = React.ComponentPropsWithoutRef<typeof ToastRoot> & ToasterToast;

const Toast = ({ toast }: { toast: ToasterToast }) => (
  <ToastRoot
    key={toast.id}
    size={toast.toastSize}
    onOpenChange={toast.onOpenChange}
    open={toast.open}
    variant="default"
  >
    <ToastTitle>{toast.icon}</ToastTitle>
    <div className="flex gap-6">
      <ToastDescription size={toast.descriptionSize || "medium"}>
        {toast.description}
      </ToastDescription>
      <ToastClose variant={toast.toastCloseVariant || "alwaysVisible"}>
        <Icon type={IconType.X} className="size-5" />
      </ToastClose>
    </div>
  </ToastRoot>
);

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  type ToastPropsType,
  type ToastActionElement,
};
