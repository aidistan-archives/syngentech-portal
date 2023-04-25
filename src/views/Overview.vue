<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.overview') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>北京合生基因科技有限公司（以下简称“合生基因”）是一家致力于合成生物技术在生物医药领域应用的高新技术企业，于2014年7月成立于中关村生命科学园。合生基因期望利用合成生物技术开发针对癌症、传染病治疗的创新药物和治疗方法。通过理性设计构建新型基因、RNA核酸药物，提高药物研发成功率、有效性和安全性。</p>
        <p>公司自主研发的以合成生物学为基础的智能靶向肿瘤基因治疗药物，现已获得FDA与NMPA一期临床批件，是全球首个利用合成基因路线智能识别和治疗肝癌的基因治疗药物。除此之外公司，还将研发管线扩展至环状RNA药物、重大传染病和兽用mRNA疫苗等领域。</p>
        <ul>
          <li>愿景：创新合成生物技术，加速基因药物开发，守护生命健康</li>
          <li>使命：可编程基因药物技术开拓者和应用推动者</li>
          <li>价值观：以人为本，至诚守信，和合共生，守正出新</li>
        </ul>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>Beijing SyngenTech Co., LTD. (Hereinafter referred to as SyngenTech) is a domestic leading national high-tech enterprise, which is dedicated to the application of synthetic biology in the fields of biomedicine and life health. SyngenTech is focuses on the research and development process of gene and cell therapeutics based on synthetic biology, as well as scientific research and clinical services.</p>
        <p>Synthetic biology is a burgeoning interdisciplinary subject that has just developed since the beginning of this century. It based on the understanding of the law of life, to build and optimize biological systems that process information, make materials, produces energy, provide food, improve human health and the environment using the idea of engineering and information technology by artificially designing, manufacturing or modifying biological molecules such as DNA. Thereby, it has become one of the most concerned frontier subjects in the field of life science.</p>
        <p>Based on our own team and technical advantages, SyngenTech has been gradually established: the intelligent tumor targeted genetic therapeutics platform, the development of genetic therapeutic platform, the genetic therapeutic translational medicine platform and the synthetic biology technology service platform. SyngenTech has been following closely of the latest advance of technology in the world. SyngenTech is gradually building into an enterprise of innovation and R&D of synthetic biology technology, which based on synthetic biology and information technology, also set the R&D of biological drugs for new varieties, the preparation process study, the Clinical trial management and the Innovative technical services in one. It has made a profound contribution to solving the malignancy and treating an inherited disorder.</p>
        <p>SyngenTech holds the occupational concept of "protect life with innovation, foresight makes the future", creating the drugs and treatment with independence knowledge property of China. Doing its best to create Chinese own hard biotechnology. It aims to use Chinese wisdom to help people keep away from disease and pain, also protect human.</p>
        <ul>
          <li>Vision: Protect life with innovation, foresight makes the future.</li>
          <li>Mission: Doing our best to create Chinese own hard biotechnology</li>
          <li>Core Value: Take the principle of people oriented, sincere and trustworthy, peaceful coexistence, following traditions while making innovations.</li>
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
