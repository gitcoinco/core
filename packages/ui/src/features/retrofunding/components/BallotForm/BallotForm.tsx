"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { cn } from "@gitcoin/utils";
import { debounce } from "lodash";

import { sortFieldsByOrder } from "@/features/retrofunding/utils/metricsBallot";
import { useIndexedDB } from "@/hooks/useIndexedDB";
import { Button } from "@/primitives";

import { AlreadyVotedBadge, BallotHeader, BallotItem } from "./components";
import { BallotValues } from "./types";

const ERROR_MESSAGE = (maxAllocation: number) => `Total must equal ${maxAllocation}%`;
const DB_NAME = "ballotDB";
const STORE_NAME = "ballot";
const DEFAULT_SORT_ORDER = "A-Z";

type BallotItemsMap = Record<string, BallotValues>;

interface BallotFormProps {
  className?: string;
  name: string;
  availableMetrics: {
    title: string;
    description: string;
    metricId: string;
  }[];
  submittedBallot?: {
    ballot: BallotValues[];
    submittedAt: string;
  };
  maxAllocation?: number;
  onSubmit: (values: BallotValues[]) => void;
  onChange?: (values: BallotValues[]) => void;
  onShare?: () => void;
}

const getTotalAllocation = (items: BallotItemsMap) =>
  Object.values(items).reduce((sum, { amount }) => sum + (amount ?? 0), 0);

const checkTotalAllocation = (items: BallotItemsMap, max: number) => {
  const total = getTotalAllocation(items);
  return total === max;
};

export const BallotForm: React.FC<BallotFormProps> = ({
  className,
  name: persistKey,
  availableMetrics,
  submittedBallot,
  maxAllocation = 100,
  onSubmit,
  onChange,
  onShare,
}) => {
  const { getValue, setValue, isReady } = useIndexedDB({
    dbName: DB_NAME,
    storeName: STORE_NAME,
  });
  const [items, setItems] = useState<BallotItemsMap>({});
  const [sortOrder, setSortOrder] = useState<string | undefined>();
  const [formError, setFormError] = useState<string | null>(null);
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const itemsArray = Object.values(items);

  useEffect(() => {
    if (isReady) {
      if (submittedBallot?.submittedAt) {
        const submittedItems = submittedBallot.ballot.reduce(
          (acc, item) => ({
            ...acc,
            [item.metricId]: { ...item, locked: true },
          }),
          {} as BallotItemsMap,
        );
        setItems(submittedItems);
        if (onChange) {
          onChange(Object.values(submittedItems));
        }
        setAlreadyVoted(true);
        return;
      }

      getValue<BallotItemsMap>(persistKey).then((savedItems) => {
        if (savedItems) {
          setItems(savedItems);
          if (onChange) {
            onChange(Object.values(savedItems));
          }
        } else {
          const equalShare = Math.floor(maxAllocation / availableMetrics.length);
          const remainder = maxAllocation % availableMetrics.length;

          const initialItems = availableMetrics.reduce(
            (acc, metric, index) => ({
              ...acc,
              [metric.metricId]: {
                metricId: metric.metricId,
                name: metric.title,
                amount: equalShare + (index === 0 ? remainder : 0),
                locked: false,
              },
            }),
            {} as BallotItemsMap,
          );
          setItems(initialItems);
          setValue(persistKey, initialItems);
          if (onChange) {
            onChange(Object.values(initialItems));
          }
        }
      });
    }
  }, [isReady, persistKey, getValue, availableMetrics, submittedBallot, maxAllocation]);

  const debouncedOnChange = useMemo(
    () =>
      debounce((values: BallotValues[]) => {
        onChange?.(values);
      }, 300),
    [onChange],
  );

  const handleChange = useCallback(
    (metricId: string, value: BallotValues) => {
      const newItems = {
        ...items,
        [metricId]: {
          ...value,
          amount: value.amount ?? 0,
          locked: value.locked ?? false,
        },
      };
      if (checkTotalAllocation(newItems, maxAllocation)) {
        setFormError(null);
      }

      setItems(newItems);
      setValue(persistKey, newItems);
      debouncedOnChange(Object.values(newItems));
    },
    [items, persistKey, setValue, debouncedOnChange],
  );

  const handleSubmit = useCallback(() => {
    if (checkTotalAllocation(items, maxAllocation)) {
      setFormError(null);
      onSubmit(itemsArray);
    } else {
      setFormError(ERROR_MESSAGE(maxAllocation));
    }
  }, [items, maxAllocation, onSubmit]);

  const isAllowed = useCallback(
    (metricId: string, amount: number) => {
      if (amount < 0) return false;
      const currentAmount = items[metricId]?.amount ?? 0;
      const otherTotal = getTotalAllocation(items) - currentAmount;
      return otherTotal + amount <= maxAllocation;
    },
    [items, maxAllocation],
  );

  const metricsById = useMemo(
    () =>
      availableMetrics.reduce(
        (acc, metric) => {
          acc[metric.metricId] = metric;
          return acc;
        },
        {} as Record<string, { title: string; description: string; metricId: string }>,
      ),
    [availableMetrics],
  );

  const sortedFields = useMemo(
    () => sortFieldsByOrder(itemsArray, sortOrder || DEFAULT_SORT_ORDER),
    [itemsArray, sortOrder],
  );

  const sumOfAllocations = useMemo(() => {
    return getTotalAllocation(items);
  }, [items]);

  if (!isReady) return null;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <AlreadyVotedBadge submittedAt={submittedBallot?.submittedAt} onShare={onShare} />
      <div className="w-[720px] space-y-4 rounded-xl border border-grey-300 bg-grey-50 p-10">
        <BallotHeader
          sortOrder={sortOrder ?? DEFAULT_SORT_ORDER}
          setSortOrder={setSortOrder}
          sumOfAllocations={sumOfAllocations}
        />
        <div>
          {sortedFields.map((item, idx) => {
            const { metricId } = item;
            return (
              <BallotItem
                key={metricId}
                className={idx === 0 ? "border-y" : "border-b"}
                metric={metricsById[metricId]}
                item={item}
                onChange={handleChange}
                disabled={alreadyVoted}
                isAllowed={isAllowed}
              />
            );
          })}
        </div>
        <div className="flex justify-start pt-4">
          <Button
            disabled={alreadyVoted}
            variant="light-purple"
            onClick={handleSubmit}
            value="Submit ballot"
          />
        </div>
        {formError && <div className="text-red-500">{formError}</div>}
      </div>
    </div>
  );
};
