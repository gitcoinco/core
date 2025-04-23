import { gql } from "graphql-request";

export const checkerPoolDataQuery = gql`
  query getCheckerPoolData($chainId: Int!, $alloPoolId: String!) {
    pools(filter: { chainId: { equalTo: $chainId }, alloPoolId: { equalTo: $alloPoolId } }) {
      evaluationQuestions {
        questionIndex
        question
      }
      applications(filter: { evaluationsExist: true }) {
        alloApplicationId
        evaluations {
          evaluatorScore
          evaluationStatus
          evaluatorType
          evaluator
          summary
          lastUpdatedAt
          evaluationAnswers {
            answer
          }
        }
      }
    }
  }
`;

export const checkerApplicationEvaluationsQuery = gql`
  query getCheckerApplicationEvaluations(
    $chainId: Int!
    $alloPoolId: String!
    $alloApplicationId: String!
  ) {
    applications(
      filter: {
        chainId: { equalTo: $chainId }
        pool: { alloPoolId: { equalTo: $alloPoolId } }
        alloApplicationId: { equalTo: $alloApplicationId }
      }
    ) {
      evaluations {
        evaluatorScore
        evaluationStatus
        evaluatorType
        evaluator
        summary
        lastUpdatedAt
        evaluationAnswers {
          answer
          evaluationQuestion {
            question
          }
        }
      }
    }
  }
`;
