#!/usr/bin/env node

/**
 * About how to use 'commander' download templete from a git url
 */
const program = require('commander')
program.version('1.0.0')
    .usage('<command> [project-name]')
    .command('hello', 'this will run command-hello.js') // Git-style sub-commands
    .command('init', 'this will run command-init.js') // Git-style sub-commands
    .command('init-templete', 'this will run command-init-templete.js')
    .parse(process.argv)

// test case
// node ./bin/command.js hello
// node ./bin/command.js init project
// node ./bin/command.js init-templete my-project
