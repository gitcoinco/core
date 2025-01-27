import { PoolInfo } from "~checker/store/types";

import { executeQuery } from "./alloClient";
import {
  applicationsForManagerQuery,
  getApplicationByIdQuery,
  getPastApplicationsQueryByApplicationId,
} from "./queries";
import { PastApplication, ProjectApplication, ProjectApplicationForManager } from "./types";

export async function getApplicationsFromIndexer(
  chainId?: number,
  roundId?: string,
): Promise<{ applications: ProjectApplicationForManager[]; roundData: PoolInfo }> {
  try {
    const response = await executeQuery(applicationsForManagerQuery, {
      chainId,
      roundId,
    });
    return {
      applications: response.applications as ProjectApplicationForManager[],
      roundData: response.round as PoolInfo,
    };
  } catch (e) {
    throw new Error(`Failed to fetch applications data. with error: ${e}`);
  }
}

export async function getApplicationByIdFromIndexer(
  chainId: number,
  roundId: string,
  applicationId: string,
): Promise<ProjectApplication> {
  try {
    const response = await executeQuery(getApplicationByIdQuery, {
      chainId,
      roundId,
      applicationId,
    });
    return response.application as ProjectApplication;
  } catch (e) {
    throw new Error(`Failed to fetch application data. with error: ${e}`);
  }
}

export async function getPastApplicationsByApplicationIdFromIndexer(
  chainId: number,
  roundId: string,
  applicationId: string,
): Promise<PastApplication[]> {
  try {
    const response = await executeQuery(getPastApplicationsQueryByApplicationId, {
      chainId,
      roundId,
      applicationId,
    });

    return response.applications[0].project.applications as PastApplication[];
  } catch (e) {
    throw new Error(`Failed to fetch past applications data. with error: ${e}`);
  }
}
