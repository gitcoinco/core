// services/graphqlClient.ts
import { GraphQLClient } from "graphql-request";

// Base URL for the GraphQL API
export const CHECKER_ENDPOINT = "https://api.checker.gitcoin.co";
const CHECKER_GRAPHQL_ENDPOINT = `${CHECKER_ENDPOINT}/graphql`;

// Create a new instance of GraphQLClient
export const graphqlClient = new GraphQLClient(CHECKER_GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Executes a GraphQL query.
 *
 * @param query - The GraphQL query string.
 * @param variables - The variables for the query (optional).
 * @returns A promise resolving with the query result.
 */
export async function executeQuery<T>(query: string, variables?: Record<string, any>): Promise<T> {
  try {
    return await graphqlClient.request<T>(query, variables);
  } catch (error) {
    console.error("GraphQL query execution error:", error);
    throw error;
  }
}
