import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about/About.vue'
import Awards from './views/about/Awards.vue'
import Contact from './views/about/Contact.vue'
import Investors from './views/about/Investors.vue'
import Team from './views/about/Team.vue'
import Biopharma from './views/Biopharma.vue'
import Service from './views/Service.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about-us',
    name: 'about-us',
    component: About
  }, {
    path: '/team',
    name: 'team',
    component: Team
  }, {
    path: '/our-investors',
    name: 'our-investors',
    component: Investors
  }, {
    path: '/awards',
    name: 'awards',
    component: Awards
  }, {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact
  }, {
    path: '/biopharma',
    name: 'biopharma',
    component: Biopharma
  }, {
    path: '/research-service',
    name: 'research-service',
    component: Service
  }]
})
