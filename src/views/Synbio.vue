<template>
  <div id="synbio" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.synbio') }}</h1>
      <p>合成生物学的核心是利用工程学思维方式构建执行特定生物学功能的目标人造复杂生物系统。肿瘤等重大疾病发病机制复杂，异质性高，通过逻辑基因线路调控的复杂生物系统具有更高的解决复杂系统问题的能力。目前，合成生物学正在生物设计、医疗健康、工业化学品、生物燃料、食品及饮料等各个方面展现其应用潜力。</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[0]" style="max-width: 600px"></el-image>
      </div>
      <p>设计·构建·测试·学习循环（DBTL）是合成生物学药物开发的核心研发模式，快速开发、筛选高效药物产品。合生基因已经通过DBTL模式，研发多款基因线路调控的溶瘤病毒和细胞治疗产品。</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[1]" style="max-width: 400px"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'synbio',
  data () {
    return {
      banner: require('@/assets/banner-2.jpg'),
      images: [
        require('@/assets/synbio-0.png'),
        require('@/assets/synbio-1.png')
      ]
    }
  },
  computed: {
    title () {
      return this.$t('nav.synbio') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'synbio')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
