import { Address } from "viem";

import { ApplicationStatusType } from "~checker/types";

export interface VerifiableCredential {
  "@context": string[];
  type: string[];
  credentialSubject: {
    id: string;
    "@context": Record<string, string>[];
    hash?: string;
    provider?: string;
    address?: string;
    challenge?: string;
  };
  issuer: string;
  issuanceDate: string;
  expirationDate: string;
  proof: {
    type: string;
    proofPurpose: string;
    verificationMethod: string;
    created: string;
    jws: string;
  };
}

export type ProjectCredentials = Record<string, VerifiableCredential>;

export interface ProjectOwner {
  address: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  website: string;
  bannerImg?: string;
  logoImg?: string;
  projectTwitter?: string;
  userGithub?: string;
  projectGithub?: string;
  credentials: ProjectCredentials;
  owners: ProjectOwner[];
  recipient?: string;
  createdAt: number;
  lastUpdated: number;
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

interface StatusSnapshot {
  status: ApplicationStatusType;
  updatedAtBlock: string;
  updatedAt: string;
}

export interface ProjectApplicationForManager extends ProjectApplication {
  anchorAddress: Address;
  statusSnapshots: StatusSnapshot[];
  canonicalProject: {
    roles: { address: Address }[];
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
