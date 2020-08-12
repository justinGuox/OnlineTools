// 利用正则表达式筛选并获取字符串中的URL链接（只是筛选完整URL，单独域名不筛选）
function httpString(s) {
  // var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
  // var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  // var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
  // var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
  var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  // var reg= /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
  // v = v.replace(reg, "<a href='$1$2'>$1$2</a>"); //这里的reg就是上面的正则表达式
  // s = s.replace(reg, "$1$2"); //这里的reg就是上面的正则表达式
  s = s.match(reg)
  // console.log(s)
  return (s)
}

// // 根据对应的路径获取对应的帮助说明
// function getHelp(contents, link) {
//   return contents.map(card => {
//     if (card.children) {
//       return card.children.map(item => {
//         if (item.help) {
//           // console.log(this.link)
//           // console.log('--------')
//           // console.log(item.link)
//           if (link === item.link) {
//             // console.log('相等')
//             return  item.help
//           } else {
//             return
//           }
//         } else {
//           return
//         }
//       })
//     } else {
//       return
//     }
//   })
// }

export {
  httpString
}
