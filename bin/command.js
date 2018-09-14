#!/usr/bin/env node

/**
 * About how to use 'commander' download templete from a git url
 */
const program = require('commander')
program.version('1.0.0')
    .usage('<command> [project-name]')
    .command('hello', 'this will run command-hello.js') // Git-style sub-commands
    .command('test', 'this will run command-test.js') // Git-style sub-commands
    .command('init', 'this will run command-init.js')
    .parse(process.argv)

// test case
// node ./bin/command.js hello
// node ./bin/command.js test my-project
// node ./bin/command.js init my-project
