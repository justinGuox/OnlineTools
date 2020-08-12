const blogrolls = [
  // {
  //   link: '#',
  //   name: '友情链接'
  // }
]
const contents = [
  {
    link: 'index',
    name: '首页'
  },
  {
    link: 'cate2',
    name: '精品专区',
    children: [
      {
        name: '短视频解析',
        detail:
          '各大短视频平台无水印视频解析提取,看到好视频再也不怕保存不下来了...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006191592498551251194.png',
        link: '/toolsDvideo',
        help: [
          '在上方粘贴短视频链接点击开始获取即可解析',
          '请注意链接中不能包含任何中文,否则可能失败',
          '解析成功后在单击链接即可直接复制该链接地址',
          '本工具支持解析X音、X手、X虾等基本短视频平台',
          '部分短视频解析出来不支持播放,直接用下载器下载即可',
          '视频版权归相关网站及作者所有,本站不存储任何视频及图片'
        ]
      },
      {
        name: '高清壁纸库',
        detail: '超多精选壁纸，快手抖音热门图集，每日实时更新，缺壁纸来这...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006261593138079365562.png',
        link: '/wallpaper'
      },
      {
        name: '放屁音效恶搞',
        detail: '在线放屁,恶搞同学、朋友、对象必备神器!',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592476139320711.png',
        link: '/FartMp3',
        help: [
          '在上方输入你要延迟播放的时间',
          '留空则直接播放',
          '解析成功后在单击链接即可直接复制该链接地址',
          '如果觉得本工具不错的话,不妨给身边的人安利一下'
        ]
      },
      {
        name: '星座运势查询',
        detail:
          '提供12星座的个性、爱情、配对、事业等分析,最新最全的每日信息将来让您更了解各星座!...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592466654592835.png',
        link: '/csearch'
      },
      {
        name: '随机壁纸生成',
        detail: '壁纸选择困难症怎么办？懒得去找壁纸怎么办？随机来一张...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592465498385327.png',
        link: '/wallpaperRandom',
        help: [
          '壁纸选择困难症怎么办？懒得去找壁纸怎么办？随机来一张',
          '点击上方按钮,即可随机生成一张壁纸,长按或者右键即可保存',
          '上方壁纸尺寸选择自适应会根据你屏幕尺寸输出相对应的壁纸'
        ]
      },
      {
        name: '随机头像生成',
        detail: '头像选择困难症怎么办？懒得去找头像怎么办？随机来一个...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592464032349942.png',
        link: '/headRandom',
        help: [
          '头像选择困难症怎么办？懒得去找头像怎么办？随机来一个',
          '点击上方按钮,即可随机生成一个头像,长按或者右键即可保存'
        ]
      },
      {
        name: '随机语录句子',
        detail: '想发个朋友圈改个签名却总想不到好的句子？随机来一句...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592417079306182.png',
        link: '/sayingRandom',
        help: [
          '想发个朋友圈改个签名刷个存在感却总想不到好的句子？随机来一句'
        ]
      },
      {
        name: '帮你百度一下',
        detail: '沙雕网友问的问题太简单，不想回答？生成帮助链接丢给他...',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006181592410860161368.png',
        link: '/baiduHelp'
      },
      {
        name: '短视频批量解析',
        detail: '目前只支持西瓜视频和抖音小视频~',
        icon:
          'https://shop.io.mi-img.com/app/shop/img?id=shop_c02641b72a004baf0fb7e720294424f8.png',
        link: '/videoParse',
        help: [
          '在上方粘贴短视频链接点击开始获取即可解析',
          '链接中可以包含中文，但有可能解析失败',
          '本工具仅支持解析X音、X瓜短视频平台',
          '部分短视频解析出来不支持播放,直接用下载器下载即可',
          '视频版权归相关网站及作者所有,本站不存储任何视频及图片',
          '更多平台持续开发中~'
        ]
      },
      {
        name: '支付宝到账音',
        detail: '一键生成自定义金额支付宝到账铃声,你就是这条街最靓的仔',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592407507469096.png',
        link: '/alipay',
        help: [
          '在上方输入您要生成的数字金额','点击生成即可生成出支付宝到账铃声','如果觉得本工具不错的话,不妨给身边的人安利一下'
        ]
      },
      {
        name: '三合一收款码',
        detail: '一码收支付宝、QQ、微信,免去各种繁琐操作qq微信支付宝收款码在线免费合并三合一',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592406863182503.png',
        link: '/alipayQRCode'
      },
      {
        name: '你是什么垃圾',
        detail: '生活垃圾怎么分？在线查询给你支招',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592381721330710.png',
        link: '/test'
      },
      {
        name: '名字在线生成',
        detail: '还在苦苦纠结宝宝名字起啥？试试这个神器',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592380987325408.png',
        link: '/test'
      },
      {
        name: '表白二维码',
        detail: '遇到心仪的Ta还在犹豫吗？用表白二维码把话传递给Ta',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592377109764627.png',
        link: '/test'
      },
      {
        name: '恋爱话术搜索',
        detail: '和妹子聊天词穷了怎么办？不要怕,来这搜一下！超过15W+聊天话术库！',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006171592376512801135.png',
        link: '/test'
      }
    ]
  },
  {
    link: 'cate3',
    name: '企鹅专区',
    children: [
      {
        name: 'QQ号码估价',
        detail: '想知道你的QQ值多少钱吗？在全球排第几吗？这款工具帮你在线估算',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006201592666403658791.png',
        link: '/test'
      },
      {
        name: 'Q群个性名片',
        detail: '是否羡慕别人在QQ群炫酷的群名片?他们都是在这生成的',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592574486324484.png',
        link: '/test'
      },
      {
        name: '吃鸡彩色字体',
        detail: '一键生成和平精英聊天彩色文字效果,B格满满',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592572407113753.png',
        link: '/test'
      },
      {
        name: '绝版气泡名片',
        detail: '一键设置QQ聊天绝版气泡、名片、挂件,聊天B格瞬间翻倍',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592562058313994.png',
        link: '/test'
      },
      {
        name: '我的世界起名',
        detail: '生物系、怪物系、植物系等等超火名字',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592556010673799.png',
        link: '/test'
      },
      {
        name: '荒野行动起名',
        detail: '中国风、搞笑名字、热门名字等等各种',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592555910897050.jpg',
        link: '/test'
      },
      {
        name: '球球起名神器',
        detail: '彩色名、自定义名称、各类热门名称等',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592555838382596.jpg',
        link: '/test'
      },
      {
        name: '手游飞车起名',
        detail: '男生、女生、车队、名字符号等等',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592555774186512.png',
        link: '/test'
      },
      {
        name: '王者起名神器',
        detail: '个人名、情侣名、战队名、五黑名称等等',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592554759879305.png',
        link: '/test'
      },
      {
        name: '王者特殊名字',
        detail: '超长名、重复名、花纹名生成,做游戏中最靓的仔',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006191592554759879305.png',
        link: '/test'
      }
    ]
  },
  {
    link: 'cate4',
    name: '音乐专区',
    children: [
      {
        name: '音乐搜索解析',
        detail: '多站合一音乐搜索工具,涵盖全网音乐平台搜索接口',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006221592814471736255.png',
        link: '/test'
      },
      {
        name: '全网音乐下载',
        detail: '在线网页播放器全网音乐免费下载',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006211592721747470216.png',
        link: '/test'
      }
    ]
  },
  {
    link: 'cate5',
    name: '编程开发',
    children: [
      {
        name: 'MarkDown编辑器',
        detail: '在线写文档代码必备,简洁快速方便',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/07/202007021650288786514.png',
        link: '/test'
      },
      {
        name: '短链接生成',
        detail: '网址太长不美观？不方便推广？多合一短链接了解一下',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006241592933467540223.png',
        link: '/test'
      },
      {
        name: '二维码生成识别',
        detail: '在线一键生成或识别二维码',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006231592905053545324.png',
        link: '/test'
      },
      {
        name: '多合一图床',
        detail: '省去服务器成本,一键上传图片生成直链',
        icon:
          'https://www.tool22.com/zb_users/upload/2020/06/202006231592899636148793.png',
        link: '/test'
      }
    ]
  },
  {
    link: 'cate6',
    name: '世俗风水',
    children: [
      {
        name: '看看风水',
        detail: '家居、办公地点也是很有风水讲究的喔',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006271410483701104.png',
        link: '/test'
      },
      {
        name: '标准体重',
        detail: '一键精确计算您的标准体重是多少',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261727087585827.png',
        link: '/test'
      },
      {
        name: '手相预测',
        detail: '你对自己的手相了解吗？来看看吧',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261714471764032.png',
        link: '/test'
      },
      {
        name: '风水测算',
        detail: '在线一键测自家风水,看看是否合适',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261659289589648.png',
        link: '/test'
      },
      {
        name: '每日百科',
        detail: '了解历史上当天的各种神奇新闻百科',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261543343971608.png',
        link: '/test'
      },
      {
        name: '法定假日',
        detail: '看看下次放假是啥时候',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261513203731802.png',
        link: '/test'
      },
      {
        name: '倒数日',
        detail: '快来看看下一次是什么节日',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261457204648961.png',
        link: '/test'
      },
      {
        name: '二十四节气',
        detail: '中国传统习俗不能忘,可以了解一下',
        icon: 'https://www.tool22.com/zb_users/upload/2020/06/202006261421201960482.png',
        link: '/test'
      }
    ]
  }
]

export { blogrolls, contents }
