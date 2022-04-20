"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var build_1 = require("./commands/build");
var dev_1 = require("./commands/dev");
var program = new commander_1.Command();
program
    .command('dev')
    .description('Run the dev server')
    .action(dev_1.dev);
program
    .command('build')
    .description('Build the site')
    .action(build_1.build);
program.on('command:*', function (_a) {
    var _b = __read(_a, 1), cmd = _b[0];
    program.outputHelp();
    // logger.error(`\nUnknown command ${cmd}.\n`)
    process.exitCode = 1;
});
program.parse();
