import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgramCardGroup } from "./ProgramCardGroup";

const onProgramClick = action("Program clicked!");

const programs = [
  {
    id: "0x123456789",
    chainId: 1,
    title: "Gitcoin Grants Stack",
    operatorsCount: 2,
    roundsCount: 10,
    createdAtBlock: 1000,
    onClick: (program?: { chainId: number; programId: string }) => onProgramClick(program),
  },
  {
    id: "0x3456",
    chainId: 1,
    title: "Allo Protocol",
    operatorsCount: 4,
    roundsCount: 2,
    createdAtBlock: 1000000,
    onClick: (program?: { chainId: number; programId: string }) => onProgramClick(program),
  },
];

const meta = {
  title: "Features/Program/ProgramCardGroup",
  component: ProgramCardGroup,
  args: {
    programs,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ProgramCardGroup>;

export const Default: Story = {};

export const withJustifyNormal: Story = {
  args: {
    programs,
  },
};

export const withJustifyStart: Story = {
  args: {
    programs: programs,
    justify: "start",
  },
};

export const withJustifyEnd: Story = {
  args: {
    programs: programs,
    justify: "end",
  },
};

export const withJustifyCenter: Story = {
  args: {
    programs: programs,
    justify: "center",
  },
};

export const withJustifyBetween: Story = {
  args: {
    programs: programs,
    justify: "between",
  },
};

export const withJustifyAround: Story = {
  args: {
    programs: programs,
    justify: "around",
  },
};

export const withJustifyEvenly: Story = {
  args: {
    programs: programs,
    justify: "evenly",
  },
};

export const withFourCard: Story = {
  args: {
    programs: [
      ...programs,
      {
        id: "0x3456",
        chainId: 1,
        title: "Pump Fun",
        operatorsCount: 4,
        roundsCount: 2,
        createdAtBlock: 1000000,
        onClick: () => onProgramClick(),
      },
    ],
  },
};

export const withFiveCard: Story = {
  args: {
    programs: [
      ...programs,
      {
        id: "0x3456",
        chainId: 1,
        title: "Pump Fun",
        operatorsCount: 4,
        roundsCount: 2,
        createdAtBlock: 1000000,
        onClick: () => onProgramClick(),
      },
      {
        id: "0x3456",
        chainId: 1,
        title: "Eigen Protocol",
        operatorsCount: 4,
        roundsCount: 2,
        createdAtBlock: 1000000,
        onClick: () => onProgramClick(),
      },
    ],
  },
};
