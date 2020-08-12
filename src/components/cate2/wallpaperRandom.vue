<template>
    <div>
        <Logo/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <Card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class="card-title">随机壁纸生成</span>
                        </div>
                        <div class="row">
                            <div class="select col-md-12">
                                <div class="el-input-group__prepend col-md-1">请选择壁纸尺寸</div>
                                <Select v-model="sizeValue" class="col-md-10">
                                    <Option
                                        v-for="item in size"
                                        :key="item.label"
                                        :label="item.label"
                                        :value="item.label">
                                    </Option>
                                </Select>
                                <div class="select col-md-12">
                                    <div class="el-input-group__prepend col-md-1">请选择壁纸类型</div>
                                    <Select v-model="typeValue" class="col-md-10">
                                        <Option
                                                v-for="item in type"
                                                :key="item.label"
                                                :label="item.label"
                                                :value="item.label">
                                        </Option>
                                    </Select>
                                </div>
                                <Button class="col-md-12 col-xs-12 button" @click="wallpaperRandom">随机来一个</Button>
                            </div>

                        </div>
                    </Card>
                </div>
                <div class="col-md-10 col-md-offset-1" v-show="imgUrl">
                    <Card class="wallpaper">
                        <div slot="header" class="clearfix">
                            <span class="card-title">生成壁纸 >> {{this.sizeValue}} >> {{this.typeValue}}</span>
                        </div>
                            <img :src="imgUrl">
                    </Card>
                </div>
            </div>
        </div>
        <Help :helps="helps"/>
    </div>
</template>

<script>
  import Logo from '../logo'
  import Help from '../that-help'
  import { Card,  Button, Select, Option } from 'element-ui'
  import { contents } from '../../config/config'
  export default {
    data() {
      //  说明：随机图片壁纸api，调用的是新浪api，速度不用担心，图片资源也很多
      // 电脑动漫图片：http://api.btstu.cn/sjbz/?lx=dongman
      // 电脑美女图片：http://api.btstu.cn/sjbz/?lx=meizi
      // 电脑随机动漫妹子：http://api.btstu.cn/sjbz/?lx=suiji
      // 手机动漫图片：http://api.btstu.cn/sjbz/?lx=m_dongman
      // 手机美女图片：http://api.btstu.cn/sjbz/?lx=m_meizi
      // 手机随机动漫妹子：http://api.btstu.cn/sjbz/?m_lx=suiji
      // 手机电脑自动判断，电脑显示适合电脑的壁纸，手机显示适合手机的壁纸http://api.btstu.cn/sjbz/zsy.php
      // api现在已经有几千张图了，每天都在增加，大家可以玩玩
      return {
        imgUrl: '',
        sizeValue: '电脑端',
        typeValue: '动漫图片',
        size: [
          {
                // value: 'http://api.btstu.cn/sjbz/?lx=m_',
                label: '手机端'
              },{
                // value: 'http://api.btstu.cn/sjbz/?lx=',
                label: '电脑端'
              },
          ],
        type: [
          {
            // value: 'dongman',
            label: '动漫图片'
          },{
            // value: 'meizi',
            label: '美女图片'
          },{
            // value: 'suiji',
            label: '随机'
          },
        ], // 壁纸类型
        helps: [] // 帮助说明
      }
    },
    mounted() {
      this.getParams()
      this.getHelp()
    },
    methods: {
      getParams() {
        // 取到路由带过来的参数
        this.link = this.$route.path
      },
      getHelp() {
        return contents.map(card => {
          if (card.children) {
            return card.children.map(item => {
              if (item.help) {
                if (this.link === item.link) {
                  this.helps = item.help
                } else {
                  return
                }
              } else {
                return
              }
            })
          } else {
            return
          }
        })
      },
      wallpaperRandom () {
        // console.log('选择的尺寸'+this.sizeValue)
        // console.log('选择的类型'+this.typeValue)
        // value: 'http://api.btstu.cn/sjbz/?lx=m_',
        // value: 'http://api.btstu.cn/sjbz/?lx=',
        // value: 'dongman',
        // value: 'meizi',
        // value: 'suiji',
        switch (this.sizeValue) {
          case '电脑端':
            this.imgUrl = 'http://api.btstu.cn/sjbz/?lx='
            break
          case '手机端':
            this.imgUrl = 'http://api.btstu.cn/sjbz/?lx=m_'
            break
          default:
            this.imgUrl = 'http://api.btstu.cn/sjbz/?lx='
            break
        }
        switch (this.typeValue) {
          case '动漫图片':
            this.imgUrl += 'dongman'
            break
          case '美女图片':
            this.imgUrl += 'meizi'
            break
          case '随机':
            this.imgUrl += 'suiji'
            break
          default:
            this.imgUrl += 'suiji'
            break
        }

        this.imgUrl = this.imgUrl + '&time=' + new Date().getSeconds()
        // this.imgUrl = this.imgUrl.split('?time=')[0]
        // console.log('最终地址'+this.imgUrl)
      }
    },
    components: {
      Logo,
      Help,
      Card,
      Button,
      Select,
      Option
    }
  }
</script>

<style lang="less">
    @import "../../assets/less/style";
    .select {
        margin: 20px 0 20px 0;
        width: 100%;
        float: left;
        padding: 0;
        .el-select {
            padding: 0;
        }
        .col-md-10 {
            padding: 0;
        }
        .el-input-group__prepend {
            /*border: 1px salmon solid;*/
            margin-right: 0px;
            height: 40px;
            line-height: 40px;
            width: 121px;
            padding-right: 0;
            border: none;
        }
    }
    .row{
        .wallpaper{
            margin-top: 20px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
