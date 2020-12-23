<i18n>
en:
  _title: "Exploring the Power of Life"
  subtitle: 'Enabling Biomedical Innovation with Synthetic Biological Technology'
zh:
  _title: '探索生命的力量'
  subtitle: '用合成生物学技术赋能生物医药创新'
</i18n>

<template>
  <div id="home">
    <video id="home-video" muted loop :poster="video.poster">
      <source :src="video.webm" type="video/webm">
      <source :src="video.mp4" type="video/mp4">
    </video>

    <div class="dimmer">
      <div class="title">{{ $t('_title') }}</div>
      <div class="subtitle">{{ $t('subtitle') }}</div>
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
  computed: {
    title () {
      return this.$t('title') + ' | ' + this.$t('_title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'home')
  },
  mounted () {
    this.onResize()
    document.getElementById('home-video')
      .addEventListener('canplay', () => this.onResize())
    window.addEventListener('resize', () => this.onResize())
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
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

      video[window.innerWidth < 600 ? 'pause' : 'play'].bind(video)()
    }
  }
}
</script>

<style lang="scss">
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
    color: #efefef;
    font-size: 3.2rem;
    line-height: 1.1em;
    text-shadow: 0px 0px 5px #999;
  }

  .subtitle {
    padding-top: 0.5em;
    color: #aaaaaa;
    font-size: 1.6rem;
  }

  .title, .subtitle {
    text-align: center;
    font-family: titleFont;
  }
}
</style>
