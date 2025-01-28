import { useState } from "react";

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { CreateButton } from "@/components/CreateButton";
import { ProgramCardProps } from "@/features/program/components/ProgramCard";

import { ProgramPickerModal, ProgramPickerModalProps } from "./ProgramPickerModal";

const onProgramClick = action("Program clicked!");
const meta: Meta<typeof ProgramPickerModal> = {
  title: "Features/Retrofunding/Components/ProgramPickerModal",
  component: ProgramPickerModal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProgramPickerModal>;

// Mock program data
const mockPrograms: ProgramCardProps[] = [
  {
    id: "1",
    chainId: 1,
    title: "Program 1",
    operatorsCount: 1,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
  {
    id: "2",
    chainId: 1,
    title: "Program 2",
    operatorsCount: 2,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
  {
    id: "3",
    chainId: 1,
    title: "Program 3",
    operatorsCount: 3,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
  {
    id: "4",
    chainId: 1,
    title: "Program 4",
    operatorsCount: 4,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
  {
    id: "5",
    chainId: 1,
    title: "Program 5",
    operatorsCount: 5,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
  {
    id: "6",
    chainId: 1,
    title: "Program 6",
    operatorsCount: 6,
    roundsCount: 1,
    createdAtBlock: 1000000,
  },
].map((program) => ({
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
    programs: mockPrograms,
  },
};

export const WithFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    programs: mockPrograms,
    footer: <CreateButton variant="round">Create new round</CreateButton>,
  },
};
