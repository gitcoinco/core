import { ProjectReview } from "@gitcoin/types/checker";
import { addressFrom } from "@gitcoin/utils";

const projectsPendingReview: Omit<ProjectReview, "avatarUrl">[] = [
  {
    id: "1",
    name: "project title",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [],
    aiSuggestion: 60,
    scoreAverage: 60,
  },
  {
    id: "2",
    name: "project title",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [],
    aiSuggestion: 23,
    scoreAverage: 23,
  },
  {
    id: "3",
    name: "project title",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [],
    aiSuggestion: 54,
    scoreAverage: 54,
  },
];

const projectsReadyToSubmit: Omit<ProjectReview, "avatarUrl">[] = [
  {
    id: "4",
    name: "cool project",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [
      { approved: true, reviewer: addressFrom(1) },
      { approved: false, reviewer: "0xJaneDoe" },
      { approved: true, reviewer: "0xJoneDoe" },
    ],
    aiSuggestion: 0,
    scoreAverage: 88,
  },
  {
    id: "5",
    name: "project title",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [
      { approved: true, reviewer: "0xJohnDoe" },
      { approved: true, reviewer: "0xJoneDoe" },
    ],
    aiSuggestion: 80,
    scoreAverage: 92,
  },
  {
    id: "6",
    name: "project title",
    date: new Date(2024, 5, 3, 15, 0, 0),
    reviews: [
      { approved: true, reviewer: "0xJohnDoe" },
      { approved: true, reviewer: "0xJoneDoe" },
    ],
    aiSuggestion: 80,
    scoreAverage: 92,
  },
];

export const mockPendingReview0 = projectsPendingReview.map((project) => ({
  ...project,
  avatarUrl: `https://robohash.org/${project.id}${project.name}?set=set4&bgset=bg1&size=400x400`,
}));

export const mockReadyToSubmit0 = projectsReadyToSubmit.map((project) => ({
  ...project,
  avatarUrl: `https://robohash.org/${project.id}${project.name}?set=set4&bgset=bg1&size=400x400`,
}));
