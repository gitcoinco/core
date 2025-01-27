"use client";

import { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { useMetricsBallot } from "@/features/retrofunding/hooks/useMetricsBallot";
import {
  MetricsBallotFormValues,
  MetricsBallotControllerProps,
  DB_NAME,
  STORE_NAME,
} from "@/features/retrofunding/types/metricsBallot";

import { MetricsTab, TabButton, BallotTab, AlreadyVotedBadge } from "..";

export function MetricsBallotController({
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
    <div className="flex flex-col gap-6">
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
