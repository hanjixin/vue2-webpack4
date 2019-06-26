// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
// import Vonic from 'vonic'
import App from './App'
import store from './store'
import mintUi from 'mint-ui'
import '@/assets/app.scss'
import './assets/index.css'
import 'mint-ui/lib/style.css'

Vue.use(mintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.router = router
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
