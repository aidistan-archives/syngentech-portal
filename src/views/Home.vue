<template>
  <div id="home">
    <div class="slogan">信息技术赋能生物医药创新</div>
    <div class="more" @click.stop="$emit('nav')">了解更多 <i class="el-icon-right"></i></div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'home',
  mounted () {
    anime({
      targets: '#app-foreground',
      backgroundColor: 'rgba(0, 0, 0, 0.382)'
    })
    anime({
      targets: '#app-foreground .el-header',
      height: '85px'
    })
    anime({
      targets: '#app-foreground .logo',
      height: '75px'
    })
  }
}
</script>

<style lang="scss">
@font-face { font-family: sloganFont; src: url('/slogan-font.ttf'); }

#home {
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Override styles in App.vue
  padding: 0 !important;
  background-color: transparent !important;

  .slogan {
    padding-top: 1.5em;
    padding-bottom: 0.5em;
    line-height: 1.2em;

    text-align: center;
    font-size: 4rem;
    font-family: sloganFont;
    color: rgba(239, 239, 239, 1);
    text-shadow: 0px 0px 5px #999;
  }

  .more {
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>
