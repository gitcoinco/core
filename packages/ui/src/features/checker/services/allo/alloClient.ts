// services/graphqlClient.ts
import { GraphQLClient } from "graphql-request";

let graphqlClient: GraphQLClient;

// Create a new instance of GraphQLClient
export const initializeAlloClient = (endpoint: string) => {
  graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

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
