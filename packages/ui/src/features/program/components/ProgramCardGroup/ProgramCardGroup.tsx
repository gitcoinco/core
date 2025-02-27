import { tv } from "tailwind-variants";

import { ProgramCard, ProgramCardProps } from "../ProgramCard";

export type JustifyVariants =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export interface ProgramCardGroupProps {
  programs: ProgramCardProps[];
  justify?: JustifyVariants;
}

const justifyVariants = tv({
  base: "flex flex-wrap gap-6",
  variants: {
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    justify: "normal",
  },
});

export const ProgramCardGroup = ({ programs, justify }: ProgramCardGroupProps) => {
  return (
    <div className={justifyVariants({ justify })}>
      {programs.map((stat, index) => (
        <ProgramCard key={index} {...stat} />
      ))}
    </div>
  );
};
