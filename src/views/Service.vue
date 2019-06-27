<template>
  <div id="service" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.service') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>合生基因科研服务部致力于为全球生命科学研究者和医务工作者提供世界一流的个性化合成生物学技术服务与科研产品。我们针对基础和临床科研两大应用场景，搭建合成生物学技术驱动型平台，为客户提供基因元件设计构建、病毒载体包装及基因功能分析验证三类核心服务和产品。</p>

        <h2>基础科研服务</h2>
        <p>基因功能研究是生命科学研究基石。基本的研究闭环需要包含基因元件组装设计及规划、病毒载体包装和基因功能的分析验证。我们为您提供基础科研过程中需要的基因载体、病毒及细胞功能实验在内的全套合成生物学服务。</p>

        <h2>临床肿瘤学科研服务</h2>
        <p>恶性肿瘤已成为危害人民健康和生命的主要疾病，居死亡病因中的首位，成为人类的主要杀手。因此肿瘤学研究是当前生物科学和医学研究的重点领域之一。我们为您提供不同肿瘤模型的基因功能研究，包括肿瘤细胞克隆形成能力、增殖、凋亡、周期、迁移及侵袭等多个方向。合生基因具有完备的生产平台，支持个性化服务，全面满足您的科研需求。</p>
        <p>确定肿瘤类型和兴趣基因后，我们为您提供多样化的细胞水平检测，包括细胞克隆形成能力、周期、凋亡、增殖、迁移、侵袭等多项综合实验服务。</p>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>Scientific Research Services department of Beijing Syngentech Co., LTD. is committed to providing the leading edge personalized synthetic biology technology services and research products to life science researchers and medical practitioner worldwide. We aim at the two major application scenarios: basic and clinical research, build a synthetic biology technology-driven platform, and provide customers with three core services and products: Genetic Circuits construction, viral vector packaging and gene function analysis.</p>

        <h2>Service for Basic Research</h2>
        <p>Gene function is the cornerstone of life science research. A basic research needs to include genetic circuits design and construction, viral vector packaging, and gene function analysis. We provide a pack of synthetic biology services, including genetic circuits, vrius and cell function experiments, covered in a basic research workflow.</p>

        <h2>Integrated Service for Clinical Cancer Research</h2>
        <p>In 2015, about 90.5 million people had cancer. About 14.1 million new cases occur a year (not including skin cancer other than melanoma). It caused about 8.8 million deaths (15.7% of deaths). Therefore, oncology research is one of the major areas of current life science and medical research. We provide integrated service of clinical cancer research for different tumor models, including tumor cell clonality, proliferation, apoptosis, cell cycle, migration and invasion. Beijing Syngentech Co., LTD. has a complete research platform, which can fully support your personalized research.</p>
        <p>After determining the tumor type and interest gene, we provide you with integrated services of clinical cancer research, including cell clone formation ability, cycle, apoptosis, proliferation, migration, invasion and many other comprehensive experimental assays.</p>
      </template>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'service',
  data () {
    return {
      banner: require('../assets/banner-2.jpg')
    }
  },
  computed: {
    title () {
      return this.$t('nav.service') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'research-service')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  },
  components: { Footer }
}
</script>
