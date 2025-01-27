import { z } from "zod";

export interface RoundDatesData {
  timezone: string;
  round: {
    start: string;
    end?: string;
    noEndDate: boolean;
  };
  applications: {
    start: string;
    end: string;
  };
}

export const getRoundDatesSchema = () => {
  return z
    .object({
      timezone: z.string(),
      round: z.object({
        start: z.string(),
        end: z.string().optional(),
        noEndDate: z.boolean(),
      }),
      applications: z.object({
        start: z.string(),
        end: z.string(),
      }),
    })
    .superRefine(validateRoundDates);
};

export const validateRoundDates = (data: RoundDatesData, ctx: z.RefinementCtx) => {
  const roundStart = new Date(data.round.start);
  const roundEnd = data.round.end ? new Date(data.round.end) : null;
  const appStart = new Date(data.applications.start);
  const appEnd = new Date(data.applications.end);

  // Validate round start and end dates
  if (isNaN(roundStart.getTime())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Round start date must be valid",
      path: ["round", "start"],
    });
  }

  if (!data.round.noEndDate && (!roundEnd || isNaN(roundEnd.getTime()))) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Round end date must be valid if noEndDate is not checked",
      path: ["round", "end"],
    });
  }

  if (!data.round.noEndDate && roundEnd && roundStart >= roundEnd) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Round end date must be after the start date",
      path: ["round", "end"],
    });
  }

  // Validate application start and end dates
  if (isNaN(appStart.getTime())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Application start date must be valid",
      path: ["applications", "start"],
    });
  }

  if (isNaN(appEnd.getTime())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Application end date must be valid",
      path: ["applications", "end"],
    });
  }

  if (appStart && appEnd && appStart >= appEnd) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Application end date must be after the start date",
      path: ["applications", "end"],
    });
  }

  // Ensure application dates are before round dates
  if (roundStart && appStart && appStart > roundStart) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Application start date must not be after the round start date",
      path: ["applications", "start"],
    });
  }

  if (!data.round.noEndDate && roundEnd && appEnd && appEnd > roundEnd) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Application end date must not be after the round end date",
      path: ["applications", "end"],
    });
  }
};
