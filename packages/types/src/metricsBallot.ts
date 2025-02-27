import { z } from "zod";

export interface BallotFieldValues {
  metricId: string;
  name: string;
  amount?: number;
  locked?: boolean;
}

export type MetricsBallotFormValues = Record<string, BallotFieldValues[]>;

export type TabType = "ballot" | "metrics";

export const getBallotSchema = (name: string) =>
  z.object({
    [name]: z
      .array(
        z.object({
          metricId: z.string(),
          amount: z.number(),
          locked: z.boolean(),
          name: z.string(),
          id: z.string().optional(),
        }),
      )
      .min(1, "You must select at least one metric")
      .refine((data) => data.length > 0, {
        message: "You must select at least one metric",
      })
      .refine(
        (data) => {
          const sum = data.reduce((acc, item) => acc + item.amount, 0);
          return sum === 100;
        },
        {
          message: "The sum of all allocations must equal 100",
        },
      ),
  });

export const DB_NAME = "metricsBallotDB";
export const STORE_NAME = "metricsBallot";
