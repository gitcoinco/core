import { EvaluationBody } from "../../types";
import { ProjectApplicationForManager } from "../allo";
import { CHECKER_ENDPOINT } from "./checkerClient";

export interface SyncPoolBody {
  chainId: number;
  alloPoolId: string;
}

export interface TriggerLLMBody {
  chainId: number;
  alloPoolId: string;
  alloApplicationId: string;
  signature: string;
}

export async function submitEvaluation(
  evaluationBody: EvaluationBody,
): Promise<{ evaluationId: string }> {
  const url = `${CHECKER_ENDPOINT}/api/evaluate`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...evaluationBody, evaluatorType: "human" }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message || "Unknown error"}`);
    }

    const data = await response.json();
    return data.evaluationId;
  } catch (error) {
    console.error("Error submitting evaluation:", error);
    throw error;
  }
}

export async function syncPool(syncPoolBody: SyncPoolBody): Promise<boolean> {
  const url = `${CHECKER_ENDPOINT}/api/pools`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...syncPoolBody,
        skipEvaluation: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message || "Unknown error"}`);
    }

    return true;
  } catch (error) {
    console.error("Error syncing pool:", error);
    throw error;
  }
}

export async function triggerLLM(triggerLLMBody: TriggerLLMBody): Promise<boolean> {
  const url = `${CHECKER_ENDPOINT}/api/evaluate/llm`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...triggerLLMBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message || "Unknown error"}`);
    }

    return true;
  } catch (error) {
    console.error("Error triggering LLM:", error);
    throw error;
  }
}

export async function verifyCredentials(
  application: Partial<ProjectApplicationForManager>,
): Promise<{ twitter: boolean; github: boolean }> {
  const url = `${CHECKER_ENDPOINT}/api/passport/validate`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ application: application }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message || "Unknown error"}`);
    }

    const data = await response.json();
    return {
      twitter: data.provider.twitter?.isVerified || false,
      github: data.provider.github?.isVerified || false,
    };
  } catch (error) {
    console.error("Error verifying credentials:", error);
    throw error;
  }
}
