"use client";

import { useState } from "react";

import { DialogOverlay } from "@radix-ui/react-dialog";

import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/primitives/Dialog";

export const DialogTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog open={isOpen}>
        <DialogOverlay>
          <DialogHeader className="flex  flex-col gap-1">
            <DialogTitle className="text-base font-semibold text-black">Dialog</DialogTitle>
            <DialogDescription className="text-[14px]/[24px] text-grey-900">
              DialogDescription
            </DialogDescription>
          </DialogHeader>
        </DialogOverlay>
      </Dialog>
      <button onClick={() => setIsOpen(!isOpen)}>Open Dialog</button>
    </>
  );
};
