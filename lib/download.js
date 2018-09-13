/**
 * A library of download-git-repo to download according the git address
 */
const download = require('download-git-repo')
const path = require('path')
const ora = require('ora') // show download spinner

module.exports = function (url, target) {
  target = path.join(target || '.', '.download-temp')
  return new Promise(function(resolve, reject){
    const spinner = ora(`it is downloading templete, source address: ${url}`)
    spinner.start()
    // If it is git URL, the branch behind URL can not be ignored（如果是git url，url后面的branch不能忽略）
    download('direct:' + url, target, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve(target)
      }
    })
  })
}
