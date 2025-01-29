"use client";

import * as React from "react";

import moment from "moment-timezone";

import { IconType, Icon } from "@/primitives/Icon";

interface SelectedDateRendererProps {
  id: string;
  dateValue: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  min?: string;
  displayTimezone?: string;
  error?: string;
}

export const SelectedDateRenderer: React.FC<SelectedDateRendererProps> = ({
  id,
  dateValue,
  onChange,
  disabled,
  min,
  displayTimezone,
  error,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      if (inputRef.current?.showPicker) {
        inputRef.current.showPicker();
      } else {
        inputRef.current?.click();
      }
    }
  };

  /**
   * How we display the user-chosen time:
   * - We parse the stored string (which includes its offset).
   * - Then we call `.tz(currentTimeZone, true)` so the local hour doesn't shift
   *   if the user toggles to a new timezone in the form.
   * - Finally, we show it in the "YYYY-MM-DDTHH:mm" format for <input>.
   */
  const inputValue = React.useMemo(() => {
    if (!dateValue) return "";
    const tzToUse = displayTimezone || moment.tz.guess();
    // parse the stored date (which might have offset),
    // then .tz(tzToUse, true) => re-interpret the same "local hour" in the new TZ
    const dt = moment(dateValue).tz(tzToUse, true);
    return dt.format("YYYY-MM-DDTHH:mm");
  }, [dateValue, displayTimezone]);

  /**
   * For the textual label, e.g. "January 04, 2025 - 15:00 PST"
   */
  const displayText = React.useMemo(() => {
    if (!dateValue) return "Select date and time";
    const tzToUse = displayTimezone || moment.tz.guess();
    const dt = moment(dateValue).tz(tzToUse, true);
    return dt.format("MMMM DD, YYYY - HH:mm z");
  }, [dateValue, displayTimezone]);

  return (
    <div>
      <input
        ref={inputRef}
        id={id}
        type="datetime-local"
        value={inputValue}
        disabled={disabled}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="hidden"
      />
      <div
        className={`
            flex w-[250px] items-center gap-2 rounded-md border bg-white p-2 text-sm
            ${error ? "border-red-500" : "border-grey-300"}
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-grey-50"}
          `}
        onClick={handleClick}
      >
        <Icon
          type={IconType.CALENDAR}
          className={error ? "size-4 text-red-500" : "size-4 text-black"}
        />
        <span className="text-sm font-normal">{displayText}</span>
      </div>
    </div>
  );
};
