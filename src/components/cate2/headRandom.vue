<template>
    <div>
        <Logo/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <Card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class="card-title">随机头像生成</span>
                        </div>
                        <div class="row">
                            <div class="select col-md-12">
                                <div class="el-input-group__prepend col-md-1">请选择分类</div>
                                <Select v-model="typeValue" class="col-md-10">
                                    <Option
                                            v-for="item in type"
                                            :key="item.label"
                                            :label="item.label"
                                            :value="item.label">
                                    </Option>
                                </Select>
                                <Button class="col-md-12 col-xs-12 button" @click="headRandom">随机来一个</Button>
                            </div>

                        </div>
                    </Card>
                </div>
                <div class="col-md-10 col-md-offset-1" v-show="imgUrl">
                    <Card class="wallpaper">
                        <div slot="header" class="clearfix">
                            <span class="card-title">生成头像</span>
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
      return {
        imgUrl: '',
        typeValue: '动漫男头',
        type: [
          {
            label: '男头'
          },{
            label: '女头'
          },{
            label: '动漫头像'
          },{
            label: '动漫女头'
          },{
            label: '动漫男头'
          }
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
      headRandom () {
        // 输出头像类型[a1（男头）|b1（女头）|c1（动漫头像）|c2（动漫女头）|c3（动漫男头）]默认为c1
        this.imgUrl = 'http://api.btstu.cn/sjtx/api.php?lx='
        switch (this.typeValue) {
          case '男头':
            this.imgUrl += 'a1'
            break
          case '女头':
            this.imgUrl += 'b1'
            break
          case '动漫头像':
            this.imgUrl += 'c1'
            break
          case '动漫女头':
            this.imgUrl += 'c2'
            break
          case '动漫男头':
            this.imgUrl += 'c3'
            break
          default:
            this.imgUrl += 'c3'
            break
        }
        this.imgUrl = this.imgUrl + '&time=' + new Date().getSeconds()
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
    }
    .row{
        .wallpaper{
            margin-top: 20px;
        }
        img {
            width: 20%;
            height: 20%;
        }

    }
</style>
