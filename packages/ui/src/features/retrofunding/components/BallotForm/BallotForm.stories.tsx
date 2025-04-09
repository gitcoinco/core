import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { BallotForm } from "./BallotForm";

const meta: Meta<typeof BallotForm> = {
  title: "Features/RetroFunding/BallotForm",
  component: BallotForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const mockAvailableMetrics = [
  {
    title: "Ecosystem Adoption",
    description:
      "This metric evaluates the adoption of a project's solution across the Web3 landscape. By assessing integrations with protocols, wallets, and decentralized...",
    metricId: "ecosystem-adoption",
  },
  {
    title: "Technical Innovation",
    description:
      "Measures the project's technological advancement and unique contributions to the blockchain space. Evaluates code quality, architectural decisions, and innovative solutions...",
    metricId: "technical-innovation",
  },
  {
    title: "Community Engagement",
    description:
      "Assesses the project's community growth, participation, and governance involvement. Examines factors like active contributors, governance proposals, and social presence...",
    metricId: "community-engagement",
  },
  {
    title: "Security & Reliability",
    description:
      "Evaluates the project's security practices, audit history, and operational reliability. Considers factors like code audits, incident response, and system uptime...",
    metricId: "security-reliability",
  },
  {
    title: "Token Economics",
    description:
      "Analyzes the project's tokenomics model, including distribution mechanisms, utility, and economic sustainability. Examines token velocity, supply dynamics, and value accrual...",
    metricId: "token-economics",
  },
];

type Story = StoryObj<typeof BallotForm>;

const commonArgs = {
  name: "metrics",
  availableMetrics: mockAvailableMetrics,
  maxAllocation: 100,
  onSubmit: action("onSubmit"),
  onChange: action("onChange"),
};

export const Default: Story = {
  args: commonArgs,
};

export const AlreadyVoted: Story = {
  args: {
    ...commonArgs,
    name: "alreadyVoted-metrics",
    submittedBallot: {
      ballot: [
        { metricId: "ecosystem-adoption", name: "Ecosystem Adoption", amount: 10, locked: false },
        {
          metricId: "technical-innovation",
          name: "Technical Innovation",
          amount: 20,
          locked: false,
        },
        {
          metricId: "community-engagement",
          name: "Community Engagement",
          amount: 30,
          locked: false,
        },
        {
          metricId: "security-reliability",
          name: "Security & Reliability",
          amount: 40,
          locked: false,
        },
      ],
      submittedAt: "2024-12-12T17:06:00Z",
    },
  },
};

export const ShareBallot: Story = {
  args: {
    ...AlreadyVoted.args,
    name: "shareBallot-metrics",
    onShare: action("onShare"),
  },
};
