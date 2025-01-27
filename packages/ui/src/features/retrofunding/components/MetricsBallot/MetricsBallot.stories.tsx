import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { MetricsBallot } from ".";

export default {
  title: "Features/RetroFunding/Components/MetricsBallot",
  component: MetricsBallot,
} as Meta;

const onSubmit = action("onSubmit");
const onFormChange = action("onFormChange");

const mockAvailableMetrics = [
  {
    title: "Ecosystem Adoption",
    description:
      "This metric evaluates the adoption of a project's solution across the Web3 landscape. By assessing integrations with protocols, wallets, and decentralized...",
    metricId: "1",
  },
  {
    title: "Technical Innovation",
    description:
      "Measures the project's technological advancement and unique contributions to the blockchain space. Evaluates code quality, architectural decisions, and innovative solutions...",
    metricId: "2",
  },
  {
    title: "Community Engagement",
    description:
      "Assesses the project's community growth, participation, and governance involvement. Examines factors like active contributors, governance proposals, and social presence...",
    metricId: "3",
  },
  {
    title: "Security & Reliability",
    description:
      "Evaluates the project's security practices, audit history, and operational reliability. Considers factors like code audits, incident response, and system uptime...",
    metricId: "4",
  },
  {
    title: "Token Economics",
    description:
      "Analyzes the project's tokenomics model, including distribution mechanisms, utility, and economic sustainability. Examines token velocity, supply dynamics, and value accrual...",
    metricId: "5",
  },
];

type Story = StoryObj<typeof MetricsBallot>;

export const Default: Story = {
  args: {
    args: {
      name: "metrics",
      availableMetrics: mockAvailableMetrics,
      maxAllocation: 100,
      onSubmit: (values) => onSubmit(values),
      onFormChange: (values) => onFormChange(values),
    },
  },
};

export const AlreadyVoted: Story = {
  args: {
    args: {
      name: "alreadyVoted-metrics",
      availableMetrics: mockAvailableMetrics,
      maxAllocation: 100,
      onSubmit: (values) => onSubmit(values),
      onFormChange: (values) => onFormChange(values),
      submittedBallot: {
        ballot: [
          {
            metricId: "1",
            name: "Ecosystem Adoption",
            amount: 10,
            locked: false,
          },
          {
            metricId: "2",
            name: "Technical Innovation",
            amount: 20,
            locked: false,
          },
          {
            metricId: "3",
            name: "Community Engagement",
            amount: 30,
            locked: false,
          },
          {
            metricId: "4",
            name: "Security & Reliability",
            amount: 40,
            locked: false,
          },
        ],
        submittedAt: "2024-12-12T17:06:00Z",
      },
    },
  },
};
