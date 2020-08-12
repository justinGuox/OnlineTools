<template>
    <div class="videoParse">
        <Logo />
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <Card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class="card-title">抖音/西瓜视频批量解析</span>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <Input
                                        type="textarea"
                                        :rows="4"
                                        placeholder="请输入需要解析的链接，可批量复制粘贴，支持携带中文"
                                        v-model="textarea"
                                        @input="input"
                                        @blur="input"
                                ></Input>
                                <Alert v-show="alertShow" title="请输入需要解析的链接"
                                       type="error" show-icon />
                                <div class="select col-md-12">
                                    <div class="el-input-group__prepend col-md-1">请选择解析源：</div>
                                    <Select v-model="selectValue" class="col-md-10">
                                        <Option
                                                v-for="item in select"
                                                :key="item.label"
                                                :label="item.label"
                                                :value="item.label">
                                        </Option>
                                    </Select>
                                </div>
                                <Button type="success plain" @click="jiexi">一键批量解析</Button>
                                <Tooltip
                                        class="item"
                                        effect="dark"
                                        content="根据视频大小，决定获取下载弹窗的速度（视频较大建议手动点击查看下载）"
                                        placement="top"
                                >
                                <Button type="success plain" @click="downVideo">批量下载</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                </div>
                <div class="col-md-10 col-md-offset-1 result" v-show="jiexiResult">
                    <Table :data="jiexiResult.slice((currpage-1)*pagesize,currpage*pagesize)"
                           stripe
                           style="width: 100%"
                    >
                        <TableColumn
                                width="100px"
                                fixed="left"
                                type="index"
                                align="center"
                                label="序号">
                        </TableColumn>
                        <TableColumn
                                fixed="left"
                                align="center"
                                label="视频封面"
                                width="200px">
                            <template slot-scope="scope">
                                <img :src="scope.row.img" :alt="scope.row.title">
                            </template>
                        </TableColumn>
                        <TableColumn prop="title"
                                     fixed="left"
                                     label="视频标题"
                                     align="center">
                        </TableColumn>
                        <TableColumn
                                fixed="right"
                                label="操作"
                                align="center"
                                width="160px"
                                class="col-md-1">
                            <template slot-scope="scope">
                                <a :href="scope.row.video" target="_blank"
                                   class="el-button el-button--text el-button--small">查看</a>
                                <Tooltip
                                        class="item"
                                        effect="dark"
                                        content="建议点击查看，用浏览器自带方法下载"
                                        placement="top"
                                >
                                    <Button @click="downClick(scope.row.video, scope.row.title)" type="text"
                                            size="small">下载
                                    </Button>
                                </Tooltip>
                            </template>
                        </TableColumn>
                    </Table>
                    <Pagination
                            background
                            @current-change="handleCurrentChange"
                            layout="prev, pager, next"
                            :page-size="pagesize"
                            :current-page="currpage"
                            :total="jiexiResult.length"
                            :hide-on-single-page="true"
                    >
                    </Pagination>
                </div>
            </div>
        </div>
        <Help :helps="helps" />
    </div>
</template>

<script>
  import Logo from '../logo'
  import Help from '../that-help'
  import { contents } from '../../config/config'
  import {
    Alert,
    Button,
    Card,
    Input,
    Loading,
    Message,
    Option,
    Pagination,
    Select,
    Table,
    TableColumn,
    Tooltip
  } from 'element-ui'
  import { download, httpString } from '../../tool/tool'
  import { videoResolution } from '../../api/ajax'

  export default {
    data() {
      return {
        textarea: '', //输入的网址信息
        alertShow: false,
        selectValue: '西瓜视频',
        select: [
          {
            label: '西瓜视频'
          }, {
            label: '抖音视频'
          }
        ],
        jiexiResult: [], //解析结果数组
        pagesize: 5, //每页的数据条数
        currpage: 1, //默认开始页面
        helps: [] // 帮助说明
      }
    },
    components: {
      Logo, Help, Card, Input, Button, Alert, Select, Option, Table, TableColumn, Tooltip, Pagination
    },
    mounted() {
      this.getParams()
      this.getHelp()
    },
    methods: {
      input() {
        if (this.textarea === '') {
          this.alertShow = true
        } else {
          this.alertShow = false
        }
      },
      jiexi() {
        this.input()
        if (this.textarea === '') {
          return
        } else {
          let jiexiResult = []
          let results = []
          const loadingInstance = Loading.service(true)
          switch (this.selectValue) {
            case '西瓜视频':
              jiexiResult = httpString(this.textarea, 'ixigua')
              jiexiResult.map((item, index) => {
                videoResolution(item).then((result) => {
                  if (result.data.title) {
                    results.push(result.data)
                  } else {
                    results.push({ video: null, title: `第${index + 1}个网址输入错误，请检查`, img: '' })
                  }
                })
              })
              this.jiexiResult = results
              this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
              break
            case '抖音视频':
              jiexiResult = httpString(this.textarea, 'douyin')
              jiexiResult.map((item, index) => {
                videoResolution(item).then((result) => {
                  if (result.data.title) {
                    results.push(result.data)
                  } else {
                    results.push({ video: null, title: `第${index + 1}个网址输入错误，请检查`, img: '' })
                  }
                })
              })
              this.jiexiResult = results
              this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
              break
          }
        }
      },
      downVideo() {
        if (this.jiexiResult.length === 0) {
          Message.error('请先解析视频！')
        } else {
          this.jiexiResult.map(video => {
            console.log('批量下载开始')
            download(video.video, video.title)
          })
        }
      },
      handleCurrentChange(val) {
        this.currpage = val
      },
      downClick(video, title) {
        console.log('进入下载')
        download(video, title)
      },
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
      }
    }
  }
</script>

<style lang="less">
    .videoParse {
        .container-fluid {

            .el-table {
                margin-top: 20px;
            }

            /*.is-leaf {*/
            /*    // text-align: center;*/
            /*    border: 1px salmon solid;*/
            /*}*/

            .el-table__fixed-body-wrapper {
                .el-table__body {
                    .el-table__row {
                        img {
                            /*border: 1px salmon solid;*/
                            width: 100%;
                            height: 100%;
                        }

                        .el-button {
                            width: 50px;
                            margin: 10px;
                        }
                    }
                }
            }

            .el-pagination {
                background-color: white;
            }

            .el-button {
                margin-top: 20px;
                width: 100%;
                color: white;
                background: #33cabb;
                border-color: #33cabb;
                margin-left: 0;
            }

            .el-button:hover {
                background: transparent;
                color: #33cabb;
            }

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

                .el-select .el-input.is-focus .el-input__inner {
                    border-color: #33cabb;
                }

                .el-input.is-active .el-input__inner, .el-input__inner:focus {
                    border-color: #33cabb;
                    outline: 0;
                }

                .el-input-group__prepend {
                    border: 1px rgb(220, 223, 230) solid;
                    margin-right: 0px;
                    height: 40px;
                    line-height: 40px;
                    width: 121px;
                    padding-right: 0;
                    /*border: none;*/
                }
            }
        }
    }
</style>
