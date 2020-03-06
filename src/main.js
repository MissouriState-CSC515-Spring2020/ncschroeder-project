import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueOffline from 'vue-offline'

Vue.config.productionTip = false
Vue.use(VueOffline)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
