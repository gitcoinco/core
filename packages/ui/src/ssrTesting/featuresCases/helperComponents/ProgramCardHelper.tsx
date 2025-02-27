"use client";

import { ProgramCard } from "@/features/program";
import { mockProgramCard } from "@/features/program/components/ProgramCard/mocks";
import { createQueryState } from "@/lib";

export const ProgramCardHelper = ({
  caseType,
}: {
  caseType: "default" | "loading" | "success" | "error";
}) => {
  switch (caseType) {
    case "default":
      return <ProgramCard {...mockProgramCard} />;
    case "loading":
      return <ProgramCard queryResult={createQueryState("pending")} />;
    case "success":
      return <ProgramCard queryResult={createQueryState("success", mockProgramCard)} />;
    case "error":
      return <ProgramCard queryResult={createQueryState("error", mockProgramCard)} />;
  }
};
