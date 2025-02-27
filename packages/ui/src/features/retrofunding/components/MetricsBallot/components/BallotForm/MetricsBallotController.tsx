"use client";

import { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FieldArrayPath } from "react-hook-form";

import { MetricsBallotFormValues, DB_NAME, STORE_NAME, BallotFieldValues } from "@gitcoin/types";
import { cn } from "@gitcoin/utils";

import { useMetricsBallot } from "@/features/retrofunding/hooks/useMetricsBallot";

import { BallotTab } from "../BallotTab";
import { MetricsTab } from "../MetricsTab";
import { AlreadyVotedBadge } from "./AlreadyVotedBadge";
import { TabButton } from "./TabButton";

export interface MetricsBallotControllerProps {
  className?: string;
  name: FieldArrayPath<MetricsBallotFormValues>;
  availableMetrics: {
    title: string;
    description: string;
    metricId: string;
  }[];
  submittedBallot?: {
    ballot: BallotFieldValues[];
    submittedAt: string;
  };
  maxAllocation?: number;
  isReady: boolean;
  onSubmit: () => void;
}

export function MetricsBallotController({
  className,
  name,
  submittedBallot,
  availableMetrics,
  maxAllocation = 100,
  isReady,
  onSubmit,
}: MetricsBallotControllerProps) {
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const { control, formState } = useFormContext<MetricsBallotFormValues>();
  const { activeTab, updateActiveTab } = useMetricsBallot(name, DB_NAME, STORE_NAME);

  const { fields, update, remove, append } = useFieldArray<
    MetricsBallotFormValues,
    typeof name,
    "id"
  >({
    control,
    name,
  });

  useEffect(() => {
    if (!submittedBallot || !isReady) return;
    const fieldsAndMetricsSameMetrics = submittedBallot.ballot.every((metric) =>
      fields.some((field) => field.name === metric.name),
    );
    setAlreadyVoted(true);

    if (!fieldsAndMetricsSameMetrics) {
      remove(fields.map((_, index) => index));
      append(submittedBallot.ballot.map((metric) => ({ ...metric, locked: true })));
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Tabs */}
      <div className="flex gap-6">
        <TabButton active={activeTab === "ballot"} onClick={() => updateActiveTab("ballot")}>
          Ballot
        </TabButton>
        <TabButton active={activeTab === "metrics"} onClick={() => updateActiveTab("metrics")}>
          Metrics
        </TabButton>
      </div>
      <AlreadyVotedBadge submittedAt={submittedBallot?.submittedAt} alreadyVoted={alreadyVoted} />

      {/* Tab Content */}
      <div>
        {activeTab === "ballot" ? (
          <BallotTab
            handleSubmit={onSubmit}
            setActiveTab={updateActiveTab}
            fields={fields}
            update={update}
            remove={remove}
            maxAllocation={maxAllocation}
            alreadyVoted={alreadyVoted}
            numberOfMetrics={availableMetrics.length}
            formErrors={formState.errors}
          />
        ) : (
          // "Metrics" tab
          <MetricsTab
            metrics={availableMetrics}
            fields={fields}
            update={update}
            remove={remove}
            maxAllocation={maxAllocation}
            alreadyVoted={alreadyVoted}
          />
        )}
      </div>
    </div>
  );
}
