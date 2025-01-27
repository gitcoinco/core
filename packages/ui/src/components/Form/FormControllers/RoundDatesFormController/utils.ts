import moment from "moment";

export const timezones = [
  {
    label: `UTC${moment.tz(moment.tz.guess()).format("Z")}`,
    value: moment.tz.guess(),
  },
  { label: "UTC-10", value: "Pacific/Honolulu" },
  { label: "UTC-7", value: "America/Denver" },
  { label: "UTC-5", value: "America/New_York" },
  { label: "UTC-4", value: "America/Halifax" },
  { label: "UTC", value: "UTC" },
  { label: "UTC+1", value: "Europe/London" },
  { label: "UTC+2", value: "Africa/Cairo" },
  { label: "UTC+3", value: "Europe/Moscow" },
  { label: "UTC+5:30", value: "Asia/Kolkata" },
  { label: "UTC+8", value: "Asia/Shanghai" },
];
