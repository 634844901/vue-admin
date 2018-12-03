<template>
  <div v-if="screenWidth" :class="classObj" :style ="note" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="has"/>
    <sidebar class="sidebar-container"/>
    <!--<Sidebar></Sidebar>-->
    <div class="main-container">
      <!--<navbar/>-->
      <!--<app-main/>-->
      <navbar/>
      <app-main class="content"/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      note: {
        backgroundImage: 'url(' + require('../../assets/img/amber.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${document.body.clientWidth}px 180px`,
        'background-position': 'center 0%'
      },
      screenWidth: document.body.clientWidth
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  // mounted () {
  //   const that = this
  //   if(that.screenWidth<500) {
  //     that.note['background-position'] = '-600px 0%'
  //   }else {
  //     that.note['background-position'] = '0% 0%'
  //   }
  //   window.onresize = () => {
  //     return (() => {
  //       window.screenWidth = document.body.clientWidth
  //       that.screenWidth = window.screenWidth
  //     })()
  //   }
  // },
  // watch: {
  //   screenWidth (val) {
  //     if (!this.timer) {
  //       this.screenWidth = val
  //       this.timer = true
  //       let that = this
  //       setTimeout(function () {
  //         // that.screenWidth = that.$store.state.canvasWidth
  //         if(that.screenWidth<500) {
  //           that.note['background-position'] = '-600px 0%'
  //         }else {
  //           that.note['background-position'] = '0% 0%'
  //         }
  //         that.timer = false
  //       }, 400)
  //     }
  //   }
  // },
  methods: {
    has() {
      this.note['background-position'] = '-600px 0%'
    },
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
