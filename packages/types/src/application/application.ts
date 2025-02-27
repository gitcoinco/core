export enum ApplicationStatus {
  APPEAL = "APPEAL",
  APPROVED = "APPROVED",
  Approved = "approved",
  CANCELLED = "CANCELLED",
  FRAUD = "FRAUD",
  IN_REVIEW = "IN_REVIEW",
  PENDING = "PENDING",
  Pending = "pending",
  RECEIVED = "RECEIVED",
  REJECTED = "REJECTED",
  Rejected = "rejected",
}

export enum ApplicationBadgeStatus {
  Approved = "approved",
  Pending = "pending",
  Rejected = "rejected",
}

export type ApplicationStatusType = keyof typeof ApplicationStatus;
