// services/graphqlClient.ts
import { GraphQLClient } from "graphql-request";

// Base URL for the GraphQL API
const GS_INDEXER_ENDPOINT = "http://gitcoin-data-layer-staging-lb-242619440.us-east-2.elb.amazonaws.com/v1/graphql";
const GS_INDEXER_ADMIN_SECRET = "ADD_SECRET_HERE";

// Create a new instance of GraphQLClient
export const graphqlClient = new GraphQLClient(GS_INDEXER_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": GS_INDEXER_ADMIN_SECRET,
  },
});

/**
 * Executes a GraphQL query.
 *
 * @param query - The GraphQL query string.
 * @param variables - The variables for the query (optional).
 * @returns A promise resolving with the query result.
 */
export async function executeQuery<T>(query: string, variables?: Record<string, T>): Promise<any> {
  try {
    return await graphqlClient.request<T>(query, variables);
  } catch (error) {
    console.error("GraphQL query execution error:", error);
    throw error;
  }
}
