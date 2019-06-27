<template>
  <div id="app">
    <div :class="{ header: true, home: navHome }">
      <div class="content">
        <div class="logo" :style="{ backgroundImage: 'url(' + logoSource[navHome] +')' }"></div>

        <el-menu
          :text-color="navHome ? '#efefef' : '#111111'"
          :active-text-color="navHome ? '#39b9e6' : '#90268e'"
          mode="horizontal" menu-trigger="click"
          :default-active="navIndex" @select="onSelect"
        >
          <el-menu-item index="home">{{ $t('nav.home') }}</el-menu-item>
          <el-menu-item index="biopharma">{{ $t('nav.biopharma') }}</el-menu-item>
          <el-menu-item index="research-service">{{ $t('nav.service') }}</el-menu-item>
          <el-submenu index="more" :popper-class="navHome && 'home'">
            <template slot="title">{{ $t('nav.more.title' )}}</template>
            <el-menu-item index="about-us">{{ $t('nav.more.about') }}</el-menu-item>
            <el-menu-item index="management-team">{{ $t('nav.more.management') }}</el-menu-item>
            <el-menu-item index="our-investors">{{ $t('nav.more.investors') }}</el-menu-item>
            <el-menu-item index="contact-us">{{ $t('nav.more.contact') }}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="$i18n.locale === 'en'" index="zh">汉</el-menu-item>
          <el-menu-item v-else index="en">En</el-menu-item>
        </el-menu>
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
  },
  methods: {
    onSelect (key) {
      if (key === 'zh' || key === 'en') {
        this.$i18n.locale = key
      } else {
        this.$router.push({ name: key })
      }
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.page {
  & > .el-image {
    width: 100%;
    height: 100px;
  }

  & > h1 {
    text-align: center;
  }
}

.content {
  max-width: 900px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  * + h1 {
    margin-top: 60px;
  }

  * + h2 {
    margin-top: 40px;
  }

  p {
    text-indent: 2em;
    line-height: 1.5em;
  }

  li {
    line-height: 1.5em;
  }
}

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .header {
    width: 100%;
    height: 100px;
    background-color: white;

    &.home {
      position: fixed;
      top: 0;
      z-index: 2;

      background-color: transparent;
      .content { max-width: inherit; }
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }

    .logo {
      height: 60px;
      width: 200px;

      background-size: cover;
      background-position: left;
      background-repeat: no-repeat;
    }

    .el-menu {
      background-color: transparent;
      border-color: transparent;
    }

    .el-menu-item, .el-submenu__title {
      height: 2rem;
      line-height: 2rem;
      padding: 0 5px;
      margin: 0 15px;

      color: #efefef;
      font-size: 0.9rem;
      font-weight: bold;

      &:focus, &:hover { background-color: transparent; }
    }

    @media screen and (max-width: 700px) {
      & { height: 50px; }
      .content { padding: 10px; }
      .logo { height: 2rem; width: 2rem; }
      .el-menu-item, .el-submenu__title { margin: 0 5px; }
    }
  }
}

.el-menu--popup {
  width: 150px;
  min-width: 0 !important;
}

.el-menu--horizontal.home {
  .el-menu--popup, .el-menu-item {
    background-color: transparent !important;
  }
}
</style>
