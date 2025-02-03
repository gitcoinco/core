export function stringToBlobUrl(data: string): string {
  const blob = new Blob([data], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  return url;
}
