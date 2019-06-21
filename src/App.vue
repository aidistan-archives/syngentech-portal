<template>
  <div id="app">
    <video id="app-background" autoplay muted loop>
      <source src="/digital-dna.webm" type="video/webm">
    </video>

    <el-container id="app-foreground">
      <el-header>
        <el-popover ref="popover" placement="top-start" width="160" trigger="click" v-model="nav">
          <img slot="reference" class="logo" src="/logo-h-white.svg">
          <el-menu id="app-nav" ref="nav" :default-active="navIndex" @select="onSelect">
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="drug-development">新药研发</el-menu-item>
            <el-menu-item index="research-service">科研服务</el-menu-item>
            <el-submenu index="more">
              <template slot="title">关于我们</template>
              <el-menu-item index="about-us">公司简介</el-menu-item>
              <el-menu-item index="management-team">管理团队</el-menu-item>
              <el-menu-item index="our-investors">融资情况</el-menu-item>
              <el-menu-item index="contact-us">联系我们</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-popover>
      </el-header>

      <el-main>
        <router-view @nav="nav = !nav" @nav-index="navIndex = $event"/>
      </el-main>

      <el-footer>版权所有 © 北京合生基因科技有限公司 · 京ICP备14043945号</el-footer>
    </el-container>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'app',
  data () {
    return {
      nav: false,
      navIndex: this.$route.name
    }
  },
  mounted () {
    this.onResize()
    document.getElementById('app-background')
      .addEventListener('canplay', () => this.onResize())
    window.addEventListener('resize', () => this.onResize())

    this.$refs.popover.$on('after-enter', () => this.$refs.nav.open('more'))
    this.$refs.popover.$on('hide', () => this.$refs.nav.close('more'))

    anime({
      targets: '#app-foreground > *',
      opacity: 1
    })
  },
  methods: {
    onResize () {
      this.$el.style.height = window.innerHeight + 'px'

      let video = document.getElementById('app-background')
      let ratio = 596 / 336 // resolution ratio of the video
      video.style.minWidth = window.innerWidth + 'px'
      video.style.minHeight = window.innerHeight + 'px'
      // 596 x 336
      if (window.innerWidth / window.innerHeight > ratio) {
        video.style.left = '0px'
        video.style.top = ((window.innerHeight - window.innerWidth / ratio) / 2) + 'px'
      } else {
        video.style.left = ((window.innerWidth - window.innerHeight * ratio) / 2) + 'px'
        video.style.top = '0px'
      }
    },
    onSelect (key) {
      anime({
        targets: '#app-foreground',
        backgroundColor: 'rgba(0, 0, 0, ' + (key === 'home' ? 0.382 : 0) + ')'
      })
      anime({
        targets: '#app-foreground .el-header',
        height: (key === 'home' ? 85 : 60) + 'px'
      })
      anime({
        targets: '#app-foreground .logo',
        height: (key === 'home' ? 75 : 50) + 'px'
      })

      this.nav = false
      this.$refs.popover.$once('after-leave', () => this.$router.push({ name: key }))
    }
  }
}
</script>

<style lang="scss">
@media screen                        { html { font-size: 1.0em; } }
@media screen and (max-width: 600px) { html { font-size: 0.9em; } }

body {
  margin: 0;
  padding: 0;

  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  color: #efefef;
  overflow: hidden;
}

#app-background {
  position: fixed;
  z-index: 0;
}

#app-foreground {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;

  // Start point of animations
  & > * { opacity: 0; }
  background-color: rgba(0, 0, 0, 0);

  & > .el-header {
    .logo {
      margin-top: 10px;
      height: 50px;
      cursor: pointer;
    }
  }

  & > .el-main {
    margin-bottom: -30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > .el-footer {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    text-align: center;
    font-size: 0.8rem;
    color: rgba(239, 239, 239, 0.618);
  }
}

// The popover will be placed outside #app
.el-popover.el-popper {
  color: #efefef;
  background-color: rgba(0, 0, 0, 0.618);
  border-color: rgba(239, 239, 239, 0.618);
  border-radius: 0.5rem;

  & > .popper__arrow, & > .popper__arrow::after {
    border-bottom-color: rgba(239, 239, 239, 0.382) !important;
  }

  .el-menu {
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
  }

  .el-menu-item, .el-submenu__title {
    height: 2.4rem;
    line-height: 2.4rem;

    color: #efefef;
    font-size: 0.9rem;
    font-weight: bold;

    &:focus, &:hover { background-color: transparent; }

    &::before {
      content: '  ';
      white-space: pre;
      border-left: solid transparent 2px;
    }

    &.is-active::before { border-left-color: #cccccc; }
    &:hover::before, &.is-active:hover::before { border-left-color: #efefef; }
  }
}

#app-foreground > .el-main > div {
  padding: 20px;
  width: 100%;
  max-width: 800px;

  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.618);

  h1 {
    text-align: center;
    font-size: 2rem;
  }
}
</style>
