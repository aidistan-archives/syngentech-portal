<i18n>
en:
  awards:
    - National High-tech Enterprise, Nov 2022
    - Zhongguancun High-tech Enterprise, Aug 2022
    - \"Specialized and New\" SME, Oct 2020
    - Beijing Intellectual Property Pilot Unit, Sep 2020
    - Zhongguancun Golden Seed Enterprise, Nov 2016
    - Zhongguancun Frontier Technology and Industrial Service Alliance, Jul 2018
    - Capital Science and Technology Platform, Jul 2016
    - Beijing New Technology New Product (Service), Aug 2017
    - ISO 9001 certification, Apr 2017
    - ISO 14001 certification, Dec 2017
    - ISO 18001 certification, Dec 2017
zh:
  awards:
    - 2022年11月，国家高新技术企业
    - 2022年8月，中关村高新技术企业
    - 2020年10月，北京市“专精特新”中小企业
    - 2020年9月，知识产权试点单位
    - 2016年11月，中关村金种子企业
    - 2018年7月，中关村前沿科技与产业服务联盟
    - 2016年7月，生物医药领域平台成员单位
    - 2017年8月，新技术新产品平台服务
    - 2017年4月，ISO 9001 证书
    - 2017年12月，ISO 14001 证书
    - 2017年12月，ISO 18001 证书
</i18n>

<template>
  <div id="awards" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.awards') }}</h1>

      <el-carousel type="card" height="600px" arrow="always">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <el-image :src="image" fit="contain"></el-image>
          <div>{{ $t('awards')[index] }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'awards',
  data () {
    let loadImages = () => {
      let images = []
      for (let i = 0; i < 11; i++) {
        images.push(require(`@/assets/awards/${i}.jpg`))
      }
      return images
    }

    return {
      banner: require('@/assets/banner-3.jpg'),
      images: loadImages(),
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
  }
}
</script>

<style lang="scss">
#awards {
  .el-carousel__item {
    background-color: #fff;

    div { text-align: center; }
    &.is-active div { font-weight: bold; }

    .el-image { height: 540px; }
  }
}
</style>
