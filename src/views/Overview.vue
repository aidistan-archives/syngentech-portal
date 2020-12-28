<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.overview') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>北京合生基因科技有限公司（以下简称“合生基因”）是致力于合成生物学在生物医药和生命健康领域应用的国家高新技术企业，专注于基于合成生物学技术的基因与细胞治疗药物研发及科研与临床服务。</p>
        <p>合成生物学是进入本世纪以来刚刚发展起来的一门新兴交叉学科，它是在基于对生命规律认识的基础上，利用工程化思想和信息技术，通过人工方式设计、制造或改造DNA等生物分子，来构建和优化生物系统，使其能够处理信息、制造材料、生产能源、提供食物、改善人类健康和环境等，已经成为生命科学中最受关注的前沿学科方向之一。</p>
        <p>合生基因基于自身团队与技术优势，现已逐步搭建：智能靶向肿瘤基因治疗药物平台、基因治疗药物工艺开发平台、基因治疗药物转化医学平台、合成生物学技术服务平台。合生基因紧跟世界前沿，正逐步建立建设成为一家以合成生物学与信息技术为底盘的，集生物药物新品种研发、工艺研究、临床实验管理、创新技术服务于一体的合成生物学技术创新与研发的企业，为解决恶性肿瘤、治疗遗传疾病做出深远贡献。</p>
        <p>合生基因秉持“创新守护生命，远见成就未来”的从业理念，创造具有中国自主知识产权的药物与治疗方案，不遗余力做中国人自己的生物硬科技，旨在用中国智造帮助人民远离疾病与痛苦，用中国智慧守护人类健康。</p>
        <ul>
          <li>愿景：创新守护生命，远见成就未来</li>
          <li>使命：做中国人自己的生物硬科技</li>
          <li>核心价值观：以人为本，至诚守信；和合共生，守正出新</li>
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
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
