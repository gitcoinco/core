import { http, HttpResponse } from "msw";
import { graphql } from "msw";

import { applicationsForManagers } from "./mockData/applicationsForManager";
import { getApplicationById } from "./mockData/indexerGetApplicationById";
import { pastApplicationsByApplicationId } from "./mockData/pastApplicationsByApplicationId";
import { rounds } from "./mockData/rounds";

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

export const indexerGetApplicationByIdHandler = graphql.query("getApplicationByIdQuery", () => {
  return HttpResponse.json({ data: { applications: [getApplicationById] } });
});

export const getPastApplicationsByApplicationIdHandler = graphql.query(
  "getPastApplicationsByApplicationId",
  () => {
    return HttpResponse.json({ data: pastApplicationsByApplicationId });
  },
);

export const handlers = [
  taskListHandler,
  applicationForManagerHandler,
  indexerGetApplicationByIdHandler,
  getPastApplicationsByApplicationIdHandler,
];
