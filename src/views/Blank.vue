<i18n>
en:
  _title: 'Blank'
  subtitle: 'This is a blank page for demo use'
zh:
  _title: '空白'
  subtitle: '本页面仅作测试之用'
</i18n>

<template>
  <div id="blank" class="page">
    <div class="title">{{ $t('_title') }}</div>
    <div class="subtitle">{{ $t('subtitle') }}</div>
  </div>
</template>

<script>
export default {
  name: 'blank',
  computed: {
    title () {
      return this.$t('_title') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'blank')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>

<style lang="scss">
#blank {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 80px);

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .subtitle {
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }

  .title, .subtitle {
    font-family: titleFont;
    color: #aaa;
    text-align: center;
  }
}
</style>
