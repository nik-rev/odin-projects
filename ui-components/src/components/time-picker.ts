import React from "react";

export type TimeOption = {
  hour: number;
  minute: number;
  value: string;
  id: string;
};

export function useTimePicker({
  minutesPerInterval,
}: {
  minutesPerInterval: 15 | 30;
}): TimeOption[] {
  return React.useMemo(() => {
    const HOURS_IN_DAY = 24;
    const MINUTES_IN_HOUR = 60;

    const allHours = Array.from(
      { length: HOURS_IN_DAY },
      (_, militaryHour) => ({
        militaryHour,
      }),
    );

    return allHours.flatMap(({ militaryHour }) => {
      const minuteIntervals = Array.from(
        { length: MINUTES_IN_HOUR / minutesPerInterval },
        (_, index) => index * minutesPerInterval,
      );

      const meridiem = militaryHour < 12 ? "AM" : "PM";
      const civilianHour =
        militaryHour === 0
          ? 12
          : militaryHour > 12
            ? militaryHour - 12
            : militaryHour;

      return minuteIntervals.map((minutes) => {
        const formattedMinutes = minutes < 10 ? `${minutes}0` : minutes;
        const formattedTime = `${civilianHour}:${formattedMinutes} ${meridiem}`;

        return {
          hour: militaryHour,
          minute: minutes,
          value: formattedTime,
          id: formattedTime,
        };
      });
    });
  }, [minutesPerInterval]);
}

export function getRoundMinute({
  intervalInMinute,
  minute,
}: {
  intervalInMinute: number;
  minute: number;
}) {
  const closeMinute = Array.from({ length: 60 / intervalInMinute + 1 })
    .fill(0)
    .map((_, i) => intervalInMinute * i)
    .find((i) => i > minute);

  return closeMinute ? closeMinute - minute : 0;
}
