import { Address } from "viem";

import { ApplicationStatusType } from "./application";
import { PoolCategory } from "./pool";

export interface Review {
  reviewer: `0x${string}`;
  approved: boolean;
}

export interface ReviewBody {
  roundId: string;
  strategyAddress: Address;
  applicationsToUpdate: {
    index: number;
    status: ApplicationStatusType;
  }[];
  currentApplications: {
    index: number;
    status: ApplicationStatusType;
  }[];
  strategy?: PoolCategory;
}
