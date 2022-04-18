"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globPromise = void 0;
var glob_1 = __importDefault(require("glob"));
function globPromise(path) {
    return new Promise(function (resolve, reject) {
        (0, glob_1.default)(path, function (err, files) {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
}
exports.globPromise = globPromise;
