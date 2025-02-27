import { useState } from "react";

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { CreateButton } from "@/components/CreateButton";
import { ProgramCardProps } from "@/features/program/components/ProgramCard";

import { ProgramPickerModal, ProgramPickerModalProps } from "./ProgramPickerModal";
import { mockPrograms } from "./mocks";

const onProgramClick = action("Program clicked!");
const meta: Meta<typeof ProgramPickerModal> = {
  title: "Features/Retrofunding/ProgramPickerModal",
  component: ProgramPickerModal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProgramPickerModal>;

// Mock program data
const programs: ProgramCardProps[] = mockPrograms.map((program) => ({
  ...program,
  onClick: (program?: { programId: string; chainId: number }) => onProgramClick(program),
}));

const ModalWrapper: React.FC<ProgramPickerModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ProgramPickerModal {...props} isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    programs,
  },
};

export const WithFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    programs,
    footer: <CreateButton variant="round">Create new round</CreateButton>,
  },
};
