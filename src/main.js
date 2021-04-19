import Vue from 'vue'
import VueRouter from "vue-router";
// import Vuex from 'vuex'
import axios from 'axios'

import App from './App.vue'
import routes from './router/router'
import store from './store/store'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
