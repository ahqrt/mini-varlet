"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
var vite_1 = require("vite");
var constants_1 = require("../constants");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_vue_1.default)(),
    ],
    root: constants_1.MINI_VARLET
});
