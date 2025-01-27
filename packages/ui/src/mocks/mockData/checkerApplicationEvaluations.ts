import { Evaluation } from "@/features/checker";

export const checkerApplicationEvaluations: Evaluation[] = [
  {
    evaluatorScore: 70,
    evaluationStatus: "APPROVED",
    evaluatorType: "HUMAN",
    evaluator: "0x12345abcdef67890",
    summary: "The application is well-rounded, but some aspects need improvement.",
    lastUpdatedAt: "2024-11-20T13:44:10.306713",
    evaluationAnswers: [
      {
        answer: "NO",
        evaluationQuestion: {
          question:
            "Does the project demonstrate trustworthiness, transparency, or verifiable sources?",
        },
      },
      {
        answer: "NO",
        evaluationQuestion: {
          question:
            "Does the project align with the specific goals and objectives of the round as described in the metadata?",
        },
      },
      {
        answer: "YES",
        evaluationQuestion: {
          question: "Is the project feasible and sustainable over time?",
        },
      },
      {
        answer: "UNCERTAIN",
        evaluationQuestion: {
          question:
            "Will the project have a measurable, positive impact on the target community or cause?",
        },
      },
      {
        answer: "UNCERTAIN",
        evaluationQuestion: {
          question:
            "Does the project have a plan for continued success or impact after the initial grant funding ends?",
        },
      },
    ],
  },
  {
    evaluatorScore: 50,
    evaluationStatus: "REJECTED",
    evaluatorType: "HUMAN",
    evaluator: "0x12345abcdef67890",
    summary: "The application is well-rounded, but some aspects need improvement.",
    lastUpdatedAt: "2024-11-20T13:44:10.306713",
    evaluationAnswers: [
      {
        answer: "NO",
        evaluationQuestion: {
          question:
            "Does the project demonstrate trustworthiness, transparency, or verifiable sources?",
        },
      },
      {
        answer: "NO",
        evaluationQuestion: {
          question:
            "Does the project align with the specific goals and objectives of the round as described in the metadata?",
        },
      },
      {
        answer: "YES",
        evaluationQuestion: {
          question: "Is the project feasible and sustainable over time?",
        },
      },
      {
        answer: "UNCERTAIN",
        evaluationQuestion: {
          question:
            "Will the project have a measurable, positive impact on the target community or cause?",
        },
      },
      {
        answer: "UNCERTAIN",
        evaluationQuestion: {
          question:
            "Does the project have a plan for continued success or impact after the initial grant funding ends?",
        },
      },
    ],
  },
  {
    evaluatorScore: 90,
    evaluationStatus: "APPROVED",
    evaluatorType: "LLM_GPT3",
    evaluator: "0x12345abcdef67890",
    summary: "The application is well-rounded, but some aspects need improvement.",
    lastUpdatedAt: "2024-11-20T13:44:10.306713",
    evaluationAnswers: [
      {
        answer: "YES",
        evaluationQuestion: {
          question:
            "Does the project demonstrate trustworthiness, transparency, or verifiable sources?",
        },
      },
      {
        answer: "YES",
        evaluationQuestion: {
          question:
            "Does the project align with the specific goals and objectives of the round as described in the metadata?",
        },
      },
      {
        answer: "YES",
        evaluationQuestion: {
          question: "Is the project feasible and sustainable over time?",
        },
      },
      {
        answer: "NO",
        evaluationQuestion: {
          question:
            "Will the project have a measurable, positive impact on the target community or cause?",
        },
      },
      {
        answer: "UNCERTAIN",
        evaluationQuestion: {
          question:
            "Does the project have a plan for continued success or impact after the initial grant funding ends?",
        },
      },
    ],
  },
];
