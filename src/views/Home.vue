<i18n>
en:
  title: "Exploring the Power of Life"
  subtitle: 'Enabling Biomedical Innovation with Information Technology'
zh:
  title: '探索生命的力量'
  subtitle: '用信息技术赋能生物医药创新'
</i18n>

<template>
  <div id="home">
    <video id="home-video" autoplay muted loop :poster="video.poster">
      <source :src="video.webm" type="video/webm">
      <source :src="video.mp4" type="video/mp4">
    </video>

    <div class="dimmer">
      <div class="title">{{ $t('title') }}</div>
      <div class="subtitle">{{ $t('subtitle') }}</div>
      <div class="footer">{{ $t('copyright') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      video: {
        poster: require('@/assets/curiosity.jpg'),
        webm: require('@/assets/curiosity.webm'),
        mp4: require('@/assets/curiosity.mp4')
      }
    }
  },
  created () {
    this.$emit('nav-index', 'home')
  },
  mounted () {
    this.onResize()
    document.getElementById('home-video')
      .addEventListener('canplay', () => this.onResize())
    window.addEventListener('resize', () => this.onResize())
  },
  methods: {
    onResize () {
      let ratio = 596 / 336 // resolution ratio of the video
      let video = document.getElementById('home-video')
      if (video === null) return

      video.style.minWidth = window.innerWidth + 'px'
      video.style.minHeight = window.innerHeight + 'px'
      if (window.innerWidth / window.innerHeight > ratio) {
        video.style.left = '0px'
        video.style.top = ((window.innerHeight - window.innerWidth / ratio) / 2) + 'px'
      } else {
        video.style.left = ((window.innerWidth - window.innerHeight * ratio) / 2) + 'px'
        video.style.top = '0px'
      }
    }
  }
}
</script>

<style lang="scss">
@font-face { font-family: titleFont; src: url('../assets/title-font.ttf'); }

#home {
  width: 100%;
  height: 100%;

  video {
    position: fixed;
    z-index: -1;
  }

  .dimmer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.382);
  }

  .title {
    padding-top: 1em;

    line-height: 1.1em;
    font-size: 4rem;
    font-family: titleFont;
    text-shadow: 0px 0px 5px #999;
  }

  .subtitle {
    padding-top: 0.5em;

    font-size: 2rem;
    font-family: titleFont;
    opacity: 0.8;
  }

  .title, .subtitle {
    color: #efefef;
    text-align: center;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.5em;

    color: rgba(239, 239, 239, 0.618);
  }
}
</style>
