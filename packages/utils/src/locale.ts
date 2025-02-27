export function formatLocalDate(isoDate: string) {
  const date = new Date(isoDate);

  return date.toLocaleString(undefined, {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
