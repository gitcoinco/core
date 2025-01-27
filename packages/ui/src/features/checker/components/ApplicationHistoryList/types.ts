import { ApplicationBadgeStatus } from "~application";

export interface Application {
  id: number;
  status: ApplicationBadgeStatus;
  name: string;
  date: Date;
  round: string;
}
