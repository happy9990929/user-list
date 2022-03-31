import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/boostrap/main.scss'
import '@/assets/scss/helpers/myset.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
