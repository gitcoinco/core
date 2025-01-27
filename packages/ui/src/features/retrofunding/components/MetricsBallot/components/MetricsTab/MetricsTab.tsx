import { MetricCard } from "@/features/retrofunding/components/MetricCard";
import { BallotFieldValues } from "@/features/retrofunding/types/metricsBallot";
import {
  handleMetricToggle,
  isMetricLocked,
  isMetricAdded,
} from "@/features/retrofunding/utils/metricsBallot";

import { MetricButton } from ".";

interface MetricsTabProps {
  metrics: { title: string; description: string; metricId: string }[];
  fields: BallotFieldValues[];
  maxAllocation: number;
  alreadyVoted: boolean;
  update: (index: number, value: BallotFieldValues) => void;
  remove: (index: number) => void;
}

export const MetricsTab = ({
  metrics,
  fields,
  maxAllocation,
  alreadyVoted,
  update,
  remove,
}: MetricsTabProps) => {
  return (
    <div className="space-y-4">
      {metrics.map((metric) => {
        const isAdded = isMetricAdded(metric.metricId, fields);
        const isLocked = isMetricLocked(metric.metricId, fields);
        return (
          <MetricCard
            key={metric.metricId}
            identifier={metric.metricId}
            isAdded={isAdded}
            title={metric.title}
            onClick={() => handleMetricToggle(metric, fields, update, remove, maxAllocation)}
            onReadMore={() => void 0}
            className="w-full"
            description={metric.description}
            customButton={
              <MetricButton
                isAdded={isAdded}
                isLocked={isLocked}
                onClick={() => {
                  if (alreadyVoted) return;
                  handleMetricToggle(metric, fields, update, remove, maxAllocation);
                }}
                alreadyVoted={alreadyVoted}
              />
            }
          />
        );
      })}
    </div>
  );
};
