<template>
    <div id="alipay">
        <Logo/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <Card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class="card-title">付宝到账音生成</span>
                        </div>
                        <div class="row">
                            <div class="select col-md-12">
                                <Input
                                        placeholder="请输入数字金额(支持小数点)"
                                        v-model="input"
                                        clearable
                                        @input="inputblur"
                                        @blur="inputblur">
                                    <Button slot="append" @click="inputMoney">点击生成</Button>
                                </Input>
                                <Alert v-show="alertShow" title="请输入数字金额"
                                       type="error" show-icon />
                            </div>

                        </div>
                    </Card>
                </div>
                <div class="col-md-10 col-md-offset-1" v-show="audioShow">
                    <Card class="wallpaper">
                        <audio id="bgMusic" controls >
                            <source type="audio/mp3">
                        </audio>
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
  import { Card, Input, Alert,Button } from 'element-ui'
  import { contents } from '../../config/config'
  export default {
    data() {
      return {
        input: '',
        alipayMusic: '',
        alertShow: false,
        audioShow: false,
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
      inputblur() {
        if (this.input === '') {
          this.alertShow = true
        } else {
          this.alertShow = false
        }
      },
      inputMoney () {
        this.inputblur()
        if (this.input) {
          this.audioShow = true
          const audio = document.getElementById("bgMusic");
          this.alipayMusic = `https://mm.cqu.cc/share/zhifubaodaozhang/mp3/${this.input}.mp3`
          console.log(audio)
          //播放(继续播放)
          audio.src = this.alipayMusic
          audio.play()
        }
      }
    },
    components: {
      Logo,
      Help,
      Card,
      Alert,
      Input,
      Button
    }
  }
</script>

<style lang="less">
    @import "../../assets/less/style";
    #alipay {
        .button {
            margin-top: 20px;
        }

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
        .wallpaper {
            .bgMusic {
                height: 100px;
                width: 100%;
            }
        }
    }
</style>
