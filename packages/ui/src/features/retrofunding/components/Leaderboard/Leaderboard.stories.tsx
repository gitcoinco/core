import type { Meta, StoryObj } from "@storybook/react";

import { Leaderboard } from "./Leaderboard";

const meta: Meta<typeof Leaderboard> = {
  title: "Features/Retrofunding/Leaderboard",
  component: Leaderboard,
};

export default meta;
type Story = StoryObj<typeof Leaderboard>;

const mockData = {
  projects: {
    1: {
      project: {
        name: "Project Alpha",
        logoImg: "https://picsum.photos/107",
        projectTwitter: "projectalpha",
        projectGithub: "projectalpha",
        description: "Project Alpha is a project that does something",
        website: "https://projectalpha.com",
      },
      metrics: {
        votes: 1250,
        impact: 89,
        quality: 95,
        innovation: 88,
        total: 1250,
        totalVotes: 1250,
        totalImpact: 89,
        totalQuality: 95,
        totalInnovation: 88,
      },
    },
    2: {
      project: {
        name: "IPNI (Interplanetary Network Infrastructure)",
        logoImg: "https://picsum.photos/108",
        projectTwitter: "projectbeta",
        projectGithub: "projectbeta",
        description: "Project Beta is a project that does something",
        website: "https://projectbeta.com",
      },
      metrics: {
        votes: 980,
        impact: 92,
        quality: 87,
        innovation: 95,
        total: 980,
        totalVotes: 980,
        totalImpact: 92,
        totalQuality: 87,
        totalInnovation: 95,
      },
    },
    3: {
      project: {
        name: "Project Gamma",
        logoImg: "https://picsum.photos/109",
        projectTwitter: "projectgamma",
        projectGithub: "projectgamma",
        description: "Project Gamma is a project that does something",
        website: "https://projectgamma.com",
      },
      metrics: {
        votes: 875,
        impact: 78,
        quality: 82,
        innovation: 79,
        total: 875,
        totalVotes: 875,
        totalImpact: 78,
        totalQuality: 82,
        totalInnovation: 79,
      },
    },
    4: {
      project: {
        name: "Project Delta",
        logoImg: "https://picsum.photos/110",
        projectTwitter: "projectdelta",
        projectGithub: "projectdelta",
        description: "Project Delta is a project that does something",
        website: "https://projectdelta.com",
      },
      metrics: {
        votes: 1100,
        impact: 85,
        quality: 88,
        innovation: 82,
        total: 1100,
        totalVotes: 1100,
        totalImpact: 85,
        totalQuality: 88,
        totalInnovation: 82,
      },
    },
    5: {
      project: {
        name: "Project Epsilon",
        logoImg: "https://picsum.photos/111",
        projectTwitter: "projectepsilon",
        projectGithub: "projectepsilon",
        description: "Project Epsilon is a project that does something",
        website: "https://projectepsilon.com",
      },
      metrics: {
        votes: 750,
        impact: 75,
        quality: 80,
        innovation: 85,
        total: 750,
        totalVotes: 750,
        totalImpact: 75,
        totalQuality: 80,
        totalInnovation: 85,
      },
    },
    6: {
      project: {
        name: "Project Zeta",
        logoImg: "https://picsum.photos/112",
        projectTwitter: "projectzeta",
        projectGithub: "projectzeta",
        description: "Project Zeta is a project that does something",
        website: "https://projectzeta.com",
      },
      metrics: {
        votes: 650,
        impact: 70,
        quality: 75,
        innovation: 80,
        total: 650,
        totalVotes: 650,
        totalImpact: 70,
        totalQuality: 75,
        totalInnovation: 80,
      },
    },
    7: {
      project: {
        name: "Project Eta",
        logoImg: "https://picsum.photos/113",
        projectTwitter: "projecteta",
        projectGithub: "projecteta",
        website: "https://projecteta.com",
        description: "Project Eta is a project that does something",
      },
      metrics: {
        votes: 550,
        impact: 60,
        quality: 65,
        innovation: 70,
        total: 550,
        totalVotes: 550,
        totalImpact: 60,
        totalQuality: 65,
        totalInnovation: 70,
      },
    },
    8: {
      project: {
        name: "Project Theta",
        logoImg: "https://picsum.photos/114",
        projectTwitter: "projecttheta",
        projectGithub: "projecttheta",
        description: "Project Theta is a project that does something",
        website: "https://projecttheta.com",
      },
      metrics: {
        votes: 450,
        impact: 55,
        quality: 50,
        innovation: 60,
        total: 450,
        totalVotes: 450,
        totalImpact: 55,
        totalQuality: 50,
        totalInnovation: 60,
      },
    },
    9: {
      project: {
        name: "Project Iota",
        logoImg: "https://picsum.photos/115",
        projectTwitter: "projectiota",
        projectGithub: "projectiota",
        description: "Project Iota is a project that does something",
        website: "https://projectiota.com",
      },
      metrics: {
        votes: 350,
        impact: 45,
        quality: 40,
        innovation: 50,
        total: 350,
        totalVotes: 350,
        totalImpact: 45,
        totalQuality: 40,
        totalInnovation: 50,
      },
    },
    10: {
      project: {
        name: "Project Kappa",
        logoImg: "https://picsum.photos/116",
        projectTwitter: "projectkappa",
        projectGithub: "projectkappa",
        description: "Project Kappa is a project that does something",
        website: "https://projectkappa.com",
      },
      metrics: {
        votes: 250,
        impact: 35,
        quality: 30,
        innovation: 40,
        total: 250,
        totalVotes: 250,
        totalImpact: 35,
        totalQuality: 30,
        totalInnovation: 40,
      },
    },
    11: {
      project: {
        name: "Project Lambda",
        logoImg: "https://picsum.photos/117",
        projectTwitter: "projectlambda",
        projectGithub: "projectlambda",
        description: "Project Lambda is a project that does something",
        website: "https://projectlambda.com",
      },
      metrics: {
        votes: 150,
        impact: 25,
        quality: 20,
        innovation: 30,
        total: 150,
        totalVotes: 150,
        totalImpact: 25,
        totalQuality: 20,
        totalInnovation: 30,
      },
    },
  },
  metrics: {
    votes: {
      name: "Votes",
      description: "Total number of community votes received",
    },
    impact: {
      name: "Impact",
      description: "Project's potential impact score",
    },
    quality: {
      name: "Quality",
      description: "Overall quality assessment score",
    },
    innovation: {
      name: "Innovation",
      description: "Innovation and originality score",
    },
    total: {
      name: "Total",
      description: "Total score",
    },
    totalVotes: {
      name: "Total Votes",
      description: "Total number of community votes received",
    },
    totalImpact: {
      name: "Total Impact",
      description: "Total impact score",
    },
    totalQuality: {
      name: "Total Quality",
      description: "Total quality score",
    },
    totalInnovation: {
      name: "Total Innovation",
      description: "Total innovation score",
    },
  },
};

export const SingleMetric: Story = {
  args: {
    projects: Object.fromEntries(
      Object.entries(mockData.projects).map(([key, value]) => [
        key,
        {
          project: value.project,
          metrics: { votes: value.metrics.votes },
        },
      ]),
    ),
    metrics: {
      votes: mockData.metrics.votes,
    },
  },
};

export const FourMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 4)),
  },
};
export const FiveMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 5)),
  },
};

export const AllMetrics: Story = {
  args: {
    projects: mockData.projects,
    metrics: mockData.metrics,
  },
};

export const AllMetricsSlim: Story = {
  args: {
    projects: mockData.projects,
    metrics: mockData.metrics,
    size: "slim",
  },
};

export const Empty: Story = {
  args: {
    projects: {},
    metrics: Object.fromEntries(Object.entries(mockData.metrics).slice(0, 4)),
  },
};
