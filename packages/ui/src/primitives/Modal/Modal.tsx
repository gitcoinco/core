"use client";

import React from "react";

import { tv } from "tailwind-variants";

import { DialogContent, DialogOverlay } from "@/ui-shadcn/dialog";

export type OverlayVariants = "blur" | "dark";

export interface ModalProps {
  children: React.ReactNode;
  overlayVariant?: OverlayVariants;
}

const overlayVariants = tv({
  base: "fixed inset-0 z-50",
  variants: {
    overlayVariant: {
      blur: "bg-black/50 backdrop-blur-sm",
      dark: "bg-black/80",
    },
  },
  defaultVariants: {
    overlayVariant: "blur",
  },
});

export const Modal = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent> & ModalProps & { showCloseButton?: boolean }
>(({ children, overlayVariant = "blur", showCloseButton, ...props }, ref) => (
  <>
    <DialogOverlay
      className={overlayVariants({
        overlayVariant,
      })}
    />
    <DialogContent showCloseButton={showCloseButton} ref={ref} className="sm:max-w-md" {...props}>
      {children}
    </DialogContent>
  </>
));

Modal.displayName = "Modal";
