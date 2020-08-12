// 利用正则表达式筛选并获取字符串中的URL链接（只是筛选完整URL，单独域名不筛选）
// 返回的是一个数组，数组项是链接字符串，有一个链接就有一个数组项，有 两个就有两个，没有就返回null
// 支持携带中文，自动去除
function httpString(str, type = '') {
  // 去掉无用的空格
  str = str.replace(/ /ig, '')
  // var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  // var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  // var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
  // var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
  let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  // var reg= /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
  // v = v.replace(reg, "<a href='$1$2'>$1$2</a>"); //这里的reg就是上面的正则表达式
  // s = s.replace(reg, "$1$2"); //这里的reg就是上面的正则表达式
  str = str.match(reg)
  // str = "12345?789”
  // str.split("?")[0]    输出为 12345
  if (type === 'ixigua') {
    // 返回西瓜视频列表数组
    str = str.map((item, index) => {
      item = item.split('?')[0]
      if (item.length !== 42) {
        return `error：第${index + 1}个网址输入错误，请检查`
      } else {
        return item
      }
    })
    return (str)
  } else if (type === 'douyin') {
    // 返回抖音视频列表数组
    str = str.map((item, index) => {
      item = item.split('?')[0]
      if (item.length !== 29) {
        return `error：第${index + 1}个网址输入错误，请检查`
      } else {
        return item
      }
    })
    return (str)
  } else {
    // 不做任何处理直接返回
    return (str)
  }
}

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise}
 */
function getBlob(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      console.log('转换')
      if (xhr.status === 200) {
        resolve(xhr.response)
      }
    }
    xhr.send()
  })
}

/**
 * 保存
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')

    link.href = window.URL.createObjectURL(blob)
    link.download = filename

    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)

    link.click()
    body.removeChild(link)
    console.log('开始下载')
    window.URL.revokeObjectURL(link.href)
  }
}

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
function download(url, filename) {
  getBlob(url).then(blob => {
    console.log('准备下载')
    saveAs(blob, filename)
  })
}

export {
  httpString,
  download
}
