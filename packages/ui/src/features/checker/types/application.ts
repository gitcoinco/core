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
