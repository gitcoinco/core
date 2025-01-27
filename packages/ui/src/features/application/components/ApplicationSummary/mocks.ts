import {
  ProjectMetadata,
  CheckerApplication,
  ApplicationStatus,
  PastApplication,
} from "@/features/checker";

export const project: ProjectMetadata = {
  title: "Sample Project",
  description: "An example project description to showcase ApplicationSummary.",
  website: "https://example.com",
  bannerImg: "sampleBannerCID",
  logoImg: "sampleLogoCID",
  projectTwitter: "exampleproject",
  userGithub: "exampleuser",
  projectGithub: "exampleproject",
  credentials: {},
  owners: [{ address: "0x1234567890abcdef1234567890abcdef12345678" }],
  recipient: "0x1234567890abcdef1234567890abcdef12345678",
  createdAt: 1672531200, // Timestamp for Jan 1, 2023
  lastUpdated: 1675119600, // Timestamp for Feb 1, 2023
};

export const application: CheckerApplication = {
  id: "application-123",
  projectId: "project-123",
  chainId: 1,
  roundId: "round-1",
  status: ApplicationStatus.APPROVED,
  metadataCid: "bafybeihsamplemetadata",
  metadata: {
    signature: "0xsamplesignature",
    application: {
      round: "Round 1",
      answers: [
        {
          type: "text",
          hidden: false,
          question: "What is the purpose of your project?",
          questionId: 1,
          answer: "To make the world a better place.",
        },
        {
          type: "text",
          hidden: false,
          question: "Who is your target audience?",
          questionId: 2,
          answer: "Developers, creators, and tech enthusiasts.",
        },
      ],
      project,
      recipient: "0x1234567890abcdef1234567890abcdef12345678",
    },
  },
  distributionTransaction: null,
  totalAmountDonatedInUsd: 10000,
  totalDonationsCount: 500,
  uniqueDonorsCount: 100,
  anchorAddress: "0xanchoraddress1234567890abcdef12345678",
  statusSnapshots: [
    {
      status: ApplicationStatus.APPROVED,
      updatedAtBlock: "123456",
      updatedAt: "2023-01-01T00:00:00Z",
    },
  ],
  canonicalProject: {
    roles: [{ address: "0xroleaddress1234567890abcdef12345678" }],
  },
  alloApplicationId: "",
  evaluations: [],
};

export const pastApplications: PastApplication[] = [
  {
    id: "past-1",
    roundId: "round-1",
    statusSnapshots: [
      {
        status: ApplicationStatus.APPROVED,
        updatedAtBlock: "123456",
        updatedAt: "2023-01-01T00:00:00Z",
      },
    ],
    status: ApplicationStatus.APPROVED,
    round: { roundMetadata: { name: "Round 1" } },
  },
  {
    id: "past-2",
    roundId: "round-2",
    statusSnapshots: [
      {
        status: ApplicationStatus.REJECTED,
        updatedAtBlock: "123457",
        updatedAt: "2023-02-01T00:00:00Z",
      },
    ],
    status: ApplicationStatus.REJECTED,
    round: { roundMetadata: { name: "Round 2" } },
  },
];
