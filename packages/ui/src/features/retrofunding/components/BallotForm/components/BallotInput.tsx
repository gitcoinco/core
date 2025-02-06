import React, { useCallback, useEffect, useRef } from "react";
import { NumericFormat } from "react-number-format";

import { LockClosedIcon, LockOpenIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid";

import { cn } from "@/lib/utils";

import { BallotValues } from "../types";

interface BallotInputProps {
  item: BallotValues;
  disabled: boolean;
  onChange: (metricId: string, value: BallotValues) => void;
  isAllowed: (metricId: string, amount: number) => boolean;
}

export const BallotInput = ({ item, disabled, onChange, isAllowed }: BallotInputProps) => {
  const { amount = 0, locked = false } = item;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      if (disabled || locked) return;
      const delta = e.deltaY < 0 ? 1 : -1;
      const nextVal = amount + delta;
      if (isAllowed(item.metricId, nextVal)) {
        onChange(item.metricId, { ...item, amount: nextVal });
      }
    },
    [disabled, locked, amount, item, onChange, isAllowed],
  );

  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener("wheel", handleWheel, { passive: false });
    return () => input?.removeEventListener("wheel", handleWheel);
  }, [handleWheel, inputRef.current]);

  const toogleLock = useCallback(() => {
    onChange(item.metricId, { ...item, locked: !locked });
  }, [item, onChange]);

  const handleDecrease = useCallback(() => {
    onChange(item.metricId, { ...item, amount: amount - 1 });
  }, [item, onChange]);

  const handleIncrease = useCallback(() => {
    onChange(item.metricId, { ...item, amount: amount + 1 });
  }, [item, onChange]);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center p-4">
        <button disabled={disabled} onClick={toogleLock}>
          {locked ? (
            <LockClosedIcon
              className={cn(
                "size-4 cursor-pointer text-grey-900",
                disabled ? "cursor-not-allowed text-grey-500" : "",
              )}
            />
          ) : (
            <LockOpenIcon
              className={cn(
                "size-4 cursor-pointer text-grey-900",
                disabled ? "cursor-not-allowed text-grey-500" : "",
              )}
            />
          )}
        </button>
      </div>

      <div className="flex h-11 items-center gap-1 rounded-md border border-grey-300 bg-white p-1">
        <button
          disabled={disabled || locked || !isAllowed(item.metricId, amount - 1)}
          className="flex size-9 items-center rounded-md px-3 py-1.5 hover:bg-grey-100"
          onClick={handleDecrease}
        >
          <MinusIcon
            aria-hidden={true}
            className={cn(
              "size-3.5 cursor-pointer outline-none",
              locked || !isAllowed(item.metricId, amount - 1)
                ? "cursor-not-allowed text-grey-500"
                : "text-black",
            )}
          />
        </button>
        <NumericFormat
          getInputRef={inputRef}
          className="h-7 w-10 text-center text-p font-normal outline-none"
          suffix="%"
          allowNegative={false}
          allowLeadingZeros={false}
          disabled={disabled}
          decimalScale={0}
          isAllowed={(values) => {
            if (disabled || locked) return false;
            if (!values.value) return true;

            const val = values?.floatValue ?? 0;
            return isAllowed(item.metricId, val);
          }}
          value={amount}
          onValueChange={(values, sourceInfo) => {
            if (sourceInfo.source !== "event") return;
            onChange(item.metricId, { ...item, amount: values?.floatValue ?? 0 });
          }}
        />
        <button
          disabled={disabled || locked || !isAllowed(item.metricId, amount + 1)}
          className="flex size-9 items-center rounded-md px-3 py-1.5 hover:bg-grey-100"
          onClick={handleIncrease}
        >
          <PlusIcon
            aria-hidden={true}
            className={cn(
              "size-3.5 cursor-pointer outline-none",
              locked || !isAllowed(item.metricId, amount + 1)
                ? "cursor-not-allowed text-grey-500"
                : "text-black",
            )}
          />
        </button>
      </div>
    </div>
  );
};
