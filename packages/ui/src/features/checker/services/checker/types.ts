import { Evaluation } from "~checker/types";

export interface CheckerApiApplication {
  alloApplicationId: string;
  evaluations: Evaluation[];
}

export interface CheckerApiEvaluationQuestion {
  questionIndex: number;
  question: string;
}

export interface CheckerApiPoolData {
  evaluationQuestions: CheckerApiEvaluationQuestion[];
  applications: CheckerApiApplication[];
}
