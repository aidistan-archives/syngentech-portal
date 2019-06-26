<template>
  <div id="investors" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.more.investors') }}</h1>

      <el-timeline>
        <el-timeline-item timestamp="2018年" placement="top">
          <el-card>
            <h4 v-if="$i18n.locale === 'zh'">PreB轮：君岳共享</h4>
            <h4 v-else>Series Pre-B funding: JUN YUE PE FUND</h4>
            <el-image :src="images[2]" height="60px"></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017年" placement="top">
          <el-card>
            <h4 v-if="$i18n.locale === 'zh'">A轮：荷塘创投（前启迪创投），格致噗</h4>
            <h4 v-else>Series A funding: LOTUS LAKE VENTURES, GOZAP VENTURES</h4>
            <el-image :src="images[0]" height="60px"></el-image>
            <el-image :src="images[1]" height="60px"></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2016年" placement="top">
          <el-card>
            <h4 v-if="$i18n.locale === 'zh'">天使轮</h4>
            <h4 v-else>Angel round</h4>
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
  .el-timeline-item__timestamp,
  .el-timeline-item__content {
    color: inherit;
  }

  .el-timeline-item{
    .el-image { height: 50px; }
    .el-image + .el-image { margin-left: 20px; }
  }
}
</style>
