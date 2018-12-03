import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import VideoPlayer from 'vue-video-player'
// import videojsContribHls from 'videojs-contrib-hls'
//
// Vue.use(videojsContribHls)
Vue.use(VideoPlayer)
Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
// require('videojs-contrib-hls/dist/videojs-contrib-hls')
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
