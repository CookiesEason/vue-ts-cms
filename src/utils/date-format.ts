import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export function formatUtcString(utcString: string, format: string = DATE_FORMAT): string {
  return dayjs.utc(utcString).format(format);
}
