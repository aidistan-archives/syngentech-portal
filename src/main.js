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
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    en: {
      nav: {
        home: 'Home',
        biopharma: 'Biopharma',
        service: 'Service',
        more: {
          title: 'About',
          about: 'About Us',
          management: 'Management Team',
          investors: 'Our Investors',
          contact: 'Contact Us'
        }
      },
      footer: {
        phone: 'Phone: 010-80767807, 400-680-3200',
        email: 'Email: service@syngen.tech',
        address: 'Address: Region 7, Building 8, No. 20 Life Science Park Road, Huilongguan, Changping District, Beijing',
        copyright: 'All rights reserved © Beijing Syngentech Co., LTD.'
      },
      home: {
        title: 'Explore the power of life',
        subtitle: 'Enabling biomedical innovation with information technology'
      },
      about: {
        p1: 'Beijing SyngenTech Co., LTD. (Hereinafter referred to as SyngenTech) is a domestic leading national high-tech enterprise, which is dedicated to the application of synthetic biology in the fields of biomedicine and life health. SyngenTech is focuses on the research and development process of gene and cell therapeutics based on synthetic biology, as well as scientific research and clinical services.',
        p2: 'Synthetic biology is a burgeoning interdisciplinary subject that has just developed since the beginning of this century. It based on the understanding of the law of life, to build and optimize biological systems that process information, make materials, produces energy, provide food, improve human health and the environment using the idea of engineering and information technology by artificially designing, manufacturing or modifying biological molecules such as DNA. Thereby, it has become one of the most concerned frontier subjects in the field of life science. ',
        p3: 'Based on our own team and technical advantages, SyngenTech has been gradually established: the intelligent tumor targeted genetic therapeutics platform, the development of genetic therapeutic platform, the genetic therapeutic translational medicine platform and the synthetic biology technology service platform. SyngenTech has been following closely of the latest advance of technology in the world. SyngenTech is gradually building into an enterprise of innovation and R&D of synthetic biology technology, which based on synthetic biology and information technology, also set the R&D of biological drugs for new varieties, the preparation process study, the Clinical trial management and the Innovative technical services in one. It has made a profound contribution to solving the malignancy and treating an inherited disorder. ',
        p4: 'SyngenTech holds the occupational concept of "protect life with innovation, foresight makes the future", creating the drugs and treatment with independence knowledge property of China. Doing its best to create Chinese own hard biotechnology. It aims to use Chinese wisdom to help people keep away from disease and pain, also protect human.',
        i1: 'Vision: Protect Life with Innovation, Foresight Makes the Future',
        i2: 'Mission: Doing its best to create Chinese own hard biotechnology',
        i3: 'Core Value: Take the Principle of People Oriented, Sincere and Trustworthy, Peaceful Coexistence , Basing on the Tradition and making Innovations.'
      },
      ...enLocale
    },
    zh: {
      nav: {
        home: '首页',
        biopharma: '新药研发',
        service: '科研服务',
        more: {
          title: '关于我们',
          about: '公司简介',
          management: '管理团队',
          investors: '融资情况',
          contact: '联系我们'
        }
      },
      footer: {
        phone: '联系热线：010-80767807, 400-680-3200',
        email: '服务邮箱：service@syngen.tech',
        address: '公司地址：北京市昌平区回龙观镇生命园路20号院8幢7号区域',
        copyright: '版权所有 © 北京合生基因科技有限公司 · 京ICP备14043945号'
      },
      home: {
        title: '探索生命的力量',
        subtitle: '用信息技术赋能生物医药创新'
      },
      about: {
        p1: '北京合生基因科技有限公司（以下简称“合生基因”）是国内领先的致力于合成生物学在生物医药和生命健康领域应用的国家级高新技术企业，专注于基于合成生物学技术的基因与细胞治疗药物研发及科研与临床服务。',
        p2: '合成生物学是进入本世纪以来刚刚发展起来的一门新兴交叉学科，它是在基于对生命规律认识的基础上，利用工程化思想和信息技术，通过人工方式设计、制造或改造DNA等生物分子，来构建和优化生物系统，使其能够处理信息、制造材料、生产能源、提供食物、改善人类健康和环境等，已经成为生命科学中最受关注的前沿学科方向之一。',
        p3: '合生基因基于自身团队与技术优势，现已逐步搭建：智能靶向肿瘤基因治疗药物平台、基因治疗药物工艺开发平台、基因治疗药物转化医学平台、合成生物学技术服务平台。合生基因紧跟世界前沿，正逐步建立建设成为一家以合成生物学与信息技术为底盘的，集生物药物新品种研发、工艺研究、临床实验管理、创新技术服务于一体的合成生物学技术创新与研发的企业，为解决恶性肿瘤、治疗遗传疾病做出深远贡献。',
        p4: '合生基因秉持“创新守护生命，远见成就未来”的从业理念，创造具有中国自主知识产权的药物与治疗方案，不遗余力做中国人自己的生物硬科技，旨在用中国智造帮助人民远离疾病与痛苦，用中国智慧守护人类健康。',
        i1: '愿景：创新守护生命，远见成就未来',
        i2: '使命：做中国人自己的生物硬科技',
        i3: '核心价值观：以人为本，至诚守信；和合共生，守正出新'
      },
      ...zhLocale
    }
  }
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
