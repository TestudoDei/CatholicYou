import { contentEntries, isPubliclyVisible } from "../content/index.ts";
import type { ContentEntry } from "../content/types.ts";

const DATE_KEY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

export function isValidDateKey(value: string): boolean {
  const match = DATE_KEY_PATTERN.exec(value);
  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function getDateKeyInTimeZone(
  now: Date,
  timeZone = "America/New_York",
): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((candidate) => candidate.type === type)?.value;

  return `${part("year")}-${part("month")}-${part("day")}`;
}

export function getObservanceForDate(
  dateKey: string,
  options: { includePrivatePreview?: boolean } = {},
): ContentEntry | undefined {
  if (!isValidDateKey(dateKey)) return undefined;

  const [, year, month, day] = DATE_KEY_PATTERN.exec(dateKey) ?? [];
  const isSunday =
    new Date(Date.UTC(Number(year), Number(month) - 1, Number(day))).getUTCDay() === 0;

  return contentEntries.find(
    (entry) =>
      entry.observance.month === Number(month) &&
      entry.observance.day === Number(day) &&
      !(
        isSunday &&
        entry.kind === "saint" &&
        entry.observance.rank !== "solemnity"
      ) &&
      (options.includePrivatePreview || isPubliclyVisible(entry)),
  );
}
