"use client";

import { useState } from "react";

import { ProgramCardProps } from "@/features/program";
import { ProgramPickerModal } from "@/features/retrofunding";
import { mockPrograms } from "@/features/retrofunding/components/ProgramPickerModal/mocks";

const programs: ProgramCardProps[] = mockPrograms.map((program) => ({
  ...program,
  onClick: (program?: { programId: string; chainId: number }) => console.log(program),
}));

export const ProgramPickerModalHelper = (
  props: Omit<
    React.ComponentProps<typeof ProgramPickerModal>,
    "programs" | "isOpen" | "onOpenChange"
  >,
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ProgramPickerModal {...props} programs={programs} isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};
