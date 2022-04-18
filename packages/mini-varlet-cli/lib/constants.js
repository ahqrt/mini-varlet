"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = exports.SITE = exports.MINI_VARLET = exports.CWD = void 0;
var path_1 = require("path");
exports.CWD = process.cwd();
exports.MINI_VARLET = (0, path_1.resolve)(exports.CWD, './.mini-varlet');
exports.SITE = (0, path_1.resolve)(__dirname, '../site');
exports.ROUTES = (0, path_1.resolve)(exports.MINI_VARLET, './routes.js');
