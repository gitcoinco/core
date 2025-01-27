import * as React from "react";
import { DayPicker } from "react-day-picker";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/primitives/Button/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outlined-primary" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          "absolute left-1",
        ),
        button_next: cn(
          buttonVariants({ variant: "outlined-primary" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          "absolute right-1",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-grey-900 rounded-md w-9 font-normal text-[0.8rem] dark:text-grey-500",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-grey-100/50 [&:has([aria-selected])]:bg-grey-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-black/50 dark:[&:has([aria-selected])]:bg-black",
        day_button: cn(
          buttonVariants({ variant: "outlined-secondary" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        range_end: "day-range-end",
        selected:
          "bg-black text-grey-50 hover:bg-black hover:text-grey-50 focus:bg-black focus:text-grey-50 dark:bg-grey-50 dark:text-black dark:hover:bg-grey-50 dark:hover:text-black dark:focus:bg-grey-50 dark:focus:text-black",
        today: "bg-grey-100 text-black dark:bg-black dark:text-grey-50",
        outside:
          "day-outside text-grey-900 opacity-50 aria-selected:bg-grey-100/50 aria-selected:text-grey-900 aria-selected:opacity-30 dark:text-grey-500 dark:aria-selected:bg-black/50 dark:aria-selected:text-grey-500",
        disabled: "text-grey-900 opacity-50 dark:text-grey-500",
        range_middle:
          "aria-selected:bg-grey-100 aria-selected:text-black dark:aria-selected:bg-black dark:aria-selected:text-grey-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) =>
          props.orientation === "left" ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
