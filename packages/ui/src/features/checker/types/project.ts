import { Review } from "./review";

export type ProjectStatus = "pending" | "approved" | "rejected";

export interface ProjectReview {
  id: string;
  name: string;
  date: Date;
  avatarUrl: string;
  reviews: Review[];
  aiSuggestion: number;
  scoreAverage: number;
}
