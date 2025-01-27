"use client";

import { UseQueryResult } from "@tanstack/react-query";
import { match, P } from "ts-pattern";

import { Avatar } from "@/primitives/Avatar";
import { BannerImage } from "@/primitives/BannerImage";
import { Skeleton } from "@/primitives/Skeleton";
import { Card, CardContent } from "@/ui-shadcn/card";

import { ProjectData } from "../../types";

export type ProjectCardProps = ProjectData;
export interface ProjectCardQueryProps {
  queryResult: UseQueryResult<ProjectData, Error>;
}

export function ProjectCard(props: ProjectCardProps | ProjectCardQueryProps) {
  return match(props)
    .with({ queryResult: P.not(P.nullish) }, ({ queryResult }) =>
      match(queryResult)
        .with({ status: "error", error: P.select() }, (error) => <ProjectErrorCard error={error} />)
        .with({ status: "pending" }, () => <LoadingCard />)
        .with({ status: "success", data: P.select() }, (data) => <ProjectDataCard data={data} />)
        .otherwise(() => <ProjectErrorCard />),
    )
    .otherwise(() => <ProjectDataCard data={props as ProjectData} />);
}

export interface ProjectDataCardProps {
  data: ProjectData;
}

export function ProjectDataCard({ data }: ProjectDataCardProps) {
  return (
    <Card className="block max-w-sm overflow-hidden">
      <div className="relative">
        <BannerImage ipfsCID={data.bannerImg} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Avatar ipfsCID={data.logoImg} size={60} />
        </div>
      </div>
      <CardContent className="pt-12">
        <h2 className="mb-2 font-ui-sans text-2xl font-bold">{data.title}</h2>
        <p className="line-clamp-4 font-ui-sans text-grey-500">{data.description}</p>
      </CardContent>
    </Card>
  );
}

export function LoadingCard() {
  return (
    <Card className="block max-w-sm overflow-hidden" role="presentation">
      <div className="relative">
        <Skeleton className="h-[120px] w-full rounded-md bg-grey-100" />
      </div>
      <CardContent className="pt-12 text-center">
        <Skeleton className="mb-2 h-10 w-full rounded-md" />
        <Skeleton className="h-24 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}

export function ProjectErrorCard({ error }: { error?: Error }) {
  return <></>;
}
