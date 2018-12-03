import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

// const whiteList = ['/my'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          next()
        })
      } else {
        next()
      }
    }
  } else {
    if (to.matched.length >= 2) {
      next('/my')
    } else {
      next()
    }
  }
  // next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  //   // NProgress.done()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
