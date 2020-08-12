<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="blogroll">
            <strong>友情链接</strong>
            <a
              v-for="(blogroll, index) in blogrolls"
              :key="index"
              :href="blogroll.link"
              target="_blank"
              >{{ blogroll.name }}</a
            >
          </div>
          <hr />
          <div class="row">
            <div class="
                col-xs-4
                col-sm-10
                col-md-12
                col-lg-12">
              <div class="footer-copyright">
                本站内容采自互联网，如果某些内容侵犯了你的权益，请立即联系我，我将尽快删除相关内容，联系邮箱：admin@xiniantool.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogrolls } from '../config/config'
export default {
  data() {
    return {
      blogrolls
    }
  }
}
</script>

<style lang="less">
/* 尾部样式 */
#footer {
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  bottom: 0;
  height: 100px;
  background-color: white;
  .container {
    width: 1220px;
    .row {
      margin-top: 10px;
    }
    .blogroll {
      color: #6b7386;
      background-color: white;
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
      margin-top: 10px;
      .col-md-1 {
        padding-right: 3px;
        cursor: default;
      }
      a {
        padding: 10px;
        margin: 3px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 16px;
      }
      a:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1),
          0 6px 20px 0 rgba(0, 0, 0, 0.1);
        color: #878787;
        cursor: pointer;
      }
    }
    .footer-copyright {
      margin-top: -15px;
      font-size: 12px;
      color: #6b7386;
    }
  }
}
</style>
