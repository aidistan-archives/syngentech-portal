<template>
  <div id="contact" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.contact') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>北京合生基因科技有限公司（以下简称“合生基因”）是一家致力于合成生物技术在生物医药领域应用的高新技术企业，期望利用合成生物技术开发针对癌症、传染病治疗的创新药物和治疗方法。</p>
        <ul>
          <li>公司网站：<a href="http://syngen.tech">https://syngen.tech</a></li>
          <li>联系地址：北京市昌平区生命科学园医科路9号院1号楼601室</li>
          <li>邮政编码：102206</li>
          <li>联系电话：+86-010-80767988</li>
          <li>电子邮箱：<ul>
            <li>服务：service@syngen.tech</li>
            <li>招聘：hr@syngen.tech</li>
          </ul></li>
          <li><el-row type="flex">
            微信公众号：
            <el-image style="width: 100px; height: 100px" :src="weixin"></el-image>
          </el-row></li>
        </ul>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>
          Beijing SyngenTech Co., LTD. is a biotech company to drive innovations
          in synthetic biology to develop novel nucleic acid drugs for cancer
          and infectious diseases.
        </p>
        <ul>
          <li>Website: <a href="https://syngen.tech">https://syngen.tech</a></li>
          <li>Address: Room 601, Building 1, No. 9 Medical Science Road, Life Science Park, Changping District, Beijing</li>
          <li>Postal code: 102206</li>
          <li>Telephone: +86-010-80767988</li>
          <li>Email: <ul>
            <li>Customer Service: service@syngen.tech</li>
            <li>Recruitment Call: hr@syngen.tech</li>
          </ul></li>
          <li><el-row type="flex">
            WeChat Media Platform：
            <el-image style="width: 100px; height: 100px" :src="weixin"></el-image>
          </el-row></li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg'),
      weixin: require('@/assets/contact-weixin.jpg')
    }
  },
  computed: {
    title () {
      return this.$t('nav.contact') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'contact')
  }
}
</script>
