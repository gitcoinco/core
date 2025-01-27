import { NumericFormat } from "react-number-format";

import {
  LockClosedIcon,
  LockOpenIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
} from "@heroicons/react/solid";

import { BallotFieldValues } from "@/features/retrofunding/types/metricsBallot";
import {
  getTotalAllocation,
  handleDecrease,
  handleIncrease,
  handleRemove,
  handleSetAmount,
  toggleLock,
} from "@/features/retrofunding/utils/metricsBallot";
import { cn } from "@/lib/utils";

interface BallotItemProps {
  field: BallotFieldValues;
  idx: number;
  fields: BallotFieldValues[];
  alreadyVoted: boolean;
  maxAllocation: number;
  update: (index: number, value: BallotFieldValues) => void;
  remove: (index: number) => void;
}

export const BallotItem = ({
  field,
  idx,
  fields,
  alreadyVoted,
  maxAllocation,
  update,
  remove,
}: BallotItemProps) => {
  // We need the "real" index in `fields` for updates
  const realIndex = fields.findIndex((f) => f.metricId === field.metricId);
  const { amount = 0, locked = false, name } = field;
  return (
    <div
      key={field.metricId}
      className={cn(
        "flex items-center justify-between border-grey-300 py-4",
        idx === 0 ? "border-y" : "border-b",
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-base font-normal">{name}</h3>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center p-4">
          {locked ? (
            <LockClosedIcon
              className={cn(
                "size-4 cursor-pointer text-grey-900",
                alreadyVoted ? "cursor-not-allowed text-grey-500" : "",
              )}
              onClick={() => {
                if (alreadyVoted) return;
                toggleLock(realIndex, fields, update);
              }}
            />
          ) : (
            <LockOpenIcon
              className={cn(
                "size-4 cursor-pointer text-grey-900",
                alreadyVoted ? "cursor-not-allowed text-grey-500" : "",
              )}
              onClick={() => {
                if (alreadyVoted) return;
                toggleLock(realIndex, fields, update);
              }}
            />
          )}
        </div>

        {/* Amount Control */}
        <div className="flex h-11 items-center gap-1 rounded-md border border-grey-300 bg-white p-1">
          <div
            className="flex size-9 items-center rounded-md px-3 py-1.5 hover:bg-grey-100"
            onClick={() => {
              if (alreadyVoted) return;
              handleDecrease(realIndex, fields, update);
            }}
          >
            <MinusIcon
              aria-hidden={true}
              className={cn(
                "size-3.5 cursor-pointer outline-none",
                locked || amount <= 0 ? "cursor-not-allowed text-grey-500" : "text-black",
              )}
            />
          </div>
          <NumericFormat
            suffix="%"
            allowNegative={false}
            allowLeadingZeros={false}
            decimalScale={0}
            isAllowed={(values) => {
              if (alreadyVoted) return false;
              const val = values?.floatValue ?? 0;
              const otherTotal = getTotalAllocation(fields) - amount;
              return otherTotal + val <= maxAllocation;
            }}
            customInput={(p: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input
                disabled={alreadyVoted}
                className="h-7 w-10 text-center text-p font-normal outline-none "
                onWheel={(e) => {
                  if (alreadyVoted) return;
                  const delta = e.deltaY < 0 ? 1 : -1;
                  const currentVal = p.value ? parseInt(p.value.toString(), 10) : 0;
                  const nextVal = currentVal + delta;
                  if (nextVal >= 0) {
                    handleSetAmount(realIndex, fields, update, maxAllocation, nextVal);
                  }
                }}
                {...p}
              />
            )}
            value={amount}
            onValueChange={(values) => {
              handleSetAmount(realIndex, fields, update, maxAllocation, values?.floatValue ?? 0);
            }}
          />
          <div
            className="flex size-9 items-center rounded-md px-3 py-1.5 hover:bg-grey-100"
            onClick={() => {
              if (alreadyVoted) return;
              handleIncrease(realIndex, fields, update, maxAllocation);
            }}
          >
            <PlusIcon
              aria-hidden={true}
              className={cn(
                "size-3.5 cursor-pointer outline-none",
                locked || getTotalAllocation(fields) >= maxAllocation
                  ? "cursor-not-allowed text-grey-500"
                  : "text-black",
              )}
            />
          </div>
        </div>
        <div className="flex items-center p-4">
          <TrashIcon
            className={cn(
              "size-4 cursor-pointer outline-none",
              locked || alreadyVoted ? "cursor-not-allowed text-grey-500" : "text-grey-900",
            )}
            onClick={() => {
              if (alreadyVoted) return;
              handleRemove(realIndex, fields, update, remove, maxAllocation);
            }}
          />
        </div>
      </div>
    </div>
  );
};
