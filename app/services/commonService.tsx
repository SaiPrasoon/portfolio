const shortDateFormatter = (date: Date | undefined) => {
  return date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      })
        .format(date)
        .toString()
    : "";
};

const getExperienceDuration = (
  isCurrent: boolean,
  startDate: Date,
  endDate?: Date
) => {
  let duration: string = shortDateFormatter(startDate);

  if (isCurrent) {
    duration += " - Present";
  } else {
    const formattedEndDate = shortDateFormatter(endDate);
    duration = duration + " - " + formattedEndDate;
  }

  return duration;
};

/** Compact year range for the narrow left rail of a resumé entry: "2024 — 2025". */
const getYearRange = (
  isCurrent: boolean,
  startDate: Date,
  endDate?: Date
) => {
  const start = startDate.getFullYear();
  if (isCurrent) return `${start} — Present`;
  const end = endDate ? endDate.getFullYear() : start;
  return start === end ? `${start}` : `${start} — ${end}`;
};

export { shortDateFormatter, getExperienceDuration, getYearRange };
