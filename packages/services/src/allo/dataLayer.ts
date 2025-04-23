import {
  PastApplication,
  PoolInfo,
  ProjectApplication,
  ProjectApplicationForManager,
} from "@gitcoin/types";
import { executeQuery } from "./alloClient";
import {
  applicationsForManagerQuery,
  getApplicationByIdQuery,
  getPastApplicationsQueryByApplicationId,
  getRoundQuery,
} from "./queries";

export async function getApplicationsFromIndexer(
  chainId?: number,
  roundId?: string,
): Promise<{ applications: ProjectApplicationForManager[]; roundData: PoolInfo }> {
  try {
    const roundResponse = await executeQuery(getRoundQuery, {
      chainId,
      roundId,
    });

    const PAGE_SIZE = 200; // You can adjust this value based on your needs
    let allApplications: ProjectApplicationForManager[] = [];
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const response: { applications: ProjectApplicationForManager[] } = await executeQuery(
        applicationsForManagerQuery,
        {
          chainId,
          roundId,
          limit: PAGE_SIZE,
          offset,
        },
      );

      const applications = response.applications;
      allApplications = [...allApplications, ...applications];

      // If we got fewer results than the page size, we've reached the end
      if (applications.length < PAGE_SIZE) {
        hasMore = false;
      } else {
        offset += PAGE_SIZE;
      }
    }
    return {
      applications: allApplications,
      roundData: roundResponse.rounds[0] as PoolInfo,
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
    return response.applications[0] as ProjectApplication;
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
