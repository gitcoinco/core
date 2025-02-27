import { Hex } from "viem";

export interface Evaluation {
  evaluator: string;
  evaluationStatus: "APPROVED" | "REJECTED" | "PENDING" | "UNCERTAIN";
  evaluatorType: "HUMAN" | "LLM_GPT3";
  evaluatorScore: number;
  summary: string;
  lastUpdatedAt: string;
  evaluationAnswers: EvaluationAnswer[];
}

export interface EvaluationAnswer {
  answer: string;
  evaluationQuestion?: {
    question: string;
  };
}

export type EvaluationAction = "approve" | "reject" | "skip";

export type EvaluationActionStatus =
  | "evaluating"
  | "evaluatingError"
  | "idle"
  | "signing"
  | "signingError"
  | "success";

export interface EvaluationActionState {
  status: EvaluationActionStatus;
}

export enum EvaluationStatus {
  APPROVED = "approved",
  REJECTED = "rejected",
  UNCERTAIN = "uncertain",
}

interface EvaluationAnswerInput {
  questionIndex: number;
  answerEnum: number;
}

export interface EvaluationSummaryInput {
  questions: EvaluationAnswerInput[];
  summary: string;
}

export interface EvaluationBody {
  chainId: number;
  alloPoolId: string;
  alloApplicationId: string;
  cid: string;
  evaluator?: string;
  summaryInput: EvaluationSummaryInput;
  evaluationStatus: EvaluationStatus;
  signature?: Hex;
}
