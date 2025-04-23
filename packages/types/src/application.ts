import { Address } from "viem";
import { CheckerApiApplication } from "./checkerApi";
import { ProjectMetadata } from "./project";

export enum ApplicationStatus {
  APPEAL = "APPEAL",
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
  FRAUD = "FRAUD",
  IN_REVIEW = "IN_REVIEW",
  PENDING = "PENDING",
  RECEIVED = "RECEIVED",
  REJECTED = "REJECTED",
}

export type ApplicationStatusType = keyof typeof ApplicationStatus;

export interface ApplicationAnswer {
  type: string;
  hidden: boolean;
  question: string;
  questionId: number;
  encryptedAnswer?: {
    ciphertext: string;
    encryptedSymmetricKey: string;
  };
  answer: string;
}

export interface ProjectApplicationMetadata {
  signature: string;
  application: {
    round: string;
    answers: ApplicationAnswer[];
    project: ProjectMetadata;
    recipient: string;
  };
}

export interface BaseDonorValues {
  totalAmountDonatedInUsd: number;
  totalDonationsCount: number;
  uniqueDonorsCount: number;
}

export interface ProjectApplication extends BaseDonorValues {
  id: string;
  projectId: string;
  chainId: number;
  roundId: string;
  status: ApplicationStatusType;
  metadataCid: string;
  metadata: ProjectApplicationMetadata;
  distributionTransaction: string | null;
}

interface StatusSnapshot {
  status: ApplicationStatusType;
  updatedAtBlock: string;
  updatedAt: string;
}

export interface ProjectApplicationForManager extends ProjectApplication {
  anchorAddress: Address;
  statusSnapshots: StatusSnapshot[];
  project: {
    projectRoles: { address: Address }[];
  };
}

export interface PastApplication {
  id: string;
  roundId: string;
  statusSnapshots: StatusSnapshot[];
  status: ApplicationStatusType;
  round: {
    roundMetadata: {
      name: string;
    };
  };
}

export interface CheckerApplication extends ProjectApplicationForManager, CheckerApiApplication {
  lastFetchedAt?: Date;
}

export interface ApplicationAnswer {
  type: string;
  hidden: boolean;
  question: string;
  questionId: number;
  encryptedAnswer?: {
    ciphertext: string;
    encryptedSymmetricKey: string;
  };
  answer: string;
}

export interface ProjectApplicationMetadata {
  signature: string;
  application: {
    round: string;
    answers: ApplicationAnswer[];
    project: ProjectMetadata;
    recipient: string;
  };
}

export interface BaseDonorValues {
  totalAmountDonatedInUsd: number;
  totalDonationsCount: number;
  uniqueDonorsCount: number;
}

export interface ProjectApplication extends BaseDonorValues {
  id: string;
  projectId: string;
  chainId: number;
  roundId: string;
  status: ApplicationStatusType;
  metadataCid: string;
  metadata: ProjectApplicationMetadata;
  distributionTransaction: string | null;
}

export interface ProjectApplicationForManager extends ProjectApplication {
  anchorAddress: Address;
  statusSnapshots: StatusSnapshot[];
  project: {
    projectRoles: { address: Address }[];
  };
}

export interface PastApplication {
  id: string;
  roundId: string;
  statusSnapshots: StatusSnapshot[];
  status: ApplicationStatusType;
  round: {
    roundMetadata: {
      name: string;
    };
  };
}

interface StatusSnapshot {
  status: ApplicationStatusType;
  updatedAtBlock: string;
  updatedAt: string;
}
