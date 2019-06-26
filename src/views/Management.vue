<template>
  <div id="management" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1 v-if="$i18n.locale === 'zh'">高管介绍</h1>
      <h1 v-else>Management Team</h1>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="6">
          <el-image :src="images[0]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">谢震, PhD</div>
          <div class="name" v-else>Zhen Xie, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">首席科学家</div>
          <div class="title" v-else>Chief Science Officer</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[1]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">陈彬, PhD</div>
          <div class="name" v-else>Bin Chen, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">首席执行官</div>
          <div class="title" v-else>Chief Executive Officer</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[2]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">蒋云, MBA</div>
          <div class="name" v-else>Yun Jiang, MBA</div>
          <div class="title" v-if="$i18n.locale === 'zh'">首席运营官</div>
          <div class="title" v-else>Chief Operating Officer</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[3]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">陆荫英, PhD</div>
          <div class="name" v-else>Yinying Lu, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">首席医学官</div>
          <div class="title" v-else>Chief Medical Officer</div>
        </el-col>
      </el-row>

      <h1 v-if="$i18n.locale === 'zh'">顾问介绍</h1>
      <h1 v-else>Our Advisors</h1>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="6">
          <el-image :src="images[4]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">张学工, PhD</div>
          <div class="name" v-else>Xuegong Zhang, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">顾问</div>
          <div class="title" v-else>Advisor</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[5]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">李梢, PhD</div>
          <div class="name" v-else>Shao Li, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">顾问</div>
          <div class="title" v-else>Advisor</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[6]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">汪小我, PhD</div>
          <div class="name" v-else>Xiaowo Wang, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">顾问</div>
          <div class="title" v-else>Advisor</div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-image :src="images[7]"></el-image>
          <div class="name" v-if="$i18n.locale === 'zh'">古槿, PhD</div>
          <div class="name" v-else>Jin Gu, PhD</div>
          <div class="title" v-if="$i18n.locale === 'zh'">顾问</div>
          <div class="title" v-else>Advisor</div>
        </el-col>
      </el-row>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'management',
  data () {
    return {
      banner: require('../assets/banner-3.jpg'),
      images: [
        require('../assets/高管-谢震.png'),
        require('../assets/高管-陈彬.png'),
        require('../assets/高管-蒋云.png'),
        require('../assets/高管-陆荫英.png'),
        require('../assets/顾问-张学工.png'),
        require('../assets/顾问-李梢.png'),
        require('../assets/顾问-汪小我.png'),
        require('../assets/顾问-古槿.png')
      ]
    }
  },
  created () {
    this.$emit('nav-index', 'management-team')
  },
  components: { Footer }
}
</script>

<style lang="scss">
#management .content {
  .el-row {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .el-image {
    margin: 30px;
    @media screen and (max-width: 600px) { & { margin: 20px; } }
  }

  .name {
    margin-top: -10px;
    font-weight: bold;
  }

  .name, .title {
    text-align: center;
  }
}
</style>
