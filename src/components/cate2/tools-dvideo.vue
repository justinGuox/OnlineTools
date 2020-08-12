<template>
    <div>
      <Logo />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <Card class="box-card">
              <div slot="header" class="clearfix">
                <span class="card-title">短视频解析下载</span>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <Input
                    placeholder="请输入您要解析的短视频解析链接..."
                    v-model="input"
                    clearable
                    @input="inputblur"
                    @blur="inputblur">
                    <template slot="prepend">解析链接：</template>
                  </Input>
                  <Alert v-show="alertShow" title="请输入短视频链接"
                  type="error" show-icon />
                  <hr />
                  <Button class="col-md-12 col-xs-12 button" @click="getVideo">开始获取</Button>
                </div>

              </div>
            </Card>
          </div>
          <div class="col-md-10 col-md-offset-1" v-show="resultShow">
            <Card class="jiexi">
              <div slot="header" class="clearfix">
                <span class="card-title">解析结果</span>
              </div>
                  <div class="videoUrl">视频URL：
                    <a target="_blank" :href="videoResult">
                      {{videoResult}}
                  </a>
                  </div>
                  <br />
                  <hr />
                  <span class="col-md-12">附加说明：如果您解析的是某瓜或者某音视频打开出现403的情况请直接复制链接到下载器(迅雷等App)下载即可,下载完毕后自行修改后缀名为.mp4即可播放</span>
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
import { Card, Input, Alert, Button, Loading, Message } from 'element-ui'
import { contents } from '../../config/config'
import { videoResolution } from '../../api/ajax'
import { httpString } from '../Tool'
export default {
  data() {
    return {
      input: '',
      alertShow: false,
      helps: [], //contents[1].children[0].help, // 帮助说明
      resultShow: false,
      videoResult: '',
      link: ''
    }
  },
  components: {
    Help,
    Logo,
    Card, Input, Alert, Button
  },
  mounted() {
    this.getParams()
    // const test = getHelp(contents, this.link)
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
              // console.log(this.link)
              // console.log('--------')
              // console.log(item.link)
              if (this.link === item.link) {
                // console.log('相等')
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
    inputblur() {
      if (this.input === '') {
        this.alertShow = true
      } else {
        this.alertShow = false
      }
    },
    getVideo() {
      this.inputblur()
      if (this.input === '') {
        return
      }
      // console.log('开始解析')
      const url = httpString(this.input)
      const loadingInstance = Loading.service(true)
      const result = videoResolution(url)
      result.then(value => {
        if (value.data.title) {
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
          })
          Message.success('解析成功')
          this.videoResult = value.data.video
          this.resultShow = true
        } else {
          Message.error('解析失败，请检查视频链接是否正确')
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/less/style";
  .row {
    .jiexi {
      border: rgb(51,202,187) 1px solid;
      margin-top: 20px;
      .el-card__header {
        background-color: white;
      }
      .card-title {
        color: #616a78 !important;
      }
      span {
        color: #f96868;
        margin-bottom: 20px;
      }
      .videoUrl {
        display: inline-block;
        font-size: 14px;
        color: #303030;
        line-height: 1.6;
        font-family: "微软雅黑";
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        margin-bottom: -20px;
        a{
          width: 100%;
          color: #33cabb;
          cursor: pointer;
        }
      }
    }
  }
</style>
