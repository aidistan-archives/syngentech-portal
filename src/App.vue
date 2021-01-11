<template>
  <div id="app">
    <Header :index.sync="navIndex" />
    <transition name="fade">
      <router-view @nav-index="navIndex = $event"/>
    </transition>
    <Footer :index.sync="navIndex" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data () {
    return {
      navIndex: this.$route.name
    }
  },
  mounted () {
    document.getElementById('preloader').remove()
  },
  components: { Header, Footer }
}
</script>

<style lang="scss">
@font-face { font-family: titleFont; src: url('./assets/title-font.ttf'); }
@import "utils.scss";

html {
  font-size: 0.9em;
  @include for-desktop-up { font-size: 1em; }
}

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

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.page {
  & > .el-image {
    width: 100%;
    height: 100px;
  }
}

.content {
  max-width: $breakpoint-desktop;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  h1, h2, h3 {
    padding: 6px 20px;
  }

  h1 { border-left: solid #90268e 5px; }
  h2 { border-left: solid #39b9e6 5px; }
  h3 { border-left: solid #999999 5px; }

  * + h1,
  * + h2 { margin-top: 1em; }

  p, li {
    line-height: 1.5em;
  }

  &.zh p {
    text-indent: 2em;
  }
}
</style>
