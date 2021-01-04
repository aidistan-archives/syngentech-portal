<template>
  <div id="news" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div v-if="date" :class="['news', 'content', $i18n.locale]">
      <h2>{{ news[date].title }}</h2>
      <div v-html="news[date].content"></div>
      <el-button icon="el-icon-back" round @click="close">返回新闻列表</el-button>
    </div>

    <div v-else :class="['list', 'content', $i18n.locale]">
      <h1>{{ $t('nav.news') }}</h1>
      <el-row
        v-for="(date, index) in Object.keys(news).reverse()" :key="date"
        :gutter="20" @click.native="open(date)"
      >
        <el-col :xs="24" :sm="{span: 12, push: (index % 2) ? 12 : 0}">
          <el-image :src="news[date].cover" fit="cover"></el-image>
        </el-col>
        <el-col :xs="24" :sm="{span: 12, pull: (index % 2) ? 12 : 0}">
          <div class="title">{{ news[date].title }}</div>
          <div class="abstract">{{ news[date].abstract }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import news from '@/news'

export default {
  name: 'news',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg'),
      news
    }
  },
  computed: {
    title () {
      return this.$t('nav.news') + ' | ' + this.$t('title')
    },
    date () {
      return this.$route.query.date
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'news')
  },
  methods: {
    open (date) {
      this.$router.push({ name: 'news', query: { date } })
    },
    close () {
      this.$router.push({ name: 'news' })
    }
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>

<style lang="scss">
@import "@/utils.scss";

#news {
  .list.content{
    .el-row {
      cursor: pointer;
    }

    .el-col {
      margin-bottom: 1rem;
    }

    .el-row + .el-row {
      margin-top: 1rem;
    }

    .title {
      @include line-clamp(2);

      color: #007;
      font-weight: bold;
      line-height: 1.55rem;
    }

    .abstract {
      margin-top: 1rem;
      @include line-clamp(4);

      color: #333;
      line-height: 1.55rem;
    }

    .el-row:hover .title,
    .el-row:hover .abstract { color: #666; }

    .el-image {
      width: 100%;
      height: 10.3rem;
    }
  }

  .news.content {
    max-width: 600px;

    img {
      width: 100%;
    }

    .el-button {
      margin-top: 1rem;
    }
  }
}
</style>
