import { gql } from "graphql-request";

export const applicationsForManagerQuery = gql`
  query getApplicationsForManager($chainId: Int!, $roundId: String!) {
    applications(limit: 1000, where: { roundId: { _eq: $roundId }, chainId: { _eq: $chainId } }) {
      id
      projectId
      chainId
      roundId
      status
      metadataCid
      metadata
      distributionTransaction
      statusSnapshots
      anchorAddress
      canonicalProject {
        roles {
          address
        }
      }
    }
    rounds(where: { chainId: { _eq: $chainId }, id: { _eq: $roundId } }) {
      roundMetadata
      strategyName
      strategyAddress
      applicationsStartTime
      applicationsEndTime
      donationsEndTime
      donationsStartTime
      roles {
        address
      }
      project {
        id
      }
    }
  }
`;

export const getApplicationByIdQuery = gql`
  query getApplicationById($chainId: Int!, $roundId: String!, $applicationId: String!) {
    applications(
      where: { chainId: { _eq: $chainId }, roundId: { _eq: $roundId }, id: { _eq: $applicationId } }
    ) {
      id
      projectId
      chainId
      roundId
      status
      metadataCid
      metadata
      distributionTransaction
      statusSnapshots
      anchorAddress
      canonicalProject {
        roles {
          address
        }
      }
    }
  }
`;

export const getPastApplicationsQueryByApplicationId = gql`
  query getPastApplicationsByApplicationId(
    $chainId: Int!
    $roundId: String!
    $applicationId: String!
  ) {
    applications(
      where: { chainId: { _eq: $chainId }, roundId: { _eq: $roundId }, id: { _eq: $applicationId } }
    ) {
      project {
        applications {
          id
          roundId
          statusSnapshots
          status
          round {
            roundMetadata
          }
        }
      }
    }
  }
`;
