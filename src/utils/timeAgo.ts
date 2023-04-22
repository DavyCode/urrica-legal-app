import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const TimeAgoFormat = (value: string) => {
  const created = dayjs(value);
  return created.fromNow();
};
