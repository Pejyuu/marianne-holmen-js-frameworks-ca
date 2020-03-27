import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import Game from './Game.vue'
import Contact from './Contact.vue'

// Vue Resource for handling API Requests
import VueResource from 'vue-resource'
Vue.use(VueResource);



// BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './style.css'

Vue.config.productionTip = false


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/game/:id',
      name: 'Game',
      component: Game
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
