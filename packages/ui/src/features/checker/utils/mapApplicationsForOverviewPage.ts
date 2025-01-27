import { addressFrom } from "@/lib";
import { StatCardProps } from "@/primitives/StatCard";

import { CheckerApplication } from "~checker/store";
import { ProjectReview, Review } from "~checker/types";

// Define the structure of the function's return type
interface ProjectReviewsResultByCategory {
  categorizedReviews: Record<
    "INREVIEW" | "READY_TO_REVIEW" | "APPROVED" | "REJECTED",
    ProjectReview[]
  >;
  statCardsProps: StatCardProps[];
}

// Define the AI evaluator address
const AI_EVALUATOR_ADDRESS = addressFrom(1);

// Utility function to categorize project reviews and calculate application counts
export function categorizeProjectReviews(
  applications: Record<string, CheckerApplication>,
): ProjectReviewsResultByCategory {
  const applicationsArray = Object.values(applications);

  // Initialize the categorized reviews record
  const categorizedReviews: Record<
    "INREVIEW" | "READY_TO_REVIEW" | "APPROVED" | "REJECTED",
    ProjectReview[]
  > = {
    INREVIEW: [],
    READY_TO_REVIEW: [],
    APPROVED: [],
    REJECTED: [],
  };

  // Initialize application counts
  const applicationCounts = {
    pending: 0,
    approved: 0,
    rejected: 0,
    total: 0,
  };

  for (const application of applicationsArray) {
    const reviewedApplicationStatus = application.status !== "PENDING";

    // Only consider applications that are PENDING
    // Update application counts based on status
    switch (application.status) {
      case "APPROVED":
        applicationCounts.approved += 1;
        break;
      case "REJECTED":
        applicationCounts.rejected += 1;
        break;
      case "PENDING":
        applicationCounts.pending += 1;
        break;
      default:
        continue;
    }
    applicationCounts.total += 1;

    if (!application.evaluations) {
      application.evaluations = [];
    }

    // Separate evaluations into AI and non-AI
    const aiEvaluations =
      application.evaluations?.filter(
        (evaluation) => evaluation.evaluator === AI_EVALUATOR_ADDRESS,
      ) ?? [];

    const humanEvaluations =
      application.evaluations?.filter(
        (evaluation) => evaluation.evaluator.toLowerCase() !== AI_EVALUATOR_ADDRESS.toLowerCase(),
      ) ?? [];

    // Determine the category based on the number of human evaluations
    const isReadyForReview = humanEvaluations.length >= 2;
    const category: "INREVIEW" | "READY_TO_REVIEW" | "APPROVED" | "REJECTED" | "IGNORE" =
      !reviewedApplicationStatus && isReadyForReview
        ? "READY_TO_REVIEW"
        : !reviewedApplicationStatus
          ? "INREVIEW"
          : application.status !== "PENDING"
            ? application.status
            : "IGNORE";

    // Map human evaluations to reviews
    const reviews: Review[] = humanEvaluations?.map((evaluation) => {
      const isApproved = evaluation.evaluationStatus === "APPROVED"; // Assuming 50 as the approval threshold
      const reviewerAddress = evaluation.evaluator as `0x${string}`;
      return {
        reviewer: reviewerAddress,
        approved: isApproved,
      };
    });

    // Calculate the average score including both AI and human evaluations
    const totalScore =
      application.evaluations?.reduce((sum, evaluation) => sum + evaluation.evaluatorScore, 0) ?? 0;
    const totalEvaluations = application.evaluations?.length ?? 0;
    const scoreAverage = totalEvaluations > 0 ? totalScore / totalEvaluations : 0;

    // Calculate AI suggestion score (average AI evaluator scores)
    const aiTotalScore =
      aiEvaluations?.reduce((sum, evaluation) => sum + evaluation.evaluatorScore, 0) ?? 0;
    const aiSuggestion = aiEvaluations.length > 0 ? aiTotalScore / aiEvaluations.length : -1;

    const projectData = application.metadata.application.project;

    // Create the ProjectReview object
    const projectReview: ProjectReview = {
      id: application.id,
      name: projectData.title,
      date: new Date(projectData.createdAt),
      avatarUrl: `https://d16c97c2np8a2o.cloudfront.net/ipfs/${
        projectData.logoImg ?? projectData.bannerImg ?? ""
      }`,
      reviews, // Only human reviews
      aiSuggestion, // AI suggestion based on AI evaluations
      scoreAverage, // Average score from all evaluations
    };

    if (category !== "IGNORE") categorizedReviews[category].push(projectReview);
  }

  const statCardsProps: StatCardProps[] = [
    {
      label: "Applications pending",
      value: applicationCounts.pending.toString(),
    },
    {
      label: "Applications approved",
      value: applicationCounts.approved.toString(),
    },
    {
      label: "Applications rejected",
      value: applicationCounts.rejected.toString(),
    },
    {
      label: "Total applications",
      value: applicationCounts.total.toString(),
    },
  ];

  return {
    categorizedReviews,
    statCardsProps,
  };
}
