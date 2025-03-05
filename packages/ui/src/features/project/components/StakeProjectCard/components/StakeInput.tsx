"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

interface StakeInputProps {
  project: {
    id: string;
  };
  tokenUsdValue: number;
  maxAmount: number;
  onChange: (id: string, value: number) => void;
}

export const StakeInput = ({ onChange, project, maxAmount, tokenUsdValue }: StakeInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1 : -1;
      const nextVal = Math.max(0, value + delta); // Prevent negative values

      if (nextVal >= 0 && nextVal <= maxAmount) {
        onChange(project.id, nextVal);
        setValue(nextVal);
      }
    },
    [onChange, project.id, value, maxAmount],
  );

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener("wheel", handleWheel, { passive: false });
      return () => input.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  return (
    <div className="flex items-center justify-between">
      <NumericFormat
        getInputRef={inputRef}
        className="h-9 w-44 rounded-sm p-3 text-start text-p font-normal outline-none"
        allowNegative={false}
        allowLeadingZeros={false}
        decimalScale={0}
        isAllowed={(values) => {
          if (!values.value) return true;
          const val = values?.floatValue ?? 0;
          return val  <= maxAmount;
        }}
        value={value}
        onValueChange={(values, sourceInfo) => {
          if (sourceInfo.source !== "event") return;
          setValue(values?.floatValue ?? 0);
          onChange(project.id, values?.floatValue ?? 0);
        }}
      />
      <span className="min-w-20 shrink-0 text-right font-ui-sans text-sm font-normal text-grey-500">
        ~{Math.round(tokenUsdValue * value)} usd
      </span>
    </div>
  );
};
