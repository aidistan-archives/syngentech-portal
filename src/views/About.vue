<template>
  <div id="about" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.more.about') }}</h1>

      <p>{{ $t('about.p1') }}</p>
      <p>{{ $t('about.p2') }}</p>
      <p>{{ $t('about.p3') }}</p>
      <p>{{ $t('about.p4') }}</p>
      <ul>
        <li>{{ $t('about.i1') }}</li>
        <li>{{ $t('about.i2') }}</li>
        <li>{{ $t('about.i3') }}</li>
      </ul>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'about',
  data () {
    return {
      banner: require('../assets/banner-3.jpg')
    }
  },
  created () {
    this.$emit('nav-index', 'about-us')
  },
  components: { Footer }
}
</script>

<style lang="scss">
#about {
}
</style>
