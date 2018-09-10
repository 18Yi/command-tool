#!/usr/bin/env node

/**
 * About how to use 'commander' download templete from a git url
 */
const program = require('commander')  // npm i commander -D
program.version('1.0.0')
    .usage('<command> [project-name]')
    .command('hello', 'this will run macaw-hello.js') // Git-style sub-commands
    .command('init', 'this will run macaw-init.js') // Git-style sub-commands
    .command('init-templete', 'this will run macaw-init-templete.js')
    .parse(process.argv)

// test case
// node ./bin/macaw.js hello  => Terminal display 'hello, commander'
// node command-toll/bin/macaw.js init project(is in Desktop directory) => Terminal display 'C:\Users\Administrator\Desktop\project'(absolute path)
