import { resolve } from "path";

export const CWD = process.cwd();

export const MINI_VARLET = resolve(CWD, './.mini-varlet');

export const SITE = resolve(__dirname, '../site');