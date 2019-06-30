<i18n>
en:
  _0: "Scientific Research Services department of Beijing Syngentech Co., LTD. is committed to providing the leading edge personalized synthetic biology technology services and research products to life science researchers and medical practitioner worldwide. We aim at the two major application scenarios: basic and clinical research, build a synthetic biology technology-driven platform, and provide customers with three core services and products: Genetic Circuits construction, viral vector packaging and gene function analysis."
  _1:
    h: "Service for Basic Research"
    p: "Gene function is the cornerstone of life science research. A basic research needs to include genetic circuits design and construction, viral vector packaging, and gene function analysis. We provide a pack of synthetic biology services, including genetic circuits, vrius and cell function experiments, covered in a basic research workflow."
    _:
      - h: "Design and Construction of Genetic Circuits"
        p: "Progress of synthetic biology has provided life science research genetic parts with excellent performance. Using modular genetic parts such as promoters, terminators, enhancers, and resistance genes, we can accomplish gene silencing and gene editing more precisely and efficiently in vivo."
        _:
          - h: Gene Silencing
            _:
              - miRNA sponge
              - shRNA
              - Transcriptional Inhibition
          - h: Gene Editing
            _:
              - CRISPR/Cas
              - gRNA Library
              - Base Editor
          - h: Gene Over-expression
            _:
              - Heterologous Gene Expression
              - Transcriptional Activation
      - h: "Virus Packaging"
        p: "Virus are highly efficient vector for cell transfection of genetic circuits. We apply the most advance virus packaging technology, covering three major viral vectors: lentivirus, adenovirus and adeno-associated virus, ensuring accountable stability, robustness and rapid response."
        _:
          - h: Lentivirus
          - h: Adenovirus
          - h: Adeno-associated Virus
      - h: "Gene Function Analysis"
        p: "Gene functional analysis is critical for life science. Variations of cellular metabolism are abundantly characterized. Precise detection of these indicators facilitates accurate evaluation of biological function of genes and explores the pathway mechanisms of cellular phenotype."
        _:
          - h: Construction of Cell Line
          - h: Cell Colonies Assay
          - h: Cell Proliferation Assay
          - h: Cell Apoptosis Assay
          - h: Cell Cycle Assay
          - h: Cell Migration Assay
          - h: Cell Invasion Assay
          - h: Dual-Luciferase Reporter Assay
  _2:
    h: "Integrated Service for Clinical Cancer Research"
    p1: "In 2015, about 90.5 million people had cancer. About 14.1 million new cases occur a year (not including skin cancer other than melanoma). It caused about 8.8 million deaths (15.7% of deaths). Therefore, oncology research is one of the major areas of current life science and medical research. We provide integrated service of clinical cancer research for different tumor models, including tumor cell clonality, proliferation, apoptosis, cell cycle, migration and invasion. Beijing Syngentech Co., LTD. has a complete research platform, which can fully support your personalized research."
    p2: "After determining the tumor type and interest gene, we provide you with integrated services of clinical cancer research, including cell clone formation ability, cycle, apoptosis, proliferation, migration, invasion and many other comprehensive experimental assays."
zh:
  _0: "合生基因科研服务部致力于为全球生命科学研究者和医务工作者提供世界一流的个性化合成生物学技术服务与科研产品。我们针对基础和临床科研两大应用场景，搭建合成生物学技术驱动型平台，为客户提供基因元件设计构建、病毒载体包装及基因功能分析验证三类核心服务和产品。"
  _1:
    h: "基础科研服务"
    p: "基因功能研究是生命科学研究基石。基本的研究闭环需要包含基因元件组装设计及规划、病毒载体包装和基因功能的分析验证。我们为您提供基础科研过程中需要的基因载体、病毒及细胞功能实验在内的全套合成生物学服务。"
    _:
      - h: "基因元件组装设计及规划"
        p: "合成生物学的进步和发展为生命科学研究提供了性能优异的基因元件。借助如启动子、终止子、增强子、抗性基因等模块化的基因元件，我们可以在生物体内精准便捷地实现基因沉默、基因编辑等调控。"
        _:
          - h: 基因沉默
            _:
              - miRNA sponge
              - shRNA
              - 转录抑制
          - h: 基因编辑
            _:
              - CRISPR/Cas
              - gRNA Library
              - Base Editor
          - h: 基因过表达
            _:
              - 外源表达
              - 转录激活
      - h: "病毒载体包装"
        p: "病毒载体可以极大效率提高基因线路感染宿主细胞成功率。我们采用最先进的病毒包装技术，产品涵盖慢病毒、腺病毒、腺相关病毒三大种类，确保提供具有良好稳定性、鲁棒性和快速响应性的病毒载体。"
        _:
          - h: 慢病毒
          - h: 腺病毒
          - h: 腺相关病毒
      - h: "基因功能分析验证"
        p: "基因功能分析验证对于生命科学及其重要。细胞代谢具有丰富的表征形式，精准检测这些指标有利于准确评估基因的生物学功能并探究细胞表型改变的内在通路机制。"
        _:
          - h: 细胞稳转株构建
          - h: 细胞克隆形成能力检测
          - h: 细胞增殖检测
          - h: 细胞凋亡检测
          - h: 细胞周期检测
          - h: 细胞迁移检测
          - h: 细胞侵袭检测
          - h: 双荧光素酶实验
  _2:
    h: "临床肿瘤学科研服务"
    p1: "恶性肿瘤已成为危害人民健康和生命的主要疾病，居死亡病因中的首位，成为人类的主要杀手。因此肿瘤学研究是当前生物科学和医学研究的重点领域之一。我们为您提供不同肿瘤模型的基因功能研究，包括肿瘤细胞克隆形成能力、增殖、凋亡、周期、迁移及侵袭等多个方向。合生基因具有完备的生产平台，支持个性化服务，全面满足您的科研需求。"
    p2: "确定肿瘤类型和兴趣基因后，我们为您提供多样化的细胞水平检测，包括细胞克隆形成能力、周期、凋亡、增殖、迁移、侵袭等多项综合实验服务。"
</i18n>

<template>
  <div id="service" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.service') }}</h1>
      <p>{{ $t('_0') }}</p>

      <h2>{{ $t('_1.h') }}</h2>
      <p>{{ $t('_1.p') }}</p>
      <el-collapse>
        <el-collapse-item v-for="x in $t('_1._')" :title="x.h" :key="x.h">
          <p>{{ x.p }}</p>
          <el-row>
            <el-col v-for="y in x._" :key="y.h" :xs="24" :sm="12" :md="8">
              <el-card>
                <h4>{{ y.h }}</h4>
                <template v-if="y._">
                  <div v-for="z in y._" :key="z">- {{ z }}</div>
                </template>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>

      <h2>{{ $t('_2.h') }}</h2>
      <p>{{ $t('_2.p1') }}</p>
      <p>{{ $t('_2.p2') }}</p>

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

<style lang="scss">
#service {
  .el-col {
    padding: 10px;
  }
}
</style>
