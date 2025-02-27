import moment from "moment";

export enum DateFormat {
  FullDate12Hour = "FullDate12Hour",
  FullDate24Hour = "FullDate24Hour",
  ShortMonthDayYear24HourUTC = "ShortMonthDayYear24HourUTC",
  ShortMonthDayYear = "ShortMonthDayYear",
}

export const formatDate = (date: Date, format?: DateFormat): string => {
  const momentDate = moment(date);

  switch (format) {
    case DateFormat.FullDate24Hour:
      return momentDate.format("D MMMM YYYY HH:mm");
    case DateFormat.ShortMonthDayYear24HourUTC:
      return momentDate.utc().format("D/M/YYYY HH:mm") + " UTC";
    case DateFormat.FullDate12Hour:
      return momentDate.format("D MMMM YYYY hh:mm A");
    case DateFormat.ShortMonthDayYear:
      return momentDate.format("D MMM YYYY");
    default:
      return momentDate.format("D/M/YYYY");
  }
};
