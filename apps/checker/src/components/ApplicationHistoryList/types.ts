import { ApplicationBadgeStatus } from "@gitcoin/ui";

export interface Application {
  id: number;
  status: ApplicationBadgeStatus;
  name: string;
  date: Date;
  round: string;
}
