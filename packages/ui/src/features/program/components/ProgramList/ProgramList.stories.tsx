import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgramList } from "./ProgramList";
import { mockPrograms } from "./mocks";

const onProgramClick = action("Program clicked!");

const meta: Meta<typeof ProgramList> = {
  title: "Features/Program/ProgramList",
  component: ProgramList,
};

export default meta;
type Story = StoryObj<typeof ProgramList>;

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
