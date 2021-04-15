import Vue from 'vue'
import VueRouter from "vue-router";
// import Vuex from 'vuex'
import axios from 'axios'

import App from './App.vue'
import routes from './router/router'

Vue.use(VueRouter)
// Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
