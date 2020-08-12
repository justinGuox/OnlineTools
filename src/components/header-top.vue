<template>
  <div>
    <div id="header">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              class="navbar-toggle collapsed iconfont iconcaidan"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              type="button"
            >
              <span class="sr-only navbar-left">切换导航</span>
              <span class="icon-bar navbar-left"></span>
              <span class="icon-bar navbar-left"></span>
              <span class="icon-bar navbar-left"></span>
            </button>
            <a class="navbar-brand" href="javascript:void(0);"></a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav">
              <li
                v-for="(navbarNav, index) in contents"
                :key="index"
                :class="currentClass(index)"
                @click="onselect(index, navbarNav.link)"
              >
                <a>
                  {{ navbarNav.name }}
                </a>
              </li>
              <li class="iconfont iconsearch" @click="searchSetType()"></li>
              <div class="search">
                <input ref="input" type="text" placeholder="请输入搜索词" />
                <a @click="search()"><span>搜索</span></a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import { contents } from '../config/config'

export default {
  data() {
    return {
      contents,
      searchType: 'none',
      currentNumber: -1 // 用来判断active样式类是否显示
    }
  },
  components: {},
  computed: {},
  methods: {
    onselect(index, link) {
      this.currentNumber = index
      this.$router.push({
        path: `/details/${link}`
      })
    },
    currentClass(index) {
      this.currentNumber = this.getArrayIndex(contents, this.$route.params.link)
      // console.log('当前下标' + this.currentNumber)
      return [this.currentNumber === index ? 'active' : '']
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
    searchSetType() {
      const search = document.querySelector('.search')
      if (this.searchType === 'none') {
        this.searchType = 'block'
        search.style.display = this.searchType
      } else {
        this.searchType = 'none'
        search.style.display = this.searchType
      }
    },
    search() {
      const input = this.$refs.input.value
      this.$router.push({
        path: `/details/${input}`
      })
    }
  }
}
</script>

<style lang="less">
  /* 头部样式 */
  #header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: white;
    height: 58px;

    .navbar {
      width: 1220px;
      margin: auto;
      background-color: white;

      .navbar-toggle {
        position: fixed;
        right: 0;
      }

      .navbar-brand {
        background-image: url('../assets/logo.png');
        width: 140px;
        height: 56px;
        background-size: 140px 56px;
      }

      .container-fluid {
        .navbar-collapse {
          overflow: hidden;

          ul {
            position: relative;

            .active {
              a:before {
                transform: scale3d(1, 1, 1);
                color: #ed6d00;
              }
            }

            li {
              a:before {
                position: absolute;
                z-index: 1;
                left: 0px;
                bottom: 0px;
                display: inline-block;
                height: 3px;
                width: 100%;
                background-color: #ed6d00;
                content: '';
                transform: scale3d(0, 1, 1);
                transform-origin: left;
                transition: all 0.5s;
              }
            }

            li:hover {
              cursor: pointer;

              a:before {
                transform: scale3d(1, 1, 1);
                color: #ed6d00;
              }
            }
          }

          .iconfont {
            position: absolute;
            right: -50px;
            width: 50px;
            height: 50px;
            font-size: 30px;
            line-height: 50px;
          }

          .search {
            display: none;
            position: absolute;
            right: -290px;
            top: 8px;
            background-color: white;
            height: 40px;
            padding: 8px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);

            a > span {
              display: inline-block;
              width: 50px;
              background-color: white;
              text-decoration: none;
              font-weight: 500;
              letter-spacing: 2px;
              color: #5a84a2;
              font-size: 18px;
              border-radius: 5px;
              box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
                -2px -2px 12px rgba(255, 255, 255, 0.5),
              inset 2px 2px 4px rgba(255, 255, 255, 0.1),
              2px 2px 8px rgba(0, 0, 0, 0.15);
            }

            a > span:hover {
              cursor: pointer;
              box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
                inset -2px -2px 12px rgba(255, 255, 255, 0.5),
              inset 2px 2px 4px rgba(255, 255, 255, 0.1),
              inset 2px 2px 8px rgba(0, 0, 0, 0.15);
            }
          }
        }
      }
    }
  }

  /* 头部样式结束 */
</style>
