import Vue from 'vue'
import App from './App.vue'
import Config from './config'
import router from './router'

Vue.config.productionTip = false
console.log(Config)
Vue.prototype.$assests = Config.assetsUrl

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
