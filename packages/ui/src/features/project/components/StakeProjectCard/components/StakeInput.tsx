"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

interface StakeInputProps {
  project: { id: string };
  tokenUsdValue: number;
  maxAmount: number;
  stakeAmount: number;
  onChange: (id: string, value: number) => void;
}

export const StakeInput = ({
  onChange,
  project,
  maxAmount,
  tokenUsdValue,
  stakeAmount,
}: StakeInputProps) => {
  const [value, setValue] = useState(stakeAmount);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Immediate value clamping with cleanup
  const handleValueChange = useCallback(
    (rawValue: number) => {
      const clampedValue = Math.min(Math.max(rawValue, 0), maxAmount);
      setValue(clampedValue);
      onChange(project.id, clampedValue);
    },
    [maxAmount, onChange, project.id],
  );

  // Proper wheel handling with clamping
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1 : -1;
      const newValue = Math.min(Math.max(value + delta, 0), maxAmount);
      handleValueChange(newValue);
    },
    [value, maxAmount, handleValueChange],
  );

  // Sync with external max changes
  useEffect(() => {
    if (value > maxAmount) {
      handleValueChange(maxAmount);
    }
  }, [maxAmount, value, handleValueChange]);

  // Sync with external stake amount changes
  useEffect(() => {
    setValue(stakeAmount);
  }, [stakeAmount]);

  useEffect(() => {
    const input = inputRef.current;
    if (!isFocused) return;
    input?.addEventListener("wheel", handleWheel, { passive: false });
    return () => input?.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div className="flex items-center justify-between">
      <NumericFormat
        getInputRef={inputRef}
        value={Number(value.toFixed(5))}
        onValueChange={({ floatValue = 0 }) => handleValueChange(floatValue)}
        isAllowed={({ floatValue = 0 }) => floatValue >= 0 && floatValue <= maxAmount}
        onWheel={(e: React.WheelEvent<HTMLInputElement>) => {
          if (!isFocused) return;
          e.preventDefault();
          const stepSize = Math.floor((maxAmount / 10) * 100000) / 100000; // 5 decimal precision
          const delta = e.deltaY < 0 ? stepSize : -stepSize;
          const newValue = Math.min(Math.max(value + delta, 0), maxAmount);
          handleValueChange(newValue);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        allowNegative={false}
        decimalScale={100}
        max={maxAmount}
        className="h-9 w-44 rounded-sm p-3 text-start text-p font-normal outline-none"
      />
      <span className="min-w-20 shrink-0 text-right font-ui-sans text-sm font-normal text-grey-500">
        ~{Number((tokenUsdValue * value).toFixed(2))} USD
      </span>
    </div>
  );
};
