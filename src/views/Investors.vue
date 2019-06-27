<i18n>
en:
  2018: "Series Pre-B Funding: JUN YUE PE FUND"
  2017: "Series A Funding: LOTUS LAKE VENTURES, GOZAP VENTURES"
  2016: "Angel Round"
zh:
  2018: "PreB轮：君岳共享"
  2017: "A轮：荷塘创投（前启迪创投），格致噗"
  2016: "天使轮"
</i18n>

<template>
  <div id="investors" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.more.investors') }}</h1>

      <el-timeline>
        <el-timeline-item timestamp="2018" placement="top">
          <el-card>
            <h4>{{ $t('2018') }}</h4>
            <el-image :src="images[2]" height="60px"></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017" placement="top">
          <el-card>
            <h4>{{ $t('2017') }}</h4>
            <el-image :src="images[0]" height="60px"></el-image>
            <el-image :src="images[1]" height="60px"></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2016" placement="top">
          <el-card>
            <h4>{{ $t('2016') }}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'investors',
  data () {
    return {
      banner: require('../assets/banner-3.jpg'),
      images: [
        require('../assets/investor-0.png'),
        require('../assets/investor-1.jpg'),
        require('../assets/investor-2.png')
      ]
    }
  },
  created () {
    this.$emit('nav-index', 'our-investors')
  },
  components: { Footer }
}
</script>

<style lang="scss">
#investors {
  .el-timeline-item{
    .el-image { height: 50px; }
    .el-image + .el-image { margin-left: 20px; }
  }
}
</style>
