"use strict";
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
program.parse();
