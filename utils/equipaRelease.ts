/** Publicação da direção: 30 maio 2026, 16:00 (Europe/Lisbon). */
const RELEASE = {
  year: 2026,
  month: 5,
  day: 30,
  hour: 16,
  minute: 0,
  second: 0,
} as const;

function lisbonParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);

  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: value("hour"),
    minute: value("minute"),
    second: value("second"),
  };
}

export function isDirecaoPublished(now: Date = new Date()): boolean {
  const current = lisbonParts(now);
  const keys = ["year", "month", "day", "hour", "minute", "second"] as const;

  for (const key of keys) {
    if (current[key] > RELEASE[key]) return true;
    if (current[key] < RELEASE[key]) return false;
  }
  return true;
}
