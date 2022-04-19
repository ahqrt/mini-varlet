import { join, resolve } from "path";

export const CWD = process.cwd();

export const MINI_VARLET = resolve(CWD, './.mini-varlet');

export const SITE = resolve(__dirname, '../site');

export const ROUTES = resolve(MINI_VARLET, './routes.js');

export const SITE_OUTPUT_PATH = resolve(CWD, 'site')