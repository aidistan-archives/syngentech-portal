import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Blank from '@/views/Blank.vue'
import Overview from '@/views/Overview.vue'
import Teammates from '@/views/Teammates.vue'
import Investors from '@/views/Investors.vue'
import Awards from '@/views/Awards.vue'
import Contact from '@/views/Contact.vue'
import News from '@/views/News.vue'
import Synbio from '@/views/Synbio.vue'
import Science from '@/views/Science.vue'
import Pipeline from '@/views/Pipeline.vue'
// import Clinical from '@/views/Clinical.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/blank',
    name: 'blank',
    component: Blank
  }, {
    path: '/overview',
    name: 'overview',
    component: Overview
  }, {
    path: '/teammates',
    name: 'teammates',
    component: Teammates
  }, {
    path: '/investors',
    name: 'investors',
    component: Investors
  }, {
    path: '/awards',
    name: 'awards',
    component: Awards
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }, {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/synbio',
    name: 'synbio',
    component: Synbio
  }, {
    path: '/science',
    name: 'science',
    component: Science
  }, {
    path: '/pipeline',
    name: 'pipeline',
    component: Pipeline
  }, {
    path: '/clinical',
    name: 'clinical',
    component: Blank // Clinical
  }]
})
