import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // locale: 'zh', // only used for SPA prerender
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    en: {
      title: 'SyngenTech',
      nav: {
        home: 'Home',
        about: {
          title: 'About',
          about: 'About Us',
          team: 'Our Team',
          investors: 'Our Investors',
          awards: 'Awards',
          contact: 'Contact Us'
        },
        news: 'News',
        biopharma: {
          title: 'Science & Pipeline',
          synbio: 'Synthetic Biology',
          science: 'Our Science',
          pipeline: 'Product Pipeline'
        },
        clinical: 'Clinical Trials',
        service: 'Service'
      },
      copyright: 'All rights reserved © Beijing Syngentech Co., LTD. · <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>',
      ...enLocale
    },
    zh: {
      title: '合生基因',
      nav: {
        home: '首页',
        about: {
          title: '关于我们',
          about: '公司简介',
          team: '领导团队',
          investors: '融资情况',
          awards: '荣誉资质',
          contact: '联系我们'
        },
        news: '新闻资讯',
        biopharma: {
          title: '科学与产品管线',
          synbio: '合成生物学背景',
          science: '我们的科学',
          pipeline: '产品管线'
        },
        clinical: '临床研究',
        service: '科研服务'
      },
      copyright: '版权所有 © 北京合生基因科技有限公司 · <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>',
      ...zhLocale
    }
  },
  silentFallbackWarn: true
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
