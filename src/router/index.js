import Vue from 'vue'
import Router from 'vue-router'
import details from '../components/content'
import test from '../components/test'
import toolsDvideo from '../components/cate2/tools-dvideo'
import wallpaper from '../components/cate2/wallpaperOpen'
import csearch from '../components/cate2/csearchOpen'
import FartMp3 from '../components/cate2/FartMp3'
import wallpaperRandom from '../components/cate2/wallpaperRandom'
import headRandom from '../components/cate2/headRandom'
import sayingRandom from '../components/cate2/sayingRandom'
import baiduHelp from '../components/cate2/baiduHelpOpen'
import alipay from '../components/cate2/alipay'
import alipayQRCode from '../components/cate2/alipayQRCode'
import videoParse from '../components/cate2/videoParse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details/:link',
      component: details
    },
    {
      path: '/',
      redirect: '/details/index'
    },
    {
      path: '/toolsDvideo',
      component: toolsDvideo
    },
    {
      path: '/wallpaper',
      component: wallpaper
    },
    {
      path: '/csearch',
      component: csearch
    },
    {
      path: '/FartMp3',
      component: FartMp3
    },
    {
      path: '/wallpaperRandom',
      component: wallpaperRandom
    },
    {
      path: '/headRandom',
      component: headRandom
    },
    {
      path: '/sayingRandom',
      component: sayingRandom
    },
    {
      path: '/baiduHelp',
      component: baiduHelp
    },
    {
      path: '/alipay',
      component: alipay
    },
    {
      path: '/alipayQRCode',
      component: alipayQRCode
    },
    {
      path: '/videoParse',
      component: videoParse
    },
    {
      path: '/test',
      component: test
    }
  ]
})
