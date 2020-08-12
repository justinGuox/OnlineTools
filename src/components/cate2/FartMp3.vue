<template>
    <div>
      <Logo/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <Card class="box-card">
              <div slot="header" class="clearfix">
                <span class="card-title">放屁音效恶搞</span>
              </div>
              <div class="row">
                <div class="select col-md-12">
                  <div class="el-input-group__prepend col-md-1">播放延时(秒)</div>
                  <div class="col-md-10">
                    <Input
                      placeholder="请输入播放延时秒数（留空直接播放）"
                      v-model="input"
                      clearable>
                    </Input>
                  </div>
                  <div class="select col-md-12">
                    <div class="el-input-group__prepend col-md-1">播放音效</div>
                    <Select v-model="value" class="col-md-10" :change="changeSelect()">
                      <Option
                          v-for="item in select"
                          :key="item.name"
                          :label="item.name"
                          :value="item.name">
                      </Option>
                    </Select>
                    <Alert v-show="alertShow" title="请选择播放音效"
                           type="error" show-icon />
                  </div>

<!--                  <Alert v-show="alertShow" title="请输入短视频链接"-->
<!--                         type="error" show-icon />-->
                  <Button class="col-md-12 col-xs-12 button" @click="playMp3">点击播放</Button>
                </div>

              </div>
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
import FartMp3 from '../../config/FartMp3'
import { Card,  Button, Alert, Input, Select, Option } from 'element-ui'
import { contents } from '../../config/config'
export default {
  data() {
    return {
      input: '',
      value: '',
      link: '',
      alertShow: false,
      select: FartMp3,
      helps: [] // 帮助说明
    }
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
    // 下拉框选择的值
    changeSelect () {
      if (this.value) {
        FartMp3.map(item => {
          if (item.name === this.value) {
            this.link = item.link
            this.alertShow = false
          }
        })
      }
    },
    // 播放选择的音效
    playMp3 () {
      if (this.input) {
        setTimeout(()=> {
          // 获取音频对象
          if (this.link!== '/FartMp3') {
            const audio = new Audio(this.link)
            audio.play()
          } else {
            this.alertShow = true
          }
        }, this.input*1000)
      } else {
        // 获取音频对象
        if (this.link!== '/FartMp3') {
          const audio = new Audio(this.link)
          audio.play()
        } else {
          this.alertShow = true
        }
      }
    }
  },
  components: {
    Logo,
    Help,
    Card,
    Button,
    Input,
    Select,
    Option,
    Alert
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
</style>
