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

export type ProjectCredentials = Record<string, VerifiableCredential>;

export interface ProjectOwner {
  address: string;
}

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
