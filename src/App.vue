<template>
  <div id="app">
    <div class="header">
      <div :class="{ 'header-content': true, 'max-width': !navHome }">
        <img class="logo" :src="logoSource[navHome]" />

        <!-- <el-menu text-color="#fff" active-text-color="#39b9e6"
          mode="horizontal" :default-active="navIndex" @select="onSelect">
          <div>English</div>
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
        </el-menu> -->
      </div>
    </div>

    <transition name="fade">
      <router-view @nav-index="navIndex = $event"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navMode: 'white',
      navIndex: this.$route.name,
      navColor: {
        true: '#efefef',
        false: '#111111'
      },
      logoSource: {
        true: require('@/assets/logo-h-white.svg'),
        false: require('@/assets/logo-h.svg')
      }
    }
  },
  computed: {
    navHome () { return this.navIndex === 'home' }
  },
  mounted () {
    document.getElementById('preloader').remove()
    document.title = 'SyngenTech'
  },
  methods: {
    onSelect (key) {
      this.$router.push({ name: key })
    }
  }
}
</script>

<style lang="scss">
@media screen                        { html { font-size: 1.0em; } }
@media screen and (max-width: 600px) { html { font-size: 0.9em; } }

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
  }

  .header-content {
    &.max-width { max-width: 1000px; }
    padding: 20px;
    margin-left: auto;
    margin-right: auto;

    img {
      height: 60px;
    }

    .el-menu {
      float: right;
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

      border-bottom: solid transparent 2px;

      &.is-active { border-bottom-color: #cccccc; }
      &:hover, &.is-active:hover { border-bottom-color: #efefef; }
    }
  }
}

// #app-foreground > .el-main > div {
//   padding: 20px;
//   width: 100%;
//   max-width: 800px;
//
//   overflow-y: auto;
//   overflow-x: hidden;
//   background-color: rgba(0, 0, 0, 0.618);
//
//   h1 {
//     text-align: center;
//     font-size: 2rem;
//   }
// }
</style>
