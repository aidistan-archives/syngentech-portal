<i18n>
en:
  cb:
    name: Bin Chen, PhD
    title: Chief Executive Officer
  jy:
    name: Yun Jiang, MBA
    title: Chief Operating Officer
  xz:
    name: Zhen Xie, PhD
    title: Chief Science Officer
  lyy:
    name: Yinying Lu, PhD
    title: Chief Medical Officer
  zxg:
    name: Xuegong Zhang, PhD
    title: Advisor
  ls:
    name: Shao Li, PhD
    title: Advisor
  wxw:
    name: Xiaowo Wang, PhD
    title: Advisor
  gj:
    name: Jin Gu, PhD
    title: Advisor
zh:
  cb:
    name: 陈彬, PhD
    title: 首席执行官
  jy:
    name: 蒋云, MBA
    title: 首席运营官
  xz:
    name: 谢震, PhD
    title: 首席科学家
  lyy:
    name: 陆荫英, PhD
    title: 首席医学官
  zxg:
    name: 张学工, PhD
    title: 顾问
  ls:
    name: 李梢, PhD
    title: 顾问
  wxw:
    name: 汪小我, PhD
    title: 顾问
  gj:
    name: 古槿, PhD
    title: 顾问
</i18n>

<template>
  <div id="management" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col :xs="12" :sm="6">
          <el-image :src="images[1]"></el-image>
          <div class="name">{{ $t('cb.name') }}</div>
          <div class="title">{{ $t('cb.title') }}</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[2]"></el-image>
          <div class="name">{{ $t('jy.name') }}</div>
          <div class="title">{{ $t('jy.title') }}</div>
        </el-col>
      </el-row>

      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col :xs="12" :sm="6">
          <el-image :src="images[0]"></el-image>
          <div class="name">{{ $t('xz.name') }}</div>
          <div class="title">{{ $t('xz.title') }}</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[3]"></el-image>
          <div class="name">{{ $t('lyy.name') }}</div>
          <div class="title">{{ $t('lyy.title') }}</div>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="12" :sm="6">
          <el-image :src="images[4]"></el-image>
          <div class="name">{{ $t('zxg.name') }}</div>
          <div class="title">{{ $t('zxg.title') }}</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[5]"></el-image>
          <div class="name">{{ $t('ls.name') }}</div>
          <div class="title">{{ $t('ls.title') }}</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[6]"></el-image>
          <div class="name">{{ $t('wxw.name') }}</div>
          <div class="title">{{ $t('wxw.title') }}</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[7]"></el-image>
          <div class="name">{{ $t('gj.name') }}</div>
          <div class="title">{{ $t('gj.title') }}</div>
        </el-col>
      </el-row>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'management',
  data () {
    return {
      banner: require('../assets/banner-3.jpg'),
      images: [
        require('../assets/高管-谢震.png'),
        require('../assets/高管-陈彬.png'),
        require('../assets/高管-蒋云.png'),
        require('../assets/高管-陆荫英.png'),
        require('../assets/顾问-张学工.png'),
        require('../assets/顾问-李梢.png'),
        require('../assets/顾问-汪小我.png'),
        require('../assets/顾问-古槿.png')
      ]
    }
  },
  computed: {
    title () {
      return this.$t('nav.more.management') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'management-team')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  },
  components: { Footer }
}
</script>

<style lang="scss">
#management .content {
  .el-row {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .el-image {
    margin: 30px;
    @media screen and (max-width: 600px) { & { margin: 20px; } }
  }

  .name {
    margin-top: -10px;
    font-weight: bold;
  }

  .name, .title {
    text-align: center;
  }
}
</style>
