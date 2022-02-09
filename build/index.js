"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yyyy_mm_dd_hh_mm_ss = exports.yyyy_mm_dd = exports.yyyymmddhhmmss = exports.yyyymmdd = void 0;
function padding2(value) {
    return '' + (value < 10 ? '0' + value : value);
}
function getDate(dt) {
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
const yyyymmdd = (dt) => {
    const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date;
    return '' + year + month + date;
};
exports.yyyymmdd = yyyymmdd;
const yyyymmddhhmmss = (dt) => {
    const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
    return '' + year + month + date + hours + minutes + seconds;
};
exports.yyyymmddhhmmss = yyyymmddhhmmss;
const yyyy_mm_dd = (dt) => {
    const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date;
    return year + '-' + month + '-' + date;
};
exports.yyyy_mm_dd = yyyy_mm_dd;
const yyyy_mm_dd_hh_mm_ss = (dt) => {
    const _a = getDate(dt), year = _a.year, month = _a.month, date = _a.date, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
};
exports.yyyy_mm_dd_hh_mm_ss = yyyy_mm_dd_hh_mm_ss;
