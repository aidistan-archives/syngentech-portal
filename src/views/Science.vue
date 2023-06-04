<i18n>
en:
  p1: "Synthetic gene parts, circuits and delivery vectors are designed using computation-assisted methods to build programmable gene therapies."
  t2: "Synov oncolytic virus platform"
  p2: "Synov is an oncolytic adenovirus therapy platform developed by SyngenTech for logical gene circuit-based regulation. Its first product, Synov1.1, is a gene therapy product targeting alpha-fetoprotein positive solid tumours. This innovative drug is designed with the idea of synthetic biology and uses artificial gene circuits to identify multiple biomarkers in tumour cells, regulate their targeting tumour specificity, secrete immune factors to stimulate the anti-tumour immune response and improve tumour killing ability and clinical application safety. By October 2021, SynOV1.1 has obtained the approval for Phase I clinical trial from China's National Medical Products Administration (NMPA) and the United States Food and Drug Administration (FDA). At present, the Phase I clinical trial in China is in progress."
  t3: "mRNA sequence design and optimization"
  p3: "mRNA is an important drug carrier form that expresses effector proteins through translation. Different mRNA sequences have large differences in stability, translation efficiency and immunogenicity. We use artificial intelligence models (AI) to optimize the mRNA sequences. The optimized mRNA can produce higher levels of effector proteins, thereby achieving lower mRNA dosage, lower safety risks, and higher efficacy."
  t4: "Circular RNA drug platform"
  p4: "Circular RNA is an important drug carrier form that has multiple advantages compared to mRNA: (1) Better stability and longer protein expression duration; (2) No need for capping, tailing and nucleotide modification; (3) Can achieve higher expression and precise regulation through optimize IRES. We have established a mature circular RNA design and production platform, a high-expression IRES sequence database and patented IRES regulation technology."
zh:
  p1: "采用计算辅助的方法，设计人工基因元件、线路和递送载体，构建可编程基因药物。"
  t2: "SynOV 溶瘤病毒平台"
  p2: "SynOV是合生基因开发的通过逻辑基因线路调控的溶瘤腺病毒治疗药物平台。其首款产品SynOV1.1是靶向甲胎蛋白阳性实体瘤的基因治疗产品。该创新药采用合成生物学思想设计，利用人工基因线路识别肿瘤细胞内多个生物标志物，调控其靶向肿瘤特异性，分泌免疫因子刺激抗肿瘤免疫反应，提高肿瘤杀伤能力和临床应用安全性。截止2021年10月已获得中国国家药品监督管理局（NMPA）、美国食品药品监督管理局（FDA）临床许可，目前国内一期临床正在进行中。"
  t3: "mRNA 药物平台"
  p3: "mRNA是重要的药物载体形式，通过翻译表达出效应蛋白，不同mRNA序列其稳定性、翻译效率及免疫原性差异很大，我们从这三个角度，利用人工智能模型（AI）进行设计优化，优化后的mRNA可生产出更高水平的效应蛋白，从而实现降低mRNA用量，降低安全风险，提高作用效果。"
  t4: "环状 RNA 药物平台"
  p4: "环状RNA是重要的药物载体形式，相比较于mRNA，具有多方面优势：（1）稳定性更好，蛋白表达持续时间更长；（2）无需加帽、加尾及核苷酸修；（3）可通过IRES实现更强表达及精确调控。我们已建立成熟的环状RNA设计与生产平台、高表达IRES序列库以及创新IRES调控技术。"
</i18n>

<template>
  <div id="science" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.science') }}</h1>
      <p>{{ $t('p1') }}</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[0]" style="max-width: 640px"></el-image>
      </div>

      <h2>{{ $t('t2') }}</h2>
      <p>{{ $t('p2') }}</p>
      <div style="margin-top: 30px; text-align: center">
        <el-image :src="images[1]" style="max-width: 640px"></el-image>
      </div>

      <h2>{{ $t('t3') }}</h2>
      <p>{{ $t('p3') }}</p>

      <h2>{{ $t('t4') }}</h2>
      <p>{{ $t('p4') }}</p>
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
        require('../assets/science-0.png'),
        require('../assets/science-1.jpg'),
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
  }
}
</script>
