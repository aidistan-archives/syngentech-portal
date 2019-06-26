import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Biopharma from './views/Biopharma.vue'
import Contact from './views/Contact.vue'
import Investors from './views/Investors.vue'
import Management from './views/Management.vue'
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
    path: '/biopharma',
    name: 'biopharma',
    component: Biopharma
  }, {
    path: '/research-service',
    name: 'research-service',
    component: Service
  }, {
    path: '/about-us',
    name: 'about-us',
    component: About
  }, {
    path: '/management-team',
    name: 'management-team',
    component: Management
  }, {
    path: '/our-investors',
    name: 'our-investors',
    component: Investors
  }, {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact
  }]
})
