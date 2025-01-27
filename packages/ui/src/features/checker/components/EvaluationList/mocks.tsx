import { Evaluation } from "../../types";

export const mockEvaluations: Evaluation[] = [
  {
    evaluator: "0x5A1b56f30E94c16287A70e1D9D218c7A64A1b6E8",
    evaluationStatus: "APPROVED",
    evaluatorType: "HUMAN",
    evaluatorScore: 85,
    summary: "The project demonstrates strong potential and feasibility.",
    lastUpdatedAt: new Date(2024, 5, 1, 14, 30, 0).toISOString(),
    evaluationAnswers: [
      {
        answer: "Yes, the project meets the necessary requirements.",
        evaluationQuestion: { question: "Does the project meet the criteria?" },
      },
      {
        answer: "The timeline and budget are realistic.",
        evaluationQuestion: { question: "Are the timeline and budget feasible?" },
      },
    ],
  },
  {
    evaluator: "0x0000000000000000000000000000000000000001",
    evaluationStatus: "REJECTED",
    evaluatorType: "LLM_GPT3",
    evaluatorScore: 40,
    summary: "The project lacks clear objectives and necessary details.",
    lastUpdatedAt: new Date(2024, 5, 2, 9, 15, 0).toISOString(),
    evaluationAnswers: [
      {
        answer: "No, the objectives are not clearly defined.",
        evaluationQuestion: { question: "Does the project have clear objectives?" },
      },
      {
        answer: "There is insufficient detail on execution.",
        evaluationQuestion: { question: "Is the execution plan detailed enough?" },
      },
    ],
  },
];
