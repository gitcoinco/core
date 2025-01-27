import type { Meta, StoryObj } from "@storybook/react";

import { ProjectApplicationForManager } from "@/features/checker/services/allo";
import { applicationsForManagers } from "@/mocks/mockData/applicationsForManager";

import { ProjectSummary } from "./ProjectSummary";

const meta = {
  component: ProjectSummary,
  title: "Features/Project/ProjectSummary",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ProjectSummary>;

export const Default: Story = {
  args: {
    projectMetadata: {
      title: "Sample Project",
      description: "This is a sample project for demonstration purposes.",
      website: "https://www.sampleproject.com",
      recipient: "0x1234567890123456789012345678901234567890",
      createdAt: new Date("2024-01-01T00:00:00Z").getTime(),
      lastUpdated: new Date("2024-11-21T12:14:34.603Z").getTime(),
      projectTwitter: "sampleproject",
      projectGithub: "sampleproject",
      credentials: {},
      owners: [],
    },
    application: applicationsForManagers.data
      .applications[0] as unknown as Partial<ProjectApplicationForManager>,
  },
};
