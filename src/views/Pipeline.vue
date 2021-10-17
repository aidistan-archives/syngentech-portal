<i18n>
en:
  pipeline_prods:
    - ["<b>SynOV 1.1</b><br>HCC", 4]
    - ["<b>SynOV 1.2</b><br>HCC", 1]
    - ["<b>SynOV 1.3</b><br>HCC", 1]
    - ["<b>SynOV 2</b><br>GC", 0]
    - ["<b>SynOV 3</b><br>PAC", 0]
    - ["<b>SynOV 4</b><br>BRCA", 0]
    - ["<b>SynCAR-M</b><br>HCC", 0]
    - ["<b>SynSCAd</b><br>(Platform)", 0]
  pipeline_steps: ["Pre-study", "CMC", "PK/PD", "IND", "Phase I", "Phase II", "Phase III"]
zh:
  pipeline_prods:
    - ["<b>SynOV 1.1</b><br>肝癌", 4]
    - ["<b>SynOV 1.2</b><br>肝癌", 1]
    - ["<b>SynOV 1.3</b><br>肝癌", 1]
    - ["<b>SynOV 2</b><br>胃癌", 0]
    - ["<b>SynOV 3</b><br>胰腺癌", 0]
    - ["<b>SynOV 4</b><br>乳腺癌", 0]
    - ["<b>SynCAR-M</b><br>肝癌", 0]
    - ["<b>SynSCAd</b><br>(平台)", 0]
  pipeline_steps: ["前期研究", "药学研究", "药理研究", "临床申请", "临床I期", "临床II期", "临床III期"]
</i18n>

<template>
  <div id="pipeline" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div class="content">
      <h1>{{ $t('nav.pipeline') }}</h1>

      <div>
        <el-steps
          v-for="(p, i) in $t('pipeline_prods')" :key="i" :active="p[1]"
          process-status="process" finish-status="success"
        >
          <div v-html="p[0]"></div>
          <template v-for="(s, i) in $t('pipeline_steps')">
            <el-step v-if="i != p[1]" :key="i" :title="s"></el-step>
            <el-step v-else :key="i" :title="s"  icon="el-icon-video-play"></el-step>
          </template>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pipeline',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg')
    }
  },
  computed: {
    title () {
      return this.$t('nav.pipeline') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'pipeline')
  }
}
</script>

<style lang="scss">
#pipeline {
  .el-steps {
    & > div:first-child {
      min-width: 90px;
      margin-right: 10px;
      text-align: center;
    }

    .el-step__icon.is-icon { width: auto; color: #409EFF; }
    .el-step__title { visibility: hidden; }
  }

  .el-steps:last-child {
    .el-step__title {
      color: #303133;
      font-weight: 500;
      visibility: visible;
    }
  }
}
</style>
