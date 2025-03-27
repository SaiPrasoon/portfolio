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

export { shortDateFormatter, getExperienceDuration };
