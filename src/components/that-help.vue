<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <Card class="box-card">
            <div slot="header" class="clearfix">
              <span class="card-title">说明帮助</span>
            </div>
            <div class="row">
                <div class="col-md-11 col-md-offset-1">
                  <ul v-for="(help,index) in helps" :key="index">
                    <li>{{help}}</li>
                  </ul>
                </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
</template>

<script>
import { Card } from 'element-ui'
export default {
  props: {
    helps: Array
  },
  components: {
    Card
  },
  mounted() {
    this.deleteClass()
    this.overflowShow()
  },
  methods: {
    deleteClass() {
      // console.log(this.help)
      const header = document.getElementById('header')
      const footer = document.getElementById('footer')
      if (header) {
        header.parentNode.removeChild(header)
      }
      if (footer) {
        footer.parentNode.removeChild(footer)
      }
    },
    overflowShow() {
      document.body.style.overflow = 'initial'
    }
  }
}
</script>

<style lang="less">
    .row {
      margin-top: 20px;
      .el-card__header {
        background-color: #33cabb;
        .card-title {
          font-family: Roboto,sans-serif;
          font-weight: bold;
          line-height: 1.5;
          margin-bottom: 0;
          color: #fff;
          font-size: 18px;
        }
      }
    }
</style>
