<i18n>
en:
  awards:
    2014:
      - Awarded "Zhongguancun High-tech Enterprise" since September
    2016:
      - In July, selected as a member of "Capital Science and Technology Platform"
      - Awarded "Zhongguancun Golden Seed Enterprise" since November
      - Awarded as "National High-tech Enterprise" since December
    2017:
      - In April, obtained the "ISO9001 system certification"
      - In August, awarded the certificate of "Beijing New Technology New Product (Service)"
    2018:
      - In June, awarded the "Practice Point of Examiner Practice (Beijing) Base of the State Intellectual Property Office"
      - In October, obtained the support of "New Drug Research and Development Project of Beijing Municipal Commission of Science and Technology Biomedical Department"
      - In December, awarded "Zhongguancun Frontier Technology Enterprise"
    2019:
      - In January, won the trophy of "Best Liaison Officer" awarded by the Capital Science and Technology Platform
      - In March, obtained the project support of "Key Frontier Projects and Innovation Platform Construction of Zhongguancun Demonstration Zone"
      - In August, won the "Star Rank -2019 Top 50 Most Innovative Biomedical Enterprises in China"
    2020:
      - In January, Supported by "National Key Research and Development Program - Preclinical Research on Functional Artificial Immune Molecules"
      - In July, won the award of "Specialized and New" SME in Beijing 2020
      - In September, won the "Most Innovative Value Award - China Biomedical Industry Innovation and Development Conference"
      - In September, Awarded as "2020 Beijing Intellectual Property Pilot Unit"
zh:
  awards:
    2014:
      - 9月起，连续获评“中关村高新技术企业”
    2016:
      - 7月，入选“首都科技条件平台成员单位”
      - 11月起，连续获评“中关村金种子企业”
      - 12月起，连续获评“国家级高新技术企业”
    2017:
      - 4月，获得“ISO9001体系认证”
      - 8月，荣获“北京市新技术新产品（服务）”证书
    2018:
      - 6月，荣获“国家知识产权局审查员实践（北京）基地实践点”
      - 10月，获得“北京市科委生物医药处新药研发”项目支持
      - 12月，获评“中关村前沿技术企业”
    2019:
      - 1月，获得首都科技条件平台颁发“最佳联络员”奖杯
      - 3月，获得“中关村示范区重大前沿项目与创新平台建设”项目支持
      - 8月，获评“星耀榜-2019中国生物医药最具创新力企业50强”
    2020:
      - 1月，获得“国家重点研发计划-功能性人工免疫分子的临床前研究”项目支持
      - 7月，获评“2020年北京市“专精特新”中小企业
      - 9月，获得“最具创新价值奖-中国生物医药产业创新发展大会”
      - 9月，获评“2020年度北京市知识产权试点单位”
</i18n>

<template>
  <div id="awards" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.awards') }}</h1>

      <el-timeline reverse>
        <el-timeline-item
          v-for="(items, year) in $t('awards')" :key="year"
          :timestamp="year" placement="top"
        >
          <el-card>
            <el-carousel indicator-position="outside" type="card">
              <el-carousel-item v-for="(item, index) in items" :key="index">
                <el-card>
                  <div>{{ item }}</div>
                  <el-image :src="images[year][index]" fit="contain"></el-image>
              </el-card>
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'awards',
  data () {
    let loadImages = (year, count) => {
      let images = []
      for (let i = 0; i < count; i++) {
        images.push(require(`@/assets/awards/${year}_${i}.jpg`))
      }
      return images
    }

    return {
      banner: require('@/assets/banner-3.jpg'),
      images: {
        2014: loadImages(2014, 1),
        2016: loadImages(2016, 3),
        2017: loadImages(2017, 2),
        2018: loadImages(2018, 3),
        2019: loadImages(2019, 3),
        2020: loadImages(2020, 4)
      }
    }
  },
  computed: {
    title () {
      return this.$t('nav.awards') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'awards')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>

<style lang="scss">
#awards {
  .el-carousel__item {
    background-color: #fff;

    div { text-align: center; }
    &.is-active div { font-weight: bold; }

    .el-image { height: 200px; }
  }
}
</style>
