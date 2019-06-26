<template>
  <div id="biopharma" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.biopharma') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <h2>溶瘤病毒</h2>
        <p>溶瘤病毒是一类野生病毒或基因修饰病毒，可以选择性地杀伤癌细胞。溶瘤病毒是一种活体药物，在正常组织细胞内不会复制，但是在恶性肿瘤组织内可以复制并杀伤癌细胞。溶瘤病毒可以通过三个途径抵抗恶性肿瘤：</p>
        <ol>
          <li>直接杀伤。溶瘤病毒可以在感染后直接通过选择性复制杀伤癌细胞；</li>
          <li>引发局部和系统性的抗肿瘤免疫反应。溶瘤病毒可以间接激活机体抗肿瘤免疫反应；</li>
          <li>溶瘤病毒是完美的基因递送载体，可以表达例如炎性因子或T细胞公测及分子等蛋白，进一步增强抗肿瘤免疫。</li>
        </ol>

        <h2>合成生物学</h2>
        <p>合成生物学是工程化的生物学，整合了生物工程、进化生物学、分子生物学、系统生物学、生物物理学、计算机工程和遗传工程等学科的交叉学科。</p>

        <h2>SynOV 智能靶向肿瘤基因治疗药物平台</h2>
        <p>传统方式的药物开发需要漫长的研发周期，通过该在多种潜在活性药物中进行大量筛选出针对单一靶点发挥作用的药物。利用合成生物学指导的药物研发是通过理性设计药物，降低了研发成本。结合具体疾病针对多靶点组合，通过逻辑编程改造药物，提高了活体药物的精准性。</p>
        <p>合生基因基于自主研发的专利技术搭建了智能靶向肿瘤基因治疗药物平台(SynOV)。利用识别多个肿瘤特征的逻辑线路控制溶瘤腺病毒的复制，裂解肿瘤细胞，同时表达多种效应因子激活机体抗肿瘤免疫。基于SynOV平台，通过更换逻辑线路和效应因子，我们可以快速构建针对不同肿瘤的溶瘤病毒。</p>
      </template>

      <template v-else>
        <h2>Oncolytic viruses</h2>
        <p>Oncolytic viruses are native or genetically modified viruses that selectively replicate within tumors and kill cancer cells. As replicating biotherapeutics, the OV is unable to replicate in normal tissues and yet retains the ability to replicate within and kill cancer cells. Oncolytic viruses promote anti-tumour responses through a triple mechanism of action:</p>
        <ol>
          <li>Direct cancer cell lysis. Oncolytic viruses propagate and selective kill tumour cells following viral infection.</li>
          <li>Induction of local and systemic anti-tumour immunity. The therapeutic efficacy of oncolytic viruses is also determined indirect activation of anti‐tumour immune responses. </li>
          <li>OVs can be a perfect platforms of therapeutic gene delivery. Engineered oncolytic viruses encoding pro-inflammatory cytokines and/or T cell co‐stimulatory molecules can more effectively stimulate anti‐tumour immune responses. </li>
        </ol>

        <h2>Synthetic biology</h2>
        <p>Synthetic biology is the engineering of biology, combining disciplines such as biotechnology, evolutionary biology, molecular biology, systems biology, biophysics, computer engineering, and genetic engineering.</p>

        <h2>SynOV Genetic Circuit Guided Oncolytic Viruses Platform</h2>
        <p>Traditional drug development model is unsustainable due to long research and development cycle, through which tremendous potential active drugs would be screened for just a single therapeutic target. However, synthetic biology offers both computational and experimental tools that help to reduces the cost of research and development by rational design of biotherapeutics. Biologics drugs guided by genetic circuit will act more precisely with multi-target design strategy.</p>
        <p>  SynOV is a cancer gene therapy platform constructed by Syngentech.co. We have constructed oncolytic virus guided by genetic circuit which can identify tumour cells with a combination of specific markers. Viral replication regulators produced from the circuit can initiate the lytic cycle of engineered adenovirus. Furthermore, therapeutic proteins such as cytokines or immune modulators encoded by adenoviral genome will be released into tumor microenvironment and induce anti‐tumour immunity. Based on SynOV platform, adenovirus re-engineered to target any types of cancer can be designed and manufactured very efficiently by replacing the genetic circuit or therapeutic protein module.</p>
      </template>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'biopharma',
  data () {
    return {
      banner: require('../assets/banner-1.jpg')
    }
  },
  created () {
    this.$emit('nav-index', 'biopharma')
  },
  components: { Footer }
}
</script>

<style lang="scss">
#biopharma {
}
</style>
