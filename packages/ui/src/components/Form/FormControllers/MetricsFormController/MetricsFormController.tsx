"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

import {
  MetricCard,
  MetricCardProps,
} from "@/features/retrofunding/components/MetricCard/MetricCard";
import { Button } from "@/primitives/Button";
import { Icon } from "@/primitives/Icon";
import { IconType } from "@/primitives/Icon";

export interface MetricsProps {
  metrics: Omit<MetricCardProps, "variant" | "onClick">[];
}

export interface MetricsFormControllerProps extends MetricsProps {
  name: string;
}
export const MetricsFormController: React.FC<MetricsFormControllerProps> = ({ name, metrics }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const selectedMetrics = value || [];

        const handleToggleMetric = (identifier: string) => {
          const newValue = selectedMetrics.includes(identifier)
            ? selectedMetrics.filter((t: string) => t !== identifier)
            : [...selectedMetrics, identifier];
          onChange(newValue);
        };

        const isMetricSelected = (identifier: string) => selectedMetrics.includes(identifier);

        return (
          <div className="space-y-6">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.identifier}
                {...metric}
                onClick={() => handleToggleMetric(metric.identifier)}
                className="w-full"
                customButton={
                  isMetricSelected(metric.identifier) ? (
                    <Button
                      value={"Added to Round"}
                      onClick={() => handleToggleMetric(metric.identifier)}
                      className="flex items-center gap-2 rounded bg-moss-100 px-4 py-2 text-sm font-medium text-moss-700 hover:bg-moss-50"
                      icon={<Icon className="size-4" type={IconType.CHECK} />}
                    />
                  ) : (
                    <Button
                      value={"Add to Round"}
                      onClick={() => handleToggleMetric(metric.identifier)}
                      variant="light-purple"
                      icon={<Icon className="size-4" type={IconType.CHECK} />}
                    />
                  )
                }
              />
            ))}
            {errors && (
              <div className="text-red-500">
                {Array.isArray(errors) && errors.map((error) => error.message)}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
