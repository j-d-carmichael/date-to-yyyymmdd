"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const date = new Date(1644404268699);
it('yyyymmdd should be', async () => {
    expect(index_1.yyyymmdd(date)).toBe('20220209');
});
it('yyyymmddhhmmss should be', async () => {
    expect(index_1.yyyymmddhhmmss(date)).toBe('20220209105748');
});
it('yyyy_mm_dd_hh_mm_ss should be', async () => {
    expect(index_1.yyyy_mm_dd_hh_mm_ss(date)).toBe('2022-02-09 10:57:48');
});
it('yyyy_mm_dd should be', async () => {
    expect(index_1.yyyy_mm_dd(date)).toBe('2022-02-09');
});
