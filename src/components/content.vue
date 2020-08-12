<template>
  <div id="content">
    <div class="container-fluid">
      <div class="row" v-if="searchs.length === 0">
        <div v-show="contentsArr.length === 0">
          <div class="
          col-xs-12
          col-sm-12
          col-md-12
          col-md-offset-0
          col-lg-8
          col-lg-offset-2">
            <Card class="box-card">
              <div slot="header" class="clearfix">
                <span class="card">搜索结果</span>
              </div>
              <div class="row">
                <div class="text item">
                  没有搜索到任何结果，换个关键词试试吧~
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div
          class="
          col-xs-12
          col-sm-12
          col-md-12
          col-md-offset-0
          col-lg-8
          col-lg-offset-2"
          v-for="(cards, index) in contentsArr"
          :key="index"
        >
          <Card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card">{{ cards.name }}</span>
              <Button
                style="float: right; padding: 3px 0; color: #6b7386"
                type="text"
                @click="goTo(cards.link)"
                >更多+</Button
              >
            </div>
            <div class="row">
              <div
                v-for="(card, index) in cards.children"
                :key="index"
                class="text item "
              >
                <div class="
                col-xs-12
                col-sm-6
                col-md-4
                col-lg-3">
                  <Card
                    class="box-card2"
                    shadow="hover"
                    @click.native="goTo(card.link)"
                  >
                    <img :src="card.icon" alt="card.name" />
                    <div class="referral">
                      <span>{{ card.name }}</span>
                      <Tooltip
                        class="item"
                        effect="dark"
                        content="直达网站"
                        placement="right"
                      >
                        <div class="iconfont iconrightarrow"></div>
                      </Tooltip>
                      <p>{{ card.detail }}</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div v-else>
        <div class="
          col-xs-12
          col-sm-12
          col-md-12
          col-md-offset-0
          col-lg-8
          col-lg-offset-2">
          <Card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card">搜索结果</span>
            </div>
            <div class="row">
              <div
                v-for="(card, index) in contentsArr"
                :key="index"
                class="text item"
              >
                <div class="col-md-3 col-xs-6">
                  <Card
                    class="box-card2"
                    shadow="hover"
                    @click.native="goTo(card.link)"
                  >
                    <img :src="card.icon" alt="card.name" />
                    <div class="referral">
                      <span>{{ card.name }}</span>
                      <Tooltip
                        class="item"
                        effect="dark"
                        content="直达网站"
                        placement="right"
                      >
                        <div class="iconfont iconrightarrow"></div>
                      </Tooltip>
                      <p>{{ card.detail }}</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Button, Tooltip } from 'element-ui'
import { contents } from '../config/config'
export default {
  data() {
    return {
      link: 'index',
      searchs: []
    }
  },
  computed: {
    contentsArr() {
      let arr = []
      const i = this.getArrayIndex(contents, this.link)
      if (i === -1) {
        this.getSearchs(contents)
        arr = this.searchs
      } else {
        switch (this.link) {
          case 'index':
            var newarr = contents.concat()
            newarr.shift()
            arr = newarr
            break
          // case 'cate2':
          //   arr = []
          //   arr.push(this.getCards())
          //   break
          // case 'cate3':
          //   arr = []
          //   arr.push(this.getCards())
          //   break
          default:
            arr = []
            arr.push(this.getCards())
            break
        }
      }
      return arr
    }
  },
  components: {
    Card,
    Button,
    Tooltip
  },
  mounted() {
    this.getParams()
  },
  methods: {
    getCards() {
      return contents.find(card => {
        return card.link === this.link
      })
    },
    goTo(link) {
      this.$router.replace(link)
      // window.open(link, '_blank');
    },
    getParams() {
      // 取到路由带过来的参数
      this.link = this.$route.params.link
    },
    // 获取当前地址所对应的下标，避免刷新后avtive消失
    getArrayIndex(arr, obj) {
      var i = arr.length
      while (i--) {
        if (arr[i].link === obj) {
          return i
        }
      }
      return -1
    },
    getSearchs(contents) {
      contents.map(item => {
        if (item.children) {
          this.getSearchs(item.children)
        } else {
          if (item.name.indexOf(this.link) !== -1) {
            this.searchs.push(item)
          }
        }
      })
    }
  },
  watch: {
    $route: 'getParams'
  }
}
</script>

<style lang="less">
/* 内容样式 */
#content {
  overflow: scroll;
  height: 790px;
  margin-top: 58px;
  margin-bottom: 400px;
  padding-bottom: 20px;
  width: 100%;
  z-index: -1;
  .el-card__header{
    background-color: white;
  }
  .row {
    margin: 0 auto;
  }
  .box-card {
    margin-top: 20px;
    .card {
      font-weight: bold;
      color: #6b7386;
      font-size: 18px;
    }
    .box-card2 {
      height: 100px;
      cursor: pointer;
      margin-top: 10px;
      img {
        float: left;
        width: 32px;
        height: 32px;
      }
      .referral {
        width: 90%;
        margin: 0 0 0 45px;
        padding-right: 10px;
        span {
          display: block;
          width: 80%;
          color: #6b7386;
          font-size: 16px;
          overflow: hidden; //超出文本隐藏
          white-space: nowrap; //不换行，只显示一行
          text-overflow: ellipsis; //超出部分省略号显示
        }
        p {
          width: 95%;
          color: #abb0bd;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .iconfont {
          position: absolute;
          top: 20px;
          right: 25px;
          width: 18px;
          height: 18px;
        }
        .iconfont:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
