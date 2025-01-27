import { useState } from "react";
import { FieldErrors } from "react-hook-form";

import {
  BallotFieldValues,
  MetricsBallotFormValues,
  TabType,
} from "@/features/retrofunding/types/metricsBallot";
import { sortOptions, sortFieldsByOrder } from "@/features/retrofunding/utils/metricsBallot";
import { Button } from "@/primitives";
import { Select } from "@/primitives";

import { BallotItem, EmptyBallot } from ".";

interface BallotTabProps {
  fields: BallotFieldValues[];
  update: (index: number, value: BallotFieldValues) => void;
  remove: (index: number) => void;
  maxAllocation: number;
  setActiveTab: (tab: TabType) => void;
  alreadyVoted: boolean;
  handleSubmit: () => void;
  numberOfMetrics: number;
  formErrors: FieldErrors<MetricsBallotFormValues>;
}

export const BallotTab = ({
  fields,
  update,
  remove,
  maxAllocation,
  setActiveTab,
  alreadyVoted,
  handleSubmit,
  numberOfMetrics,
  formErrors,
}: BallotTabProps) => {
  const [sortOrder, setSortOrder] = useState<string | undefined>();

  const defaultSortOrder = "A-Z";
  const sortedFields = sortFieldsByOrder(fields, sortOrder || defaultSortOrder);

  return (
    <div>
      {sortedFields.length > 0 ? (
        <div className="space-y-6">
          {/* Sort and Count */}
          <div className="space-y-4 rounded-xl border border-grey-300 bg-grey-50 p-10">
            <div className="flex items-center justify-between text-sm text-grey-500">
              <div className="flex flex-col justify-start gap-2">
                <span className="text-lg font-medium text-black">Your Ballot</span>
                <span className="text-sm font-normal text-grey-900">
                  You&apos;ve added {fields.length} of {numberOfMetrics} metrics
                </span>
              </div>
              <Select
                variant="filled"
                className="w-fit px-3 py-2 ring-0 hover:ring-0 focus:outline-none focus:ring-0 active:ring-0"
                options={sortOptions}
                onValueChange={(value) => {
                  setSortOrder(value);
                }}
                defaultValue={defaultSortOrder}
                value={sortOrder}
              />
            </div>

            {/* The ballot items */}
            <div>
              {sortedFields.map((field, idx) => {
                return (
                  <BallotItem
                    key={field.metricId}
                    field={field}
                    idx={idx}
                    fields={fields}
                    update={update}
                    remove={remove}
                    alreadyVoted={alreadyVoted}
                    maxAllocation={maxAllocation}
                  />
                );
              })}
            </div>
            {/* Submit Button */}
            <div className="flex justify-start pt-4">
              <Button
                disabled={alreadyVoted}
                variant="light-purple"
                onClick={handleSubmit}
                value="Submit ballot"
              />
            </div>
            {formErrors && (
              <div className="text-red-500">
                {Object.keys(formErrors).map(
                  (key) => formErrors[key as keyof typeof formErrors]?.message,
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <EmptyBallot setActiveTab={setActiveTab} />
      )}
    </div>
  );
};
