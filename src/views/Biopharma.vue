<i18n>
en:
  _0: "Synthetic biology could construct gene circuit using bio-bricks to rewire and reprogram live organisms along with the development of biological and informatics technology. The de novo engineering of genetic circuits, biological modules and synthetic pathways has beginning to address disease problem. Through response to disease biomarkers, the synthetic gene circuit can regulate the dosage, timing and localization of gene expression and therapeutic activity providing new interventions for incurable or difficult-to-treat diseases like cancer."
  _1:
    h: "Gene Therapies"
    p: "Gene therapies is becoming a critical component of the therapeutic armamentarium for a variety of inherited and acquired human diseases. Genetically engineered viral vaccine and immune cells has been successfully used in cancer therapy. And the emerging genome editing technologies like CRISPR will further advance the scope and efficacy of gene therapy approaches."
  _2:
    h: "Cell Therapies"
    p: "Cell therapy is a new area of cancer immuno-therapy involving the infusion of lymphocytes to mediate antitumor effects. The field has rapidly advanced from a promising form of immuno-oncology in preclinical models to the recent commercial approvals of chimeric antigen receptor (CAR) T cells to treat leukemia and lymphoma. The emergence of synthetic biology approaches for cellular engineering is providing us with a broadly expanded set of tools for programming immune cells which can overcome the cell therapy challenges and create more robust, effective adaptive therapies that enable the specific targeting of cancer cells while sparing healthy cells."
  _3:
    h: "Technology Platform"
    p: "Synthetic Inc. integrated biotechnology and information technology to construct a synthetic biological system for the regulation of synthetic gene systems targeting cancer therapy. Synthetic biological systems can effectively improve the efficacy and safety of cancer treatment, providing more survival opportunities for cancer patients."
zh:
  _0: "随着生物技术和信息技术的发展，合成生物学可以利用生物元件构建基因线路改造、编程活的生物体。重新设计基因线路、生物模块和合成途径可以被用于解决重大疾病问题。通过识别疾病生物标志物，合成基因线路可以调节基因表达和治疗活动的剂量、时间和定位，为癌症等无法治愈或难以治疗的疾病提供新的干预手段。"
  _1:
    h: "基因治疗"
    p: "基因治疗正成为治疗各种遗传性和获得性人类疾病的重要手段。基因工程病毒疫苗和免疫细胞已成功地用于癌症治疗。而CRISPR等新兴的基因组编辑技术将进一步推进基因治疗方法的范围和有效性。"
  _2:
    h: "细胞治疗"
    p: "细胞治疗是肿瘤免疫治疗的一个新领域，通过淋巴细胞输注介导抗肿瘤作用。该领域已迅速从临床前的种有希望免疫肿瘤学的模型发展到最近的已经被批准上市的治疗白血病和淋巴瘤嵌合抗原受体(CAR) T细胞。目前新兴的可以用于细胞工程的合成生物学方法为免疫细胞编程提供了一套广泛扩展的工具。合成生物学改造可以克服细胞治疗的现有挑战，创建更强大、更有效的自适应细胞疗法，提高针对癌细胞的靶向性和治疗效果。"
  _3:
    h: "技术平台"
    p: "北京合生基因通过整合生物技术和信息技术，构建基因线路调控的合成生物系统靶向肿瘤治疗。合成生物系统可以有效提高肿瘤治疗效果和安全性为肿瘤患者提供更多生存机会。"
</i18n>

<template>
  <div id="biopharma" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.biopharma') }}</h1>
      <p>{{ $t('_0') }}</p>
      <div style="text-align: center">
        <el-image :src="images[0]" style="max-width: 600px"></el-image>
        <div><small>(Kitada, Tasuku, et. al., Science, 2018)</small></div>
      </div>

      <h2>{{ $t('_1.h') }}</h2>
      <p>{{ $t('_1.p') }}</p>
      <div style="text-align: center">
        <el-image :src="images[1]" style="max-width: 600px"></el-image>
        <div><small>(Dunbar, Cynthia E., et. al., Science, 2018)</small></div>
      </div>

      <h2>{{ $t('_2.h') }}</h2>
      <p>{{ $t('_2.p') }}</p>
      <div style="text-align: center">
        <el-image :src="images[2]" style="max-width: 600px"></el-image>
        <div><small>(June, Carl H., et. al., Science, 2018)</small></div>
      </div>

      <h2>{{ $t('_3.h') }}</h2>
      <p>{{ $t('_3.p') }}</p>
      <div style="text-align: center">
        <el-image :src="images[3]" style="max-width: 600px"></el-image>
      </div>

      <h3>Pipelines</h3>
      <el-steps :active="2" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV 1.1</b><br>{{ $i18n.locale === 'zh' ? '肝癌' : 'HCC' }}
        </div>
        <el-step v-for="i in 6" :key="i"></el-step><el-step title="　　　　"></el-step>
      </el-steps>
      <el-steps :active="1" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV 2</b><br>{{ $i18n.locale === 'zh' ? '肝癌' : 'HCC' }}
        </div>
        <el-step v-for="i in 6" :key="i"></el-step><el-step title="　　　　"></el-step>
      </el-steps>
      <el-steps :active="0" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV 3</b><br>{{ $i18n.locale === 'zh' ? '胃癌' : 'GC' }}
        </div>
        <el-step v-for="i in 6" :key="i"></el-step><el-step title="　　　　"></el-step>
      </el-steps>
      <el-steps :active="0" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV 4</b><br>{{ $i18n.locale === 'zh' ? '胰腺癌' : 'PC' }}
        </div>
        <el-step v-for="i in 6" :key="i"></el-step><el-step title="　　　　"></el-step>
      </el-steps>
      <el-steps :active="0" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV<sub>BM</sub></b><br>{{ $i18n.locale === 'zh' ? '多瘤种' : 'Multi' }}
        </div>
        <el-step v-for="i in 6" :key="i"></el-step><el-step title="　　　　"></el-step>
      </el-steps>
      <el-steps :active="0" process-status="process" finish-status="success">
        <div style="min-width: 90px; margin-right: 10px; text-align: center">
          <b>SynOV<sub>multi</sub></b><br>{{ $i18n.locale === 'zh' ? '多瘤种' : 'Multi' }}
        </div>
        <template v-if="$i18n.locale === 'zh'">
          <el-step title="前期研究"></el-step>
          <el-step title="药学研究"></el-step>
          <el-step title="药理研究"></el-step>
          <el-step title="临床申请"></el-step>
          <el-step title="临床I期"></el-step>
          <el-step title="临床II期"></el-step>
          <el-step title="临床III期"></el-step>
        </template>
        <template v-else>
          <el-step title="Pre-study"></el-step>
          <el-step title=""></el-step>
          <el-step title=""></el-step>
          <el-step title="IND"></el-step>
          <el-step title="Phase I"></el-step>
          <el-step title="Phase II"></el-step>
          <el-step title="Phase III"></el-step>
        </template>
      </el-steps>

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
      banner: require('../assets/banner-1.jpg'),
      images: [
        require('../assets/biopharma-0.png'),
        require('../assets/biopharma-1.png'),
        require('../assets/biopharma-2.png'),
        require('../assets/biopharma-3.png')
      ]
    }
  },
  computed: {
    title () {
      return this.$t('nav.biopharma') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'biopharma')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  },
  components: { Footer }
}
</script>
