/**
 * A library of download-git-repo to download according the git address
 */
const download = require('download-git-repo')
const path = require('path')

module.exports = function (url, target) {
  target = path.join(target || '.', '.download-temp')
  return new Promise(function(resolve, reject){
    // If it is git URL, the branch behind URL can not be ignored（如果是git url，url后面的branch不能忽略）
    download(url, target, { clone: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        // resolve result（返回结果）
        resolve(target)
      }
    })
  })
}
