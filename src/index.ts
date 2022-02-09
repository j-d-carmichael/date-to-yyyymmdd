function padding2 (value: number) {
  return '' + (value < 10 ? '0' + value : value);
}

function getDate (dt?: Date) {
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
}

export const yyyymmdd = (dt?: Date) => {
  const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date;
  return '' + year + month + date;
};

export const yyyymmddhhmmss = (dt?: Date) => {
  const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours, minutes = _a.minutes,
    seconds = _a.seconds;
  return '' + year + month + date + hours + minutes + seconds;
};

export const yyyy_mm_dd = (dt?: Date) => {
  const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date;
  return year + '-' + month + '-' + date;
};

export const yyyy_mm_dd_hh_mm_ss = (dt?: Date) => {
  const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours, minutes = _a.minutes,
    seconds = _a.seconds;
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
};
