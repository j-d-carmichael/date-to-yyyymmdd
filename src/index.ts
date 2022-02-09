function padding2 (value: number) {
  return '' + (value < 10 ? '0' + value : value);
}

export interface DateWithPadding {
  year: string;
  month: string;
  date: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const getDateWithPadding = (dt?: Date): DateWithPadding => {
  const date = dt || new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return {
    year: '' + year,
    month: '' + padding2(month),
    date: '' + padding2(day),
    hours: '' + padding2(hours),
    minutes: '' + padding2(minutes),
    seconds: '' + padding2(seconds)
  };
};

/**
 * Example return:
 * @returns {number} For example '20220209'
 */
export const yyyymmdd = (dt?: Date): string => {
  const _a = getDateWithPadding(dt), year = _a.year, month = _a.month, date = _a.date;
  return '' + year + month + date;
};

/**
 * Example return:
 * @returns {number} For example '20220209105748'
 */
export const yyyymmddhhmmss = (dt?: Date): string => {
  const _a = getDateWithPadding(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours,
    minutes = _a.minutes,
    seconds = _a.seconds;
  return '' + year + month + date + hours + minutes + seconds;
};

/**
 * Example return:
 * @returns {number} For example '2022-02-09'
 */
export const yyyy_mm_dd = (dt?: Date): string => {
  const _a = getDateWithPadding(dt), year = _a.year, month = _a.month, date = _a.date;
  return year + '-' + month + '-' + date;
};

/**
 * Example return:
 * @returns {number} For example '2022-02-09 10:57:48'
 */
export const yyyy_mm_dd_hh_mm_ss = (dt?: Date): string => {
  const _a = getDateWithPadding(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours,
    minutes = _a.minutes,
    seconds = _a.seconds;
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
};
