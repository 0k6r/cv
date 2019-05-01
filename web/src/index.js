import Vue from 'vue'
import store from './store/index'
import router from './router'
import App from './App.vue'

new Vue({
  // data () {
  //   return {
  //     component: false,
  //   }
  // },
  el: '#app',
  router,
  store,
  render: h => h(App)
})
