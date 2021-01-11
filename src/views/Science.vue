<template>
  <div id="science" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.science') }}</h1>
      <p>目前合生基因已经具备了设计逻辑基因线路和系统改造腺病毒载体的能力，并且将这两方面的技术应用于溶瘤病毒、细胞治疗和疫苗研发等方向。另外，合生正在通过神经网络学习开发新的用于药物发掘的生物元件。</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[0]" style="max-width: 640px"></el-image>
      </div>

      <h2>SynOV溶瘤病毒平台</h2>
      <p>SynOV是合生基因开发的通过逻辑基因线路调控的溶瘤腺病毒治疗药物平台。其首款产品SynOV1.1是靶向甲胎蛋白阳性实体瘤的基因治疗产品。该创新药采用合成生物学思想设计，利用人工基因线路识别肿瘤细胞内多个生物标志物，调控其靶向肿瘤特异性，分泌免疫因子刺激抗肿瘤免疫反应，提高肿瘤杀伤能力和临床应用安全性。该产品于2020年11月27日，获得美国食品药品监督管理局（FDA）批准临床试验申请。</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[1]" style="max-width: 640px"></el-image>
      </div>

      <h2>SynCAR-M细胞治疗平台</h2>
      <p>合生基因开发的SynCAR-M平台利用新型嵌合SC腺病毒载体递送，降低病毒工艺难度和产品开发成本，同时合生团队设计基因线路调控CAR和免疫效应因子的精准表达高效靶向杀伤肿瘤细胞。</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[2]" style="max-width: 640px"></el-image>
      </div>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[3]" style="max-width: 640px"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'science',
  data () {
    return {
      banner: require('../assets/banner-2.jpg'),
      images: [
        require('../assets/science-0.jpg'),
        require('../assets/science-1.jpg'),
        require('../assets/science-2.jpg'),
        require('../assets/science-3.jpg')
      ]
    }
  },
  computed: {
    title () {
      return this.$t('nav.science') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'science')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
