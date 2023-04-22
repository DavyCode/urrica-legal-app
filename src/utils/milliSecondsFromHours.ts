import { MILLISECONDS, SECONDS } from "constants/urrica";

export const millisecondsFromHours = (hours: number): number => {
  const MINUTES = 60;
  return MILLISECONDS * SECONDS * MINUTES * +hours;
};
