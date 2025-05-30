import { http, HttpResponse } from "msw";
import { graphql } from "msw";

import { applicationsForManagers } from "./mockData/applicationsForManager";
import { rounds } from "./mockData/rounds";

import { checkerApplicationEvaluations } from "./mockData/checkerApplicationEvaluations";
import { checkerPoolData } from "./mockData/checkerPoolData";
import { getApplicationById } from "./mockData/indexerGetApplicationById";
import { pastApplicationsByApplicationId } from "./mockData/pastApplicationsByApplicationId";

export const taskListHandler = http.get("https://jsonplaceholder.typicode.com/todos", () => {
  return HttpResponse.json([
    { userId: 1, id: 1, title: "Mocked Task 1", completed: false },
    { userId: 1, id: 2, title: "Mocked Task 2", completed: true },
  ]);
});

export const taskListHandlerWithError = http.get(
  "https://jsonplaceholder.typicode.com/todos",
  () => {
    return HttpResponse.error();
  },
);

export const applicationForManagerHandler = graphql.query("getApplicationsForManager", () => {
  return HttpResponse.json(applicationsForManagers);
});

export const getRoundHandler = graphql.query("getRound", () => {
  return HttpResponse.json(rounds);
});

export const checkerPoolDataHandler = graphql.query("getCheckerPoolData", () => {
  return HttpResponse.json({
    data: { pools: [checkerPoolData] },
  });
});

export const indexerGetApplicationByIdHandler = graphql.query("getApplicationByIdQuery", () => {
  return HttpResponse.json({ data: { applications: [getApplicationById] } });
});

export const checkerApplicationEvaluationsHandler = graphql.query(
  "getCheckerApplicationEvaluations",
  () => {
    return HttpResponse.json({
      data: { applications: [{ evaluations: checkerApplicationEvaluations }] },
    });
  },
);

export const getPastApplicationsByApplicationIdHandler = graphql.query(
  "getPastApplicationsByApplicationId",
  () => {
    return HttpResponse.json({ data: pastApplicationsByApplicationId });
  },
);

export const handlers = [
  taskListHandler,
  applicationForManagerHandler,
  checkerPoolDataHandler,
  indexerGetApplicationByIdHandler,
  checkerApplicationEvaluationsHandler,
  getPastApplicationsByApplicationIdHandler,
];
