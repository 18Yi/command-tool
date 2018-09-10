#!/usr/bin/env node
/**
 * to get project-name absolute path
 */

const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D

program.usage('<project-name>').parse(process.argv)
// Get the project name based on input(根据输入，获取项目名称)
let projectName = program.args[0]

if (!projectName) {
  // Project-name is empty, showing --help(project-name为空，显示--help)
  program.help()
  return
}

const list = glob.sync('*')  // Traversal of current directory(遍历当前目录)
let rootName = path.basename(process.cwd())
if (list.length) {  // If the current directory is not empty(如果当前目录不为空)
  if (list.filter(name => {
    const fileName = path.resolve(process.cwd(), path.join('.', name))
    const isDir = fs.stat(fileName, (err, stats) => {
      return stats.isDirectory()
    })
    return name.indexOf(projectName) !== -1 && isDir
  }).length !== 0) {
    console.log(`${projectName} directory is exist`)
    return
  }
  rootName = projectName
} else if (rootName === projectName) {
  rootName = '.'
} else {
  rootName = projectName
}

go()

function go() {
  console.log(path.resolve(process.cwd(), path.join('.', rootName)))
}

// node command-toll/bin/macaw.js init project(is in Desktop directory) => Terminal display 'C:\Users\Administrator\Desktop\project'(absolute path)
