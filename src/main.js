import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import I18n from 'vue-i18n'
import elementLocaleEn from 'element-ui/lib/locale/lang/en'
import elementLocaleZh from 'element-ui/lib/locale/lang/zh-CN'
import App from '@/App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(I18n)
Vue.use(Element, { i18n: (key, value) => i18n.t(key, value) })

const i18n = new I18n({
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    en: {
      title: 'SyngenTech',
      nav: {
        home: 'Home',
        //
        about: 'Our Company',
        overview: 'Overview',
        teammates: 'Our Team',
        investors: 'Our Investors',
        awards: 'Our Awards',
        contact: 'Contact Us',
        //
        news: 'Newsroom',
        //
        biopharma: 'Science',
        synbio: 'Synthetic Biology',
        science: 'Our Science',
        //
        pipeline: 'Pipeline',
        //
        clinical: 'Clinical Trials',
        //
        service: 'Services'
      },
      ...elementLocaleEn
    },
    zh: {
      title: '合生基因',
      nav: {
        home: '首页',
        //
        about: '关于我们',
        overview: '公司简介',
        teammates: '领导团队',
        investors: '融资情况',
        awards: '荣誉资质',
        contact: '联系我们',
        //
        news: '新闻资讯',
        //
        biopharma: '科学与研发',
        synbio: '合成生物学',
        science: '药物研发',
        //
        pipeline: '产品管线',
        //
        clinical: '临床研究',
        //
        service: '科研服务'
      },
      ...elementLocaleZh
    }
  },
  silentFallbackWarn: true
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
