import axios from 'axios'
// axios.defaults.withCredentials = true
function videoResolution(url) {
  // 短视频解析专用接口
  const resolutionUrl = 'http://jinge.wangzherongyao.cn/include/extend/jiexi/get_jiexi.php?url='
  // return new Promise(function(resolve, reject) {
  // 使用axios发get请求
  // const promise = axios.get(resolutionUrl + url)
  // promise.then(function(response) {
  //   resolve(response)
  // }).catch(function(error) {
  //   reject(error)
  // })
  // })
  return axios.get(resolutionUrl + url)
}

function getSaying(url) {
    return axios.get(url)
}

export {
  videoResolution,
  getSaying
}
