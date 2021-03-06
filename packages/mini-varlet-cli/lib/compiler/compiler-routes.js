"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRoutes = exports.compileComponentsRoutes = exports.compileRootRoutes = void 0;
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var constants_1 = require("../constants");
var fsUtils_1 = require("../shared/fsUtils");
function compileRootRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fsUtils_1.globPromise)('docs/*.md')];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.map(function (file) {
                            var name = (0, path_1.parse)(file).name;
                            var _a = __read(name.split('.'), 2), docName = _a[0], lang = _a[1];
                            var routePath = "/".concat(lang, "/").concat(docName);
                            return {
                                path: routePath,
                                component: (0, path_1.resolve)(constants_1.CWD, file)
                            };
                        })];
            }
        });
    });
}
exports.compileRootRoutes = compileRootRoutes;
function compileComponentsRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fsUtils_1.globPromise)('src/**/docs/*.md')];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.map(function (file) {
                            var _a = (0, path_1.parse)(file), dir = _a.dir, lang = _a.name;
                            var component = dir.replace('src', '').replace('/docs', '');
                            var routePath = "/".concat(lang).concat(component);
                            return {
                                path: routePath,
                                component: (0, path_1.resolve)(constants_1.CWD, file)
                            };
                        })];
            }
        });
    });
}
exports.compileComponentsRoutes = compileComponentsRoutes;
function compileRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var rootRoutes, componentRoutes, routes, template;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, compileRootRoutes()];
                case 1:
                    rootRoutes = _a.sent();
                    return [4 /*yield*/, compileComponentsRoutes()];
                case 2:
                    componentRoutes = _a.sent();
                    routes = __spreadArray(__spreadArray([], __read(rootRoutes), false), __read(componentRoutes), false);
                    template = "\nexport default [\n  ".concat(routes.map(function (routePath) { return "{ path: '".concat(routePath.path, "', component: () => import('").concat(routePath.component, "') }"); }).join(',\n  '), "\n]\n  ");
                    (0, fs_extra_1.writeFileSync)(constants_1.ROUTES, template);
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileRoutes = compileRoutes;
