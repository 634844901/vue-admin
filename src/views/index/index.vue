<template>
  <div id="wrapper">
    <div id="bg"/>
    <div id="overlay"/>
    <div id="main">

      <!-- Header -->
      <header id="header">
        <h1>Adam Jensen</h1>
        <p>Security Chief &nbsp;&bull;&nbsp; Cyborg &nbsp;&bull;&nbsp; Never asked for this</p>
        <nav>
          <ul>
            <li><a href="#" class="fa fa-twitter"><span>Twitter</span>
              <p style="font-size: 16px;">Twitter</p>
            </a></li>
            <li><a class="fa fa-facebook" @click="login" ><span>主页</span>
              <p style="font-size: 16px;">管理页面</p>
            </a></li>
            <li><a href="#" class="fa fa-dribbble"><span>Dribbble</span>
              <p style="font-size: 16px;">Dribbble</p>
            </a></li>
            <li><a href="#" class="fa fa-github"><span>Github</span>
              <p style="font-size: 16px;">Github</p>
            </a></li>
            <li><a href="#" class="fa fa-envelope-o"><span>Email</span>
              <p style="font-size: 16px;">Email</p>
            </a></li>
          </ul>
        </nav>
      </header>

      <!-- Footer -->
      <footer id="footer">
        <span class="copyright">&copy; Untitled. Design.</span>
      </footer>

    </div>
  </div>
</template>

<script>
import login from './js/init'
export default {
  name: 'Index',
  mounted() {
    login()
  },
  methods: {
    login() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
  @import '../../styles/css/skel.css';
  @import '../../styles/css/style.css';
  @import '../../styles/css/style-wide.css';
  @import '../../styles/css/style-noscript.css';
</style>
