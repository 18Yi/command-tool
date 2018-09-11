#!/usr/bin/env node
/**
 * to download templete from git url
 */

const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const download = require('../lib/download')
const inquirer = require('inquirer')

program.usage('<project-name>').parse(process.argv)
// Get the project name based on input(根据输入，获取项目名称)
let projectName = program.args[0]

if (!projectName) {
  // Project-name is empty, showing --help(project-name为空，显示--help)
  program.help()
  return
}

const list = glob.sync('*')  // Traversal of current directory(遍历当前目录)
let rootName = path.basename(process.cwd()) // 根目录

let next = undefined

if (list.length) {
  // Determine whether there is an input projectName directory in the current directory(判断当前目录里面是否有输入的projectName目录)
  if (list.filter(name => {
    const fileName = path.resolve(process.cwd(), path.join('.', name))
    const isDir = fs.statSync(fileName).isDirectory()
    return name.indexOf(projectName) !== -1 && isDir
  }).length !== 0) {
    console.log(`${projectName} directory is exist`)
    return
  }
  next = Promise.resolve(projectName)

} else if (rootName === projectName) {
  // input projectName and its root directory with the same name(输入的projectName和其根目录同名)
  next = inquirer.prompt([
    {
      name: 'buildInCurrent',
      message: 'The current directory is empty and the directory name is the same as the project name. Do you want to create a new project directly in the current directory?',
      // message: '当前目录为空，目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
      type: 'confirm',
      default: true
    }
  ]).then(answer => {
    return Promise.resolve(answer.buildInCurrent ? projectName : '.')
  })

} else {
  next = Promise.resolve(projectName)
}

go()

function go() {
  next.then(projectName => {
    if(projectName !== '.'){
      fs.mkdirSync(projectName)
      download('https://github.com/dzfrontend/react-cli.git#develop', projectName).then(target => {
        return {
          projectName,
          downloadTemp: target
        }
      }).catch(err => console.log(err))
    }
  })

}
