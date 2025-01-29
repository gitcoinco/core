"use client";

import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";

import moment from "moment-timezone";

import { Checkbox } from "@/primitives/Checkbox";
import { Label } from "@/ui-shadcn/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/ui-shadcn/select";

import { SelectedDateRenderer } from "./SelectedDateRenderer";
import { TimelineRow } from "./TimelineRow";
import { timezones } from "./utils";

export const RoundDatesFormController: React.FC = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const timezone = watch("roundDates.timezone");
  const roundHasNoEndDate = watch("roundDates.round.noEndDate");
  const applicationsStart = watch("roundDates.applications.start");
  const applicationsEnd = watch("roundDates.applications.end");
  const roundStart = watch("roundDates.round.start");
  const roundEnd = watch("roundDates.round.end");

  // When timezone is changed, we need to update the dates to match the new timezone
  React.useEffect(() => {
    const timezone = watch("roundDates.timezone");
    if (timezone) {
      if (applicationsStart) {
        setValue("roundDates.applications.start", moment.tz(applicationsStart, timezone).format());
      }
      if (applicationsEnd) {
        setValue("roundDates.applications.end", moment.tz(applicationsEnd, timezone).format());
      }
      if (roundStart) {
        setValue("roundDates.round.start", moment.tz(roundStart, timezone).format());
      }
      if (roundEnd) {
        setValue("roundDates.round.end", moment.tz(roundEnd, timezone).format());
      }
    }
  }, [timezone]);

  const isSelected = (v?: string) => Boolean(v && v.trim() !== "");
  const applicationsLineColor = isSelected(applicationsEnd) ? "bg-grey-300" : "bg-grey-100";
  const roundLineColor = isSelected(roundEnd) || roundHasNoEndDate ? "bg-grey-300" : "bg-grey-100";

  const formErrors = errors.roundDates as {
    timezone?: { message: string };
    applications?: { start?: { message: string }; end?: { message: string } };
    round?: { start?: { message: string }; end?: { message: string } };
  };

  // Get error states from nested fields
  const timezoneError = formErrors?.timezone?.message;
  const appStartError = formErrors?.applications?.start?.message;
  const appEndError = formErrors?.applications?.end?.message;
  const roundStartError = formErrors?.round?.start?.message;
  const roundEndError = formErrors?.round?.end?.message;

  // Collect all errors for bottom display
  const allErrors = [
    { field: "Timezone", message: timezoneError },
    { field: "Applications start", message: appStartError },
    { field: "Applications end", message: appEndError },
    { field: "Round start", message: roundStartError },
    { field: "Round end", message: roundEndError },
  ].filter((error) => error.message);

  return (
    <div className="flex flex-col gap-6">
      <div className="max-w-sm">
        <Controller
          name="roundDates.timezone"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <Label className="ml-1 text-sm font-normal">Select timezone</Label>
              <SelectTrigger
                id="roundDates.timezone"
                className={`w-40 ${timezoneError ? "border-red-500" : ""}`}
              >
                {field.value
                  ? timezones.find((tz) => tz.value === field.value)?.label
                  : "Select timezone"}
              </SelectTrigger>
              <SelectContent className="w-40">
                {timezones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-6">
        <TimelineRow
          label="Applications start"
          isSelected={isSelected(applicationsStart)}
          lineColor={applicationsLineColor}
          lineHeight="h-[75px]"
          showLine
          error={appStartError}
        >
          <Controller
            name="roundDates.applications.start"
            control={control}
            render={({ field }) => (
              <SelectedDateRenderer
                id="roundDates.applications.start"
                dateValue={field.value || ""}
                onChange={(val) => {
                  /*
                   * 1) Interpret the user’s typed local time (val) in
                   *    the currently selected timezone.
                   * 2) Store it as an ISO-like string with offset for that timezone.
                   *    (e.g. "2025-01-04T15:00:00-05:00").
                   */
                  const tzToUse = timezone || moment.tz.guess();
                  const dt = moment.tz(val, "YYYY-MM-DDTHH:mm", tzToUse).format(); // => "YYYY-MM-DDTHH:mm:ssZ"
                  field.onChange(dt);
                }}
                displayTimezone={timezone}
                error={appStartError}
              />
            )}
          />
        </TimelineRow>

        <TimelineRow
          label="Applications end"
          isSelected={isSelected(applicationsEnd)}
          showLine={false}
          error={appEndError}
        >
          <Controller
            name="roundDates.applications.end"
            control={control}
            render={({ field }) => (
              <SelectedDateRenderer
                id="roundDates.applications.end"
                dateValue={field.value || ""}
                onChange={(val) => {
                  const tzToUse = timezone || moment.tz.guess();
                  const dt = moment.tz(val, "YYYY-MM-DDTHH:mm", tzToUse).format();
                  field.onChange(dt);
                }}
                min={applicationsStart || ""}
                displayTimezone={timezone}
                error={appEndError}
              />
            )}
          />
        </TimelineRow>
      </div>

      <div className="flex flex-col gap-6">
        <TimelineRow
          label="Round starts"
          isSelected={isSelected(roundStart)}
          lineColor={roundLineColor}
          showLine
          lineHeight="h-[104px]"
          error={roundStartError}
        >
          <div className="flex flex-col gap-2 ">
            <Controller
              name="roundDates.round.start"
              control={control}
              render={({ field }) => (
                <SelectedDateRenderer
                  id="roundDates.round.start"
                  dateValue={field.value || ""}
                  onChange={(val) => {
                    const tzToUse = timezone || moment.tz.guess();
                    const dt = moment.tz(val, "YYYY-MM-DDTHH:mm", tzToUse).format();
                    field.onChange(dt);
                  }}
                  displayTimezone={timezone}
                  error={roundStartError}
                />
              )}
            />
            <div className="flex items-center gap-2">
              <Controller
                name="roundDates.round.noEndDate"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("roundDates.round.end", "");
                      }
                      field.onChange(checked);
                    }}
                  />
                )}
              />
              <Label className="text-sm font-normal">This round does not have an end date</Label>
            </div>
          </div>
        </TimelineRow>

        <TimelineRow
          label="Round ends"
          isSelected={isSelected(roundEnd) || roundHasNoEndDate}
          showLine={false}
          error={roundEndError}
        >
          <Controller
            name="roundDates.round.end"
            control={control}
            render={({ field }) => (
              <SelectedDateRenderer
                id="roundDates.round.end"
                dateValue={field.value || ""}
                onChange={(val) => {
                  const tzToUse = timezone || moment.tz.guess();
                  const dt = moment.tz(val, "YYYY-MM-DDTHH:mm", tzToUse).format();
                  field.onChange(dt);
                }}
                disabled={roundHasNoEndDate}
                min={roundStart || ""}
                displayTimezone={timezone}
                error={roundEndError}
              />
            )}
          />
        </TimelineRow>
      </div>

      {/* Error messages section */}
      {allErrors.length > 0 && (
        <div className="mt-4 rounded-md border border-red-300 bg-red-50 p-4">
          <div className="flex flex-col gap-2">
            {allErrors.map((error, index) => (
              <div key={index} className="flex items-start gap-2 text-sm ">
                <span className="font-medium">{error.field}:</span>
                <span>{error.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
