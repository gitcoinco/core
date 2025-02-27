"use client";

import { useState } from "react";

import { ProgressModal } from "@/components/ProgressModal/ProgressModal";
import { Button } from "@/primitives";

export const ProgressModalHelper = (props: React.ComponentProps<typeof ProgressModal>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary" value="Open Modal" />
      <ProgressModal {...props} isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};
