/**
 * 配置编译环境和线上环境之间的切换
 * 默认二套环境，可以增添
 * 参考https://cli.vuejs.org/zh/guide/mode-and-env.html
 *
 */

let apiDomain, imgDomain, assetsUrl, mainUrl

switch (process.env.VUE_APP_FLAG) {
    case 'uat':
        apiDomain= '11'
        imgDomain= '11'
        assetsUrl= '11'
        mainUrl = '11'
    break
   case 'prd':
        apiDomain= '22'
        imgDomain= '22'
        assetsUrl= '22'
        mainUrl = '22'
    break
}
 
console.log(`环境：${process.env.VUE_APP_FLAG}`)
export default {
  apiDomain,
  imgDomain,
  assetsUrl,
  mainUrl
}