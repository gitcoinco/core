"use client";

import React from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { tv, VariantProps } from "tailwind-variants";

import { DialogContent, DialogOverlay, DialogTitle } from "@/primitives/Dialog";

export type OverlayVariants = "blur" | "dark";

const overlayVariants = tv({
  base: "fixed inset-0 z-50",
  variants: {
    overlayVariant: {
      transparent: "bg-transparent",
      blur: "bg-black/50 backdrop-blur-sm",
      dark: "bg-black/80",
    },
  },
  defaultVariants: {
    overlayVariant: "blur",
  },
});

export interface ModalProps
  extends VariantProps<typeof overlayVariants>,
    React.ComponentProps<typeof DialogContent> {
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export const Modal = ({
  children,
  overlayVariant = "blur",
  showCloseButton,
  ref,
  ...props
}: ModalProps) => (
  <>
    <DialogOverlay
      className={overlayVariants({
        overlayVariant,
      })}
    />
    <DialogContent
      aria-describedby="modal"
      showCloseButton={showCloseButton}
      ref={ref}
      className="sm:max-w-md"
      {...props}
    >
      <VisuallyHidden>
        <DialogTitle />
      </VisuallyHidden>
      {children}
    </DialogContent>
  </>
);

Modal.displayName = "Modal";
