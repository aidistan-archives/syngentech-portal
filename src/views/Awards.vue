<i18n>
en:
  awards:
    - ISO 9001 certification, Oct 2023
    - ISO 14001 certification, Oct 2023
    - ISO 45001 certification, Oct 2023
    - National High-tech Enterprise, Nov 2022
    - Zhongguancun High-tech Enterprise, Aug 2022
    - Capital Science and Technology Platform, Jul 2016
zh:
  awards:
    - 2023年10月，ISO 9001 证书
    - 2023年10月，ISO 14001 证书
    - 2023年10月，ISO 45001 证书
    - 2022年11月，国家高新技术企业
    - 2022年8月，中关村高新技术企业
    - 2016年7月，生物医药领域平台成员单位
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
      for (let i = 0; i < 6; i++) {
        images.push(require(`@/assets/awards/${i}.jpg`))
      }
      return images
    }

    return {
      banner: require('@/assets/banner-3.jpg'),
      images: loadImages()
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
