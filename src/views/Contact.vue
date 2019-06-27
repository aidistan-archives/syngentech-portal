<template>
  <div id="contact" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.more.contact') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>北京合生基因科技有限公司（以下简称“合生基因”）是国内领先的致力于合成生物学在生物医药和生命健康领域应用的国家级高新技术企业，专注于基于合成生物学技术的基因与细胞治疗药物研发及科研与临床服务。</p>
        <ul>
          <li>公司网站：<a href="http://syngen.tech">http://syngen.tech</a></li>
          <li>联系地址：北京市昌平区回龙观镇生命园路20号院8幢7号区域（昌平示范园）</li>
          <li>邮政编码：102206</li>
          <li>联系电话：<ul>
            <li>销售热线：400-680-3200</li>
            <li>联系热线：+86-010-80767807</li>
            <li>招聘热线：+86-010-80767807-852/826/817</li>
          </ul></li>
          <li>电子邮箱：<ul>
            <li>客服部：service@syngen.tech</li>
            <li>人力资源部：hr@syngen.tech</li>
          </ul></li>
          <li>其它联系地址：<ul>
            <li>上海：上海张江高科技园区金科路4560号金创大厦1号楼南楼5楼</li>
            <li>重庆：重庆市北碚区</li>
          </ul></li>
        </ul>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>Beijing SyngenTech Co., LTD. (Hereinafter referred to as SyngenTech) is a domestic leading national high-tech enterprise, which is dedicated to the application of synthetic biology in the fields of biomedicine and life health. SyngenTech is focuses on the research and development process of gene and cell therapeutics based on synthetic biology, as well as scientific research and clinical services.</p>
        <ul>
          <li>Website: <a href="http://syngen.tech">http://syngen.tech</a></li>
          <li>Address: Region 7, Building 8, No. 20 Life Science Park Road, Huilongguan, Changping District, Beijing</li>
          <li>Postal code: 102206</li>
          <li>Telephone: <ul>
            <li>Sales: 400-680-3200</li>
            <li>Service: +86-010-80767807</li>
            <li>Human Resources: +86-010-80767807-852/826/817</li>
          </ul></li>
          <li>Email: <ul>
            <li>Customer Service: service@syngen.tech</li>
            <li>Human Resources: hr@syngen.tech</li>
          </ul></li>
          <li>Branch Office: <ul>
            <li>ShangHai: 5th floor, South Building, No. 1, Jinchuang, 4560 Jinke Road, Zhangjiang Hi-tech Park</li>
            <li>ChongQing: Beibei District</li>
          </ul></li>
        </ul>
      </template>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'contact',
  data () {
    return {
      banner: require('../assets/banner-3.jpg')
    }
  },
  created () {
    this.$emit('nav-index', 'contact-us')
  },
  components: { Footer }
}
</script>
