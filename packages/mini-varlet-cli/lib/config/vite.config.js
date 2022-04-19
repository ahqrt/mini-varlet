"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuildConfig = void 0;
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
var vite_1 = require("vite");
var constants_1 = require("../constants");
var vite_markdown_plugin_1 = __importDefault(require("@mini-varlet/vite-markdown-plugin"));
var path_1 = require("path");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_vue_1.default)({
            include: [/\.vue$/, /\.md$/],
        }),
        (0, vite_markdown_plugin_1.default)()
    ],
    resolve: {
        alias: {
            '@routes': constants_1.ROUTES
        }
    },
    root: constants_1.MINI_VARLET
});
function getBuildConfig(inlineConfig) {
    return __assign(__assign({}, inlineConfig), { base: './', build: {
            outDir: constants_1.SITE_OUTPUT_PATH,
            brotliSize: false,
            emptyOutDir: true,
            cssTarget: 'chrome61',
            rollupOptions: {
                input: {
                    main: (0, path_1.resolve)(constants_1.MINI_VARLET, 'index.html'),
                },
            },
        } });
}
exports.getBuildConfig = getBuildConfig;
