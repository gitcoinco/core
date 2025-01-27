"use client";

import { IconLabel } from "@/components/IconLabel";
import { ListGrid, ListGridColumn } from "@/primitives/ListGrid";

import { ApplicationBadge } from "~application";

import { Application } from "./types";

export interface ApplicationHistoryListProps {
  applications: Application[];
}

export const ApplicationHistoryList = ({ applications }: ApplicationHistoryListProps) => {
  const columns: ListGridColumn<Application>[] = [
    {
      header: "Status",
      key: "status",
      width: "1fr",
      render: (item) => {
        return (
          <div>
            <ApplicationBadge status={item.status} />
          </div>
        );
      },
    },
    {
      header: "Date",
      key: "date",
      width: "1fr",
      render: (item) => <IconLabel type="date" date={item.date} />,
    },
    {
      header: "Round",
      key: "reviews",
      width: "1fr",
      render: (item) => <div>{item.round}</div>,
    },
  ];
  return (
    <ListGrid
      data={applications}
      columns={columns}
      getRowKey={(item: Application) => item.id.toString()}
    />
  );
};
