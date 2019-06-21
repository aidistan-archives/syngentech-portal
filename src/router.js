import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/drug-development',
    name: 'drug-development',
    component: Home
  }, {
    path: '/research-service',
    name: 'research-service',
    component: Home
  }, {
    path: '/about-us',
    name: 'about-us',
    component: About
  }, {
    path: '/management-team',
    name: 'management-team',
    component: Home
  }, {
    path: '/our-investors',
    name: 'our-investors',
    component: Home
  }, {
    path: '/contact-us',
    name: 'contact-us',
    component: Home
  }]
})
