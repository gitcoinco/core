import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgramList } from "./ProgramList";

const onProgramClick = action("Program clicked!");

const meta: Meta<typeof ProgramList> = {
  title: "Features/Program/ProgramList",
  component: ProgramList,
};

export default meta;
type Story = StoryObj<typeof ProgramList>;

const mockPrograms = [
  {
    id: "0x123456789",
    chainId: 1,
    title: "Gitcoin Grants Stack",
    operatorsCount: 2,
    roundsCount: 10,
    createdAtBlock: 100000000,
  },
  {
    id: "0x3456",
    chainId: 10,
    title: "Allo Protocol",
    operatorsCount: 4,
    roundsCount: 2,
    createdAtBlock: 1000000,
  },
];

export const Default: Story = {
  args: {
    programs: mockPrograms.map((program) => ({
      ...program,
      onClick: (program?: { programId: string; chainId: number }) => onProgramClick(program),
    })),
    title: "Available Programs",
    noProgramsPlaceholder: "No programs found",
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    programs: [],
  },
};
