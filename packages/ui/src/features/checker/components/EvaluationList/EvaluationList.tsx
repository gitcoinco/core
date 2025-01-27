"use client";

import { IconLabel } from "@/components/IconLabel";
import { capitalizeWord, getAddressLabel } from "@/lib/utils";
import { IconType } from "@/primitives/Icon";
import { ListGrid, ListGridColumn } from "@/primitives/ListGrid";

import { Evaluation } from "~checker/types";

export interface EvaluationListProps {
  evaluations: Evaluation[];
}

export const EvaluationList = ({ evaluations }: EvaluationListProps) => {
  const columns: ListGridColumn<Evaluation>[] = [
    {
      header: "Date Reviewed",
      key: "lastUpdatedAt",
      width: "1fr",
      render: (item) => <IconLabel type="date" date={new Date(item.lastUpdatedAt)} />,
    },
    {
      header: "Reviewer",
      key: "reviewer",
      width: "1fr",
      render: (item) => (
        <p>
          {item.evaluatorType === "HUMAN" ? getAddressLabel(undefined, item.evaluator) : "ChatGPT"}
        </p>
      ),
    },
    {
      header: "Score",
      key: "evaluatorScore",
      width: "1fr",
      render: (item) => <p>{item.evaluatorScore}%</p>,
    },
    {
      header: "Status",
      key: "evaluatorStatus",
      width: "1fr",
      render: (item) => {
        const icon =
          item.evaluationStatus === "APPROVED"
            ? IconType.CHECK
            : item.evaluationStatus === "UNCERTAIN"
              ? IconType.EXCLAMATION_CIRCLE
              : IconType.X;

        const className =
          item.evaluationStatus === "APPROVED"
            ? "text-moss-700"
            : item.evaluationStatus === "UNCERTAIN"
              ? "text-yellow-700"
              : "text-red-700";

        return (
          <IconLabel
            className={className}
            type="default"
            iconVariant="default"
            iconType={icon}
            label={capitalizeWord(item.evaluationStatus)}
          />
        );
      },
    },
  ];
  return (
    <ListGrid
      data={evaluations}
      columns={columns}
      rowClassName="h-[72px]"
      getRowKey={(item: Evaluation) => item.evaluator}
    />
  );
};
