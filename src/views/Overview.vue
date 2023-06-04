<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.overview') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>北京合生基因科技有限公司（以下简称“合生基因”）是一家致力于合成生物技术在生物医药领域应用的高新技术企业，于2014年7月成立于中关村生命科学园。合生基因期望利用合成生物技术开发针对癌症、传染病治疗的创新药物和治疗方法。通过理性设计构建新型基因、RNA核酸药物，提高药物研发成功率、有效性和安全性。</p>
        <p>公司自主研发的以合成生物学为基础的智能靶向肿瘤基因治疗药物，现已进入一期临床阶段，是全球首个利用合成基因路线智能识别和治疗甲胎蛋白阳性实体瘤的基因治疗药物。除此之外，公司还将研发管线扩展至环状RNA药物、兽用mRNA疫苗等领域。</p>
        <ul>
          <li>愿景：创新合成生物技术，加速基因药物开发，守护生命健康</li>
          <li>使命：可编程基因药物技术开拓者和应用推动者</li>
          <li>价值观：以人为本，至诚守信，和合共生，守正出新</li>
        </ul>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>Founded in July 2014 in Zhongguancun Life Science Park Beijing, SyngenTech Co., LTD. (Hereinafter referred to as SyngenTech) is dedicated to drive innovations in synthetic biology to develop novel gene therapies for cancer and infectious diseases.</p>
        <p>SynOV1.1, a targeted tumor gene therapy drug, has been approved by FDA and NMPA for Phase I clinical trial, which is the first gene therapy drug that uses synthetic gene circuit to control virus replication in alpha-fetoprotein-positive tumors. Currently, SyngenTech has expanded its R&D pipeline to mRNA and circRNA drugs and vaccines.</p>
        <ul>

          <li>Vision： Innovative synthetic biotechnology, accelerate gene drug development, protect life and health.</li>
          <li>Mission：A pioneer for programmable gene therapy enabled by innovations in synthetic biology.</li>
          <li>Core Value： People oriented, sincere and trustworthy, peaceful coexistence, following traditions while making innovations.</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg')
    }
  },
  computed: {
    title () {
      return this.$t('nav.overview') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'overview')
  }
}
</script>
