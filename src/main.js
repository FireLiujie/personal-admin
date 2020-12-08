import Vue from 'vue'
import App from './App.vue'
import Config from './config'

Vue.config.productionTip = false
console.log(Config)
Vue.prototype.$assests = Config.assetsUrl

new Vue({
  render: h => h(App),
}).$mount('#app')
